async function news() {
  let news = "";
  try {
    let data = await fetch("https://fatemehmkh.github.io/FakeAPI/db.json");
    let res = await data.json();
    news = res.news.map((elem) => {
      return `
        <div class="imageNewsItem">
        <img src="${elem.srcPortraite}" alt="">
        <div class="coverNews">
          <div class="IMDB">${elem.IMDB}</div>
          <h4 class="movieNameNews">${elem.genre}</h4>
          <h4 class="genreAndYearNews">${elem.year} - ${elem.country}</h4>
        </div>
        <span class="movieName">${elem.title}</span>
      </div>
        `;
    });
    document
      .querySelector(".imageNews")
      .insertAdjacentHTML("afterbegin", news.join(""));
  } catch (error) {
    console.log(error.message);
  }
}
export default news;

