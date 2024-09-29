let swiperSlider = document.querySelectorAll(".slider");
swiperSlider.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});
