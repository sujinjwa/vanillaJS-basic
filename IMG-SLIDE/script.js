const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const slider = document.querySelector(".slider");

const clickBtn1 = () => {
  // slider.classList.add("showBtn1");
  slider.classList.remove("showBtn2");
  slider.classList.remove("showBtn3");
  slider.classList.add("showBtn1");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn1.classList.add("active");
};

const clickBtn2 = () => {
  slider.classList.remove("showBtn1");
  slider.classList.remove("showBtn3");
  slider.classList.add("showBtn2");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn2.classList.add("active");
};

const clickBtn3 = () => {
  slider.classList.remove("showBtn1");
  slider.classList.remove("showBtn2");
  slider.classList.add("showBtn3");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");

  // slider.style.transform = "translate(-200vw)";
};

btn1.addEventListener("click", clickBtn1);
btn2.addEventListener("click", clickBtn2);
btn3.addEventListener("click", clickBtn3);
