// Picking out each box on the grid to be selected by event listener
const box_1 = document.getElementById("box-1");
const box_2 = document.getElementById("box-2");
const box_3 = document.getElementById("box-3");
const box_4 = document.getElementById("box-4");
const box_5 = document.getElementById("box-5");
const box_6 = document.getElementById("box-6");
const box_7 = document.getElementById("box-7");
const box_8 = document.getElementById("box-8");
const box_9 = document.getElementById("box-9");
const box_10 = document.getElementById("box-10");
const box_11 = document.getElementById("box-11");
const box_12 = document.getElementById("box-12");
const box_13 = document.getElementById("box-13");
const box_14 = document.getElementById("box-14");
const box_15 = document.getElementById("box-15");
const box_16 = document.getElementById("box-16");
const box_17 = document.getElementById("box-17");
const box_18 = document.getElementById("box-18");
const box_19 = document.getElementById("box-19");
const box_20 = document.getElementById("box-20");
const box_21 = document.getElementById("box-21");
const box_22 = document.getElementById("box-22");
const box_23 = document.getElementById("box-23");
const box_24 = document.getElementById("box-24");
const box_25 = document.getElementById("box-25");

// Selects all boxes on the grid to be turned back into white
const allBoxes = document.querySelectorAll(".grid-box");

// Selects the reset button so that all boxes can be reset 
const resetButton = document.getElementsByClassName(".reset-button");


// Function that cycles through the colors
const changeColor = function(e) {
    const box = e.target;
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
    } else
        box.classList.remove("orange");
        box.classList.add("white");
};

// Listens for a click on a particular box and runs through the above funcition
// to change the color of the box
box_1.addEventListener("click", changeColor);
box_2.addEventListener("click", changeColor);
box_3.addEventListener("click", changeColor);
box_4.addEventListener("click", changeColor);
box_5.addEventListener("click", changeColor);
box_6.addEventListener("click", changeColor);
box_7.addEventListener("click", changeColor);
box_8.addEventListener("click", changeColor);
box_9.addEventListener("click", changeColor);
box_10.addEventListener("click", changeColor);
box_11.addEventListener("click", changeColor);
box_12.addEventListener("click", changeColor);
box_13.addEventListener("click", changeColor);
box_14.addEventListener("click", changeColor);
box_15.addEventListener("click", changeColor);
box_16.addEventListener("click", changeColor);
box_17.addEventListener("click", changeColor);
box_18.addEventListener("click", changeColor);
box_19.addEventListener("click", changeColor);
box_20.addEventListener("click", changeColor);
box_21.addEventListener("click", changeColor);
box_22.addEventListener("click", changeColor);
box_23.addEventListener("click", changeColor);
box_24.addEventListener("click", changeColor);
box_24.addEventListener("click", changeColor);
box_25.addEventListener("click", changeColor);

// Reset Button - resets all boxes to white
resetButton.addEventListener("click", function () {
    allBoxes.classList.remove("blue");
    allBoxes.classList.remove("green");
    allBoxes.classList.remove("red");
    allBoxes.classList.remove("yellow");
    allBoxes.classList.remove("orange");
    allBoxes.classList.add("white");
});