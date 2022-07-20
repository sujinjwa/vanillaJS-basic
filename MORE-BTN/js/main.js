var container = document.querySelector(".gallery");
var btn = document.querySelector(".load-more");
var addItemCount = 8; // 클릭할 때마다 추가해줄 리스트의 개수
var added = 8; // 더보기 버튼 클릭해서 추가된 리스트 개수, 리스트 항목 모두 로드했을 때 더보기 버튼 사라지게 하기 위한 용도
var allData = []; // 빈 배열 선언

function a() {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4) {
      var data = JSON.parse(this.response); // JSON 파일 불러옴
      // console.log(data);
      allData = data; // allData 배열에 data 배열 한번에 저장
      // console.log(allData);
      // console.log(allData[0].title);

      // 처음 홈페이지 접속할 때 보일 8개의 리스트 생성 및 추가
      for (var i = 0; i <= 7; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "gallery-item");
        var a = document.createElement("a");
        a.innerText = allData[i].title;
        li.appendChild(a);
        container.appendChild(li);
      }
    }
  };
  req.open("GET", "./data/content.json");
  req.send();
} // ready function
a();

const showMore = () => {
  var slicedData;

  // 예시) var allData = [0, 1, 2, 3, 4]
  // var slicedData = allData.slice(0, addItemCount) : allData 배열에서 0번째부터 8번째 전(7번째)까지 값 가져옴

  // slicedData := 0~7번째, 8~15번째, 16~23번째, ... 등 8개의 리스트 임시 저장하는 배열
  slicedData = allData.slice(added, added + addItemCount);
  added = added + addItemCount;

  // 만약 모든 데이터 다 보여준 경우 "더보기 버튼" 없애기
  if (allData.length <= added) {
    btn.classList.add("hidden");
  }

  // console.log(slicedData);
  // console.log(allData);

  // 더보기 클릭 시 8개의 리스트 생성 및 추가
  for (var i = 0; i <= 7; i++) {
    var li = document.createElement("li");
    li.setAttribute("class", "gallery-item");
    var a = document.createElement("a");
    a.innerText = slicedData[i].title;
    li.appendChild(a);
    container.appendChild(li);
  }
};
btn.addEventListener("click", showMore);
