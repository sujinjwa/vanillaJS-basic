const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

const clickToggle = () => {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};

toggle.addEventListener("click", clickToggle);
