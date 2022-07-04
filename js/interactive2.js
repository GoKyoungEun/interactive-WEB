let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function () {
  progressBar = document.getElementsByClassName("progressBar")[0];
  imageAll = document.querySelectorAll(".parallax_image");
  // 이미지 갯 수를 구해 totalNum에 할당한다.
  totalNum = imageAll.length;

  window.addEventListener('scroll', scrollFunc);

}

function scrollFunc(e) {
  scrollTop = this.scrollY;

  for(var i=0; i< totalNum ; i++){
        imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/(5*(totalNum-i)) +"px)";
        console.log(scrollTop , scrollTop / (5*(totalNum-i)) );
    }
    

}
