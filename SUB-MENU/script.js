var header = document.querySelector("header"),
  nav = document.querySelector("nav");

function openSubMenu() {
  header.style.height = "270px";
}

function closeSubMenu() {
  header.style.height = "50px";
}

nav.addEventListener("mouseover", openSubMenu);
nav.addEventListener("mouseout", closeSubMenu);

/*
        nav에 마우스 올리면 header 높이가 270px 로,
        마우스 나가면 header 높이를 50px로 변경
    */
