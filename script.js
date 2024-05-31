sketchPad = document.querySelector(".sketch-pad");

sideLength = 16;
sketchPadStyle = getComputedStyle(sketchPad);
sketchPadPixel = parseInt(sketchPadStyle.width);
squarePixel = Math.floor(sketchPadPixel / sideLength);
sketchPad.style.width = `${sideLength * squarePixel}px`;
sketchPad.style.height = `${sideLength * squarePixel}px`;

function createSquare() {
    square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squarePixel}px`;
    square.style.height = `${squarePixel}px`;
    sketchPad.appendChild(square);
}


function createGrid() {
    for (i = 0; i < sideLength * sideLength; i++) {
        createSquare();
    }
}



createGrid();

allSquares = document.querySelectorAll(".square");
allSquares.forEach((sq) => {
    sq.addEventListener("mouseover", (e) => {
        e.target.classList.add("color");
    });
});