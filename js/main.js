
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