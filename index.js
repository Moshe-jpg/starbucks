const imgSlider = (image) => {
  const starbs = document.querySelector(".starbucks");
  starbs.src = image;
};

const changeCircleColour = (colour) => {
  const circle = document.querySelector(".circle");
  circle.style.transition = "0.5s ease-in-out";
  circle.style.background = colour;
};
