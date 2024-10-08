async function hot() {
    let hot = "";
    try {
      let data = await fetch("https://fatemehmkh.github.io/FakeAPI/db.json");
      let res = await data.json();
      hot = res.hot.map((elem) => {
        return `
          <div class="imageHotItem">
          <img src="${elem.srcPortraite}" alt="">
          <div class="coverHot">
            <div class="IMDB">${elem.IMDB}</div>
            <h4 class="movieNameHot">${elem.genre}</h4>
            <h4 class="genreAndYearHot">${elem.year} - ${elem.country}</h4>
          </div>
          <span class="movieName">${elem.title}</span>
        </div>
          `;
      });
      document
        .querySelector(".imageHot")
        .insertAdjacentHTML("afterbegin", hot.join(""));
    } catch (error) {
      console.log(error.message);
    }
  }
  export default hot;
  