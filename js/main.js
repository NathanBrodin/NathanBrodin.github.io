
/* Change la couleur de la forme au passage de la souris */
let colorArray = ["#DDFAE5", "#DDE0FA", "#FADDF7", "#FAF2DD", "#FADDDD", "#FAF9DD", "#F6DDFA"];
var randomColor;

const titleShape = document.getElementById("title-shape");
const btnGoto = document.getElementById("goto-portfolio");
const footer = document.getElementById("footerID");
const firstProjectShape = document.getElementById("first-project-shape");

titleShape.addEventListener("mouseover", function() {
    randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    titleShape.style.backgroundColor = randomColor;
    btnGoto.style.backgroundColor = randomColor;
    footer.style.backgroundColor = randomColor;
    firstProjectShape.style.backgroundColor = randomColor;
});