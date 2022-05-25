var header = document.querySelector("header"),
  mainMenuList = document.querySelectorAll(".mainmenu > li"),
  subMenu = document.querySelectorAll(".submenu"),
  // querySelectorAll 로 불러오면, subMenu라는 배열로 요소들 저장됨
  headerHeight = header.offsetHeight,
  subMenuHeight = 0;

/*
  mainMenuList에 마우스 올리면 header 높이를 headerHeight와 subMenuHeight를 더한 최종 크기로 변경
  mainMenuList에 마우스 벗어나면 headerHeight로 변경
*/

function openSubMenu() {
  subMenuHeight = this.querySelector("ul").offsetHeight; // this := mainMenuList[i], ul := subMenu[i]
  header.style.height = headerHeight + subMenuHeight + "px";
}

function closeSubMenu() {
  header.style.height = headerHeight + "px";
}

for (var i = 0; i < mainMenuList.length; i++) {
  // subMenuHeight = subMenu[i].offsetHeight;
  /*
      마우스가 올라간 그 요소의 자식요소(ul)의 높이를 변수명 subMenuHeight에 저장하고
      header의 높이를 headerHeight + subMenuHeight로 변경
  */
  mainMenuList[i].addEventListener("mouseover", openSubMenu);
  mainMenuList[i].addEventListener("mouseout", closeSubMenu);
}
