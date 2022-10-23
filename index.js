const menuBtn = document.querySelector(".navbar-toggler");
const circle = document.querySelector(".circle");
const drinks = document.querySelector(".thumb");
const drinkMessage = document.querySelector(".content .textBox p");
const form = document.querySelector("form");

const openedMenu = () => {
  if (menuBtn.ariaExpanded === "true") {
    circle.style.top = "36.5rem";
    drinks.style.top = "62.5rem";
  } else {
    circle.style.top = "29.5rem";
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

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("service_enpvni6", "contact_form", "form", "iwUP8eH1NlcSvoxkb")
    .then(
      (result) => {
        console.log(result.text);
        let inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.value = ""));

        let contactHeader = document.getElementById("contact-header");
        contactHeader.style.fontSize = "35px";
        contactHeader.style.color = "green";
        contactHeader.textContent = "Message Sent ✔";

        let submitBtn = document.getElementById("submitBtn");
        submitBtn.style.backgroundColor = "green";
      },
      (error) => {
        console.log(error.text);
      }
    )
    .then(() => {
      setTimeout(() => {
        let contactHeader = document.getElementById("contact-header");
        contactHeader.style.fontSize = "25px";
        contactHeader.style.color = "#000000";
        contactHeader.textContent = "Get In Touch";

        let submitBtn = document.getElementById("submitBtn");
        submitBtn.style.backgroundColor = "#1247b8";
      }, 5000);
    });
};

form.addEventListener("submit", sendEmail);

menuBtn.addEventListener("click", openedMenu);
