
/* Change la couleur de la forme au passage de la souris */
let colorArray = ["#DDFAE5", "#DDE0FA", "#FADDF7", "#FAF2DD", "#FADDDD", "#FAF9DD", "#F6DDFA"];
var randomColor;

const titleShape = document.getElementById("title-shape");
const btnGoto = document.getElementById("goto-portfolio");
const footer = document.getElementById("footerID");
const firstProjectBg = document.getElementById("first-project-info");

titleShape.addEventListener("mouseover", function() {
    randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    titleShape.style.backgroundColor = randomColor;
    btnGoto.style.backgroundColor = randomColor;
    footer.style.backgroundColor = randomColor;
    firstProjectBg.style.backgroundColor = randomColor;
});

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