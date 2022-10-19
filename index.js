const menuBtn = document.querySelector(".navbar-toggler");
const circle = document.querySelector(".circle");
const drinks = document.querySelector(".thumb");

const openedMenu = () => {
  if (menuBtn.ariaExpanded === "true") {
    circle.style.top = "38.5rem";
    drinks.style.top = "56.5rem"
  } else {
    circle.style.top = "30rem"
    drinks.style.top ="48"
  }
}

const imgSlider = (image) => {
  const starbs = document.querySelector(".starbucks");
  starbs.src = image;
};

const changeCircleColour = (colour) => {
  const circle = document.querySelector(".circle");
  circle.style.transition = "0.5s ease-in-out";
  circle.style.background = colour;
};


menuBtn.addEventListener("click", openedMenu);
