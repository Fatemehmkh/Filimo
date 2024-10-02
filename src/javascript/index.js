let slide = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let counter = 0;
 slide.forEach((item, index) => {
   item.style.transform = `translateX(${(index) * 100}%)`;
 });

function counterSlide(c) {
  slide.forEach((item, index) => {
    item.style.transform = `translateX(${(index - c) * 100}%)`;
  });
}
/*disabled and enabled*/
const isDisabled = () => {
  if (counter === 0) {
    next.disabled = false;
    prev.disabled = true;
  } else if (counter === slide.length - 1) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};

/*move slider*/
counterSlide(counter);
next.addEventListener("click", function () {
  if (counter === slide.length - 1) {
    counter = slide.length - 1;
  } else {
    counter++;
  }
  isDisabled();
  counterSlide(counter);
});
prev.addEventListener("click", function () {
  if (counter === 0) {
    counter = 0;
  } else {
    counter--;
  }
  isDisabled();
  counterSlide(counter);
});
/* keyleft keyright*/
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    repeatSlide("right");
  }
  if (e.key === "ArrowLeft") {
    repeatSlide("left");
  }
});
function repeatSlide(direct) {
  if (direct === "right") {
    if (counter === slide.length - 1) {
      counter = slide.length - 1;
    } else {
      counter++;
    }
    isDisabled();
    counterSlide(counter);
  }
  if (direct === "left") {
    if (counter === 0) {
      counter = 0;
    } else {
      counter--;
    }
    isDisabled();
    counterSlide(counter);
  }
}

