
/* Change la couleur du fond au passage de la souris sur le titre*/

let colorArray = ["#DDFAE5", "#DDE0FA", "#FADDF7", "#FAF2DD", "#FADDDD", "#FAF9DD", "#F6DDFA"];
var randomColor;
var previousColor;

const titleShape = document.getElementById("title-shape");
var background = document.getElementsByClassName("background");

function changeBgColor() {

  /* Permet de ne pas tomber 2 fois de suite sur la meme couleur */
  do {
    randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
  } while (randomColor == previousColor);
  previousColor = randomColor;

  for(var i = 0; i < background.length; i++) {
    background[i].style.background = randomColor;
  }
}

window.addEventListener("load", changeBgColor);
titleShape.addEventListener("mouseover", changeBgColor);

/* Change les slides des projets */

class Slider {
  constructor(slidesClass, prev, next) {
    this.slides = document.getElementsByClassName(slidesClass);
    this.prev = document.getElementById(prev);
    this.next = document.getElementById(next);
    this.slideIndex = 1;

    this.prev.addEventListener("onclick", this.plusSlide(-1));
    this.next.addEventListener("onclick", this.plusSlide(1));
  }

  plusSlide(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    for( let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }

    this.slides[this.slideIndex - 1].style.display = "block";
  }
}

const project1Slide = new Slider("slide", "prev", "next");
const project2Slide = new Slider("slide2", "prev2", "next2");


/*
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
      slideIndex = 1;
    }
  if (n < 1) {
      slideIndex = slides.length;
    }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

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
*/