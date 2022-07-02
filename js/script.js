let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_5, parallax_6, parallax_7;

window.onload = function () {
  progressBar = document.getElementsByClassName("progressBar")[0];

  parallax_0 = document.getElementById("parallax_0");
  parallax_1 = document.getElementById("parallax_1");
  parallax_2 = document.getElementById("parallax_2");
  parallax_3 = document.getElementById("parallax_3");
  parallax_4 = document.getElementById("parallax_4");
  parallax_5 = document.getElementById("parallax_5");
  parallax_6 = document.getElementById("parallax_6");

  window.addEventListener('resize', stageResize, false);
  window.addEventListener('mousemove', mouseMove, false);
  window.addEventListener('scroll', scrollFunc, false);

  stageResize();
  loop();
}

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;

  // scroll값을 받아서 %로 바꿔서 per에 할당한디.
  let per = Math.ceil(scrollTop / (_documentHum - _windowHNum) * 100);
  // per에 할당한 값을 progressBar 너비값에 할당한다.
  progressBar.style.width = per + "%";

  // 스크롤을 하면 y값이 주어진 값만큼 움직인다.
  parallax_0.style.transform = "translate3d(0px ," + scrollTop * .03 + "px , 0px"; // +는 아래로 내려감
  parallax_1.style.transform = "translate3d(0px ," + -scrollTop * .03 + "px , 0px"; // -는 위로 올라감
  parallax_2.style.transform = "translate3d(0px ," + -scrollTop * .12 + "px , 0px";
  parallax_3.style.transform = "translate3d(0px ," + -scrollTop * .16 + "px , 0px";
  parallax_4.style.transform = "translate3d(0px ," + -scrollTop * .22 + "px , 0px";
  parallax_5.style.transform = "translate3d(0px ," + -scrollTop * .25 + "px , 0px";
}

// 
function stageResize() {
  // document 너비값을 구해서 _documentHum에 할당
  _documentHum = document.body.offsetHeight;
  // window 높이값을 구해서 _windowHNum에 할당
  _windowHNum = window.outerHeight;
}

// 마우스가 움직이면 이미지도 움직이는 loop
function loop() {
  // 마우스 가속도
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  // 이미지 4,5,6번은 마우스 움직임에 따라 주어진 값만큼 움직인다.
  parallax_4.style.transform = "translate3d(" + mx / 140 + "px , " + -scrollTop * .22 + "px, 0px)";
  parallax_5.style.transform = "scale(1.1) translate(" + mx / 50 + "px , " + -scrollTop * .25 + "px)";
  parallax_6.style.transform = "scale(1.2) translate(" + mx / 20 + "px , " + -my / 20 + "px)";

  window.requestAnimationFrame(loop);
}

function mouseMove(e) {
  // window의 너비와 높이값을 구해서 /2 해주면 정가운데가 0이된다.
  // 마우스를 오른쪽으로 가면 +고 왼쪽으로 가면 -이다.
  x = (e.clientX - window.innerWidth / 2);
  y = (e.clientY - window.innerHeight / 2);
}