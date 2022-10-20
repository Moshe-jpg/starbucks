const menuBtn = document.querySelector(".navbar-toggler");
const circle = document.querySelector(".circle");
const drinks = document.querySelector(".thumb");
const drinkMessage = document.querySelector(".content .textBox p");

const openedMenu = () => {
  if (menuBtn.ariaExpanded === "true") {
    circle.style.top = "42.5rem";
    drinks.style.top = "62.5rem";
  } else {
    circle.style.top = "34rem";
    drinks.style.top = "54.5rem";
  }
};

const changeMessage = (message) => {
  drinkMessage.textContent = message;
};

const imgSlider = (image) => {
  const starbs = document.querySelector(".starbucks");
  starbs.src = image;
};

const changeCircleColour = (colour) => {
  circle.style.transition = "0.5s ease-in-out";
  circle.style.background = colour;
};

var supportsOrientationChange = "onorientationchange" in window,
  orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(
  orientationEvent,
  function () {
    if (window.orientation == 0) {
      document.getElementById("portrait").style.display = "";
      document.getElementById("landscape").style.display = "none";
    } else if (window.orientation == 90) {
      document.getElementById("portrait").style.display = "none";
      document.getElementById("landscape").style.display = "";
    }
  },
  false
);

menuBtn.addEventListener("click", openedMenu);
