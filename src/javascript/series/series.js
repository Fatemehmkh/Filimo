async function series() {
  let series = "";
  try {
    let data = await fetch("https://fatemehmkh.github.io/FakeAPI/db.json");
    let res = await data.json();
    series = res.series.map((elem) => {
      return `
      <div class="imageSeriesItem">
      <img src="${elem.srcLandscape}" alt="">
      <div class="coverSeries">
        <div class="IMDB">${elem.IMDB}</div>
        <h4 class="nameSeries">${elem.nameFA} - ${elem.episode}</h4>
        <h4 class="genreSeries">${elem.genre}</h4>
      </div>
    </div> 
      `;
    });
    document
      .querySelector(".imageSeries")
      .insertAdjacentHTML("afterbegin", series);
  } catch (error) {
    console.log(error.message);
  }
}
export default series;
