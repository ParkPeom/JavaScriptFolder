//window.onload = function () {
// 이벤트를 바인딩해서 누적할때는 반드시
// addEventListener를 써야한다.
window.addEventListener("load", function () {
  btnPrint = document.getElementById("btn-print");

  var add = function (x, y) {
    return x + y;
  };
  // 함수에 바로 대입할수있다. 굳이 함수명이 필요없다
  // 대입하기 위한 이름만 필요하니까
  btnPrint.onclick = function () {
    // var btnPrint = document.getElementById("btn-print");
    var x = prompt("x값을 입력하세요", 0);
    var y = prompt("y값을 입력하세요", 0);
    x = parseInt(x);
    y = parseInt(y);
    btnPrint.value = x + y;
  };
});
alert(add);
