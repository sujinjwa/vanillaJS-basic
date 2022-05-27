const saTriggerMargin = 300; // 특정 element가 화면 중앙에 왔을 때의 위치 구하기 위한 변수
let saTriggerHeight = 0; // data-sa-trigger 속성 가진 디비전과, 속성 없는 디비전 기준으로 요소 나타나는 위치 정하기 위한 변수
const saElementList = document.querySelectorAll(".sa");

// fucntion saFunc() { ... }
const saFunc = function () {
  // saElementList 배열의 모든 element 조회하는 반복문
  for (const element of saElementList) {
    if (!element.classList.contains("show")) {
      // 특정 요소가 보여지지 않았을 때
      if (element.dataset.saTrigger) {
        // (= '#saDiv5' or '#saDiv9') data-sa-trigger 속성 가진 디비전일 경우
        saTriggerHeight =
          document
            .querySelector(element.dataset.saTrigger)
            .getBoundingClientRect().top + saTriggerMargin;
        /*  
          element.dataset.saTrigger = '#saDiv5'이므로 
          document.querySelector(element.dataset.saTrigger)은 'saDiv5'를 id로 갖는 '디비전 5' div 의미
        */
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin; // 특정 요소 위치의 top 값 + 300
      }
      // 스크롤 내리다가 화면 상 보이는 높이 (window.innerHeight)가 saTriggerHeight보다 더 커질 때 (= 해당 element가 화면 중앙 쯤 위치했을 때)
      if (window.innerHeight > saTriggerHeight) {
        element.classList.add("show"); // 특정 요소 보이도록 "show" class 추가
      }
    }
  }
};

window.addEventListener("scroll", saFunc);
