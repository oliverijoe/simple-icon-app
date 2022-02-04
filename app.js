
const gridBox = document.querySelector(".grid-box");
const resetButton = document.querySelector(".reset-button");


// Function that cycles through the colors

const changeColor = function() {
    if (box.classList.contains("white")) {
        box.classList.remove("white");
        box.classList.add("blue");
    } else if (box.classList.contains("blue")) {
        box.classList.remove("blue");
        box.classList.add("red");
    } else if (box.classList.contains("red")) {
        box.classList.remove("red");
        box.classList.add("green");
    } else if (box.classList.contains("green")) {
        box.classList.remove("green");
        box.classList.add("yellow");
    } else if (box.classList.contains("yellow")) {
        box.classList.remove("yellow");
        box.classList.add("orange");
    }
};

// Click a box on the grid and cycle through the colors

box.addEventListener("click", changeColor);

// Reset Button 

resetButton.addEventListener("click", function () {
    console.log("Hi");
//    for (let i = 1; i <= 25; i++) {
//        let num = i;
//        document.getElementById(`"box-${num}"`).classList.replace("white", "blue");
//    }
});