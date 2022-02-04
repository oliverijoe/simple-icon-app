const box1 = document.getElementById("box1");
const gridBox = document.querySelector(".grid-box");
const resetButton = document.querySelector(".reset-button");

// Function that cycles through the colors

const changeColor = function() {
    if (gridBox.classList.contains("white")) {
        gridBox.classList.remove("white");
        gridBox.classList.add("blue");
    } else if (gridBox.classList.contains("blue")) {
        gridBox.classList.remove("blue");
        gridBox.classList.add("red");
    }
};



// Click a box on the grid and cycle through the colors

box1.addEventListener("click", changeColor());