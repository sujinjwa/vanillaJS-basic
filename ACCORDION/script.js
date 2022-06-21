// 제목 클릭하면 제목의 부모 class에 active 넣어주기
// active 있다면, body 보이게
// collapse all 누르면 전부 접히게 적용

var btnCollapse = document.querySelector("#btn-collapse"),
  heading = document.querySelectorAll(".panel-heading"),
  question = document.querySelectorAll(".panel-question"),
  answer = document.querySelectorAll(".panel-body");

const activateBody = () => {
  // step1. panel의 body가 모두 안 보이도록
  for (var i = 0; i < answer.length; i++) {
    answer[i].style.display = "none";
  }
  // step2. panel의 questions에 active 있다면, body 보이도록
  var activeBody = document.querySelector(".panel-question.active .panel-body");
  activeBody.style.display = "block";
};

activateBody();

const clickHeading = (event) => {
  // 제목 클릭하면 제목의 부모 class에 active 넣어주기
  for (var j = 0; j < question.length; j++) {
    // step 1. 모든 question에 있는 active 제거
    question[j].classList.remove("active");
  }
  // step 2. 해당 quesiton의 부모 노드에만 active 추가
  event.target.parentNode.classList.add("active"); // questions 가 parentNode
  activateBody();
};

for (var i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", clickHeading);
  // 주의! clickHeading 할 때 event 넘겨주더라도 괄호 () 사용하지 않고, 함수 이름만 작성한다
}

// collapse all 버튼 클릭하면 모든 answer 안 보이도록
const clickBtn = () => {
  for (var i = 0; i < answer.length; i++) {
    answer[i].style.display = "none";
  }
};

btnCollapse.addEventListener("click", clickBtn);
