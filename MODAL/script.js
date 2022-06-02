const openButton = document.querySelector("#open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector("button");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);

/*
    open button 클릭하면 모달 창 열리고,
    close button 또는 모달 창 이외의 overlay부분 클릭하면 모달 창 닫히게
*/
