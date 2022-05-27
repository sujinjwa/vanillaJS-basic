const saTriggerMargin = 300; // 특정 element가 화면 중앙에 왔을 때의 위치 구하기 위한 변수
const saElementList = document.querySelectorAll(".sa");

// fucntion saFunc() { ... }
const saFunc = function () {
  // saElementList 배열의 모든 element 조회하는 반복문
  for (const element of saElementList) {
    if (!element.classList.contains("show")) {
      // 특정 요소가 보여지지 않았을 때
      if (
        // 화면 상 보이는 높이 (body 전체 높이 x)
        window.innerHeight >
        element.getBoundingClientRect().top + saTriggerMargin // 특정 요소 위치의 top 값 + 300
      ) {
        element.classList.add("show"); // 특정 요소 보이도록 "show" class 추가
      }
    }
  }
};

window.addEventListener("scroll", saFunc);
