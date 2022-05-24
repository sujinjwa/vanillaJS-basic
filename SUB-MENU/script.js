var header = document.querySelector("header"),
  mainMenuList = document.querySelectorAll(".mainmenu > li"),
  subMenu = document.querySelectorAll(".submenu"),
  // querySelectorAll 로 불러오면, subMenu라는 배열로 요소들 저장됨
  headerHeight = header.offsetHeight,
  subMenuHeight = 0;

/*
    var B = A.offsetHeight; // border까지의 높이 (50)
    var B = A.clientHeight; // padding까지의 높이 (50)

    변수명 subMenuHeight에 subMenu 중에서 가장 높이가 큰 요소의 높이 구해서 저장.
    특정 하위 메뉴의 높이가 늘어나도, js 코드 수정할 필요 없음!
*/

// subMenu 배열의 길이만큼 순회
for (var i = 0; i < subMenu.length; i++) {
  if (subMenu[i].offsetHeight > subMenuHeight) {
    // i번째 요소의 height가 subMenuHeight보다 클 때
    subMenuHeight = subMenu[i].offsetHeight;
  }
}

/*
  mainMenuList에 마우스 올리면 header 높이를 headerHeight와 subMenuHeight를 더한 최종 크기로 변경
  mainMenuList에 마우스 벗어나면 headerHeight로 변경
*/

function openSubMenu() {
  header.style.height = headerHeight + subMenuHeight + "px";
}

function closeSubMenu() {
  header.style.height = headerHeight + "px";
}

for (var i = 0; i < mainMenuList.length; i++) {
  mainMenuList[i].addEventListener("mouseover", openSubMenu);
  mainMenuList[i].addEventListener("mouseout", closeSubMenu);
}
