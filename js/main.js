
/* Change la couleur de la forme au passage de la souris */

let colorArray = ["#DDFAE5", "#DDE0FA", "#FADDF7", "#FAF2DD", "#FADDDD", "#FAF9DD", "#F6DDFA"];
var randomColor;
var previousColor;

const titleShape = document.getElementById("title-shape");
const btnGoto = document.getElementById("goto-portfolio");
const footer = document.getElementById("footerID");
const firstProjectBg = document.getElementById("first-project-info");
const secondProjectBg = document.getElementById("second-project-info");

function changeBgColor() {

    randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    titleShape.style.backgroundColor = randomColor;
    btnGoto.style.backgroundColor = randomColor;
    footer.style.backgroundColor = randomColor;
    firstProjectBg.style.backgroundColor = randomColor;
    secondProjectBg.style.backgroundColor = randomColor;
}

window.addEventListener("load", changeBgColor);
titleShape.addEventListener("mouseover", changeBgColor);

/* Change les slides des projets */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = slides.length
    }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

/* Projet 2 */
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("slide2");

  if (n > slides2.length) {
      slideIndex2 = 1
    }
  if (n < 1) {
      slideIndex2 = slides2.length
    }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slides2[slideIndex2-1].style.display = "block";
}