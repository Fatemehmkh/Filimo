async function special() {
  let special = "";
  try {
    let data = await fetch("https://fatemehmkh.github.io/FakeAPI/db.json");
    let res = await data.json();
    special = res.special.map((elem) => {
      return `
      <div class="imageSpecialBox">
      <img
        src="${elem.srcLandscape}"
        alt=""
      />
      <div class="cover">
        <span
          class="nameOfMovie"
          >${elem.nameFA}</span
        >
        <span
          class="genreAndYear"
          >${elem.genre} - ${elem.year}</span
        >
      </div>
    </div>`;
    });
    document
      .querySelector(".imageSpecial")
      .insertAdjacentHTML("afterbegin", special.join(""));
  } catch (error) {
    console.log(error.message);
  }
}
export default special;
