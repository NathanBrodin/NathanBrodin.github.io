

/* Change la couleur de la forme au passage de la souris */
let colorArray = ["#DDE0FA", "#FADDF7", "#FAF2DD", "#FADDDD", "#FAF9DD", "#F6DDFA"];
const titleShape = document.getElementById("titleShape");
var randomColor;

titleShape.addEventListener("mouseover", function() {
    randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    titleShape.style.backgroundColor = randomColor;
});

/*
titleShape.addEventListener("mouseout", function() {
    var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    titleShape.style.backgroundColor = randomColor;
});
*/