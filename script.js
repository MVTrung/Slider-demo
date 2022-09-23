let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let images = document.querySelectorAll(".slide");
let index = 0;

console.log(images);

// reset image
function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  // images.forEach(function (element) {
  //   element.style.display = "none";
  // });
}

// start
function startSlide() {
  reset();
  images[0].style.display = "block";
}

// show right image
function rightImage() {
  reset();
  images[index + 1].style.display = "block";
  index = index + 1;
  console.log(index);
}

arrowRight.addEventListener("click", clickRight);

function clickRight() {
  if (index === images.length - 1) {
    index = -1;
  }
  rightImage();
}

// show left image
function leftImage() {
  reset();
  images[index - 1].style.display = "block";
  index = index - 1;
  console.log(index);
}

arrowLeft.addEventListener("click", clickLeft);

function clickLeft() {
  if (index === 0) {
    index = images.length;
  }
  leftImage();
}

startSlide();
