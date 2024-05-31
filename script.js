sketchPad = document.querySelector(".sketch-pad");
newGridBtn = document.querySelector(".new-grid-button");

sideLength = 16;
sketchPadStyle = getComputedStyle(sketchPad);
sketchPadPixel = parseInt(sketchPadStyle.width);

newGridBtn.addEventListener("click", resetGrid);

function createSquare() {
    square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squarePixel}px`;
    square.style.height = `${squarePixel}px`;
    sketchPad.appendChild(square);
}


function createGrid() {
    squarePixel = Math.floor(sketchPadPixel / sideLength);
    sketchPad.style.width = `${sideLength * squarePixel}px`;
    sketchPad.style.height = `${sideLength * squarePixel}px`;
    for (i = 0; i < sideLength * sideLength; i++) {
        createSquare();
    }
    allSquares = document.querySelectorAll(".square");
    allSquares.forEach((sq) => {
        sq.addEventListener("mouseover", (e) => {
            e.target.setAttribute("class", "color");
        });
    });
}


function resetGrid() {
    do {
        sideLength = prompt("Enter grid side length");
    } while (sideLength <= 0 || sideLength > 100)

    allSquares.forEach((sq) => {
        sq.remove();
    })
    createGrid();
}

createGrid();



