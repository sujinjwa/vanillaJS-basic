var imageButtons = document.querySelectorAll(".images__button"); // 3개의 고양이 image 버튼을 배열로 선언

function changeImage() {
  var image = this.dataset.image; // imageButtons 배열 내 해당 요소의 커스텀 속성을 "image" 변수에 할당

  document.querySelector("#chosenImg").src = image; // <img> 요소의 src를 해당 요소의 커스텀 속성으로 설정
}

// imageButtons 배열 내 3개의 고양이 버튼 요소 하나씩 조회하는 반복문
for (var i = 0; i < imageButtons.length; i++) {
  imageButtons[i].addEventListener("click", changeImage); // 특정 버튼 클릭할 경우 changeImage 함수 실행
}
