const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear");
const submitButton = document.querySelector(".submit");
const userContent = document.querySelector(".content");

let allDivs;
let currentDivCount = 256;


//generate x amount of divs and add classes
function createDiv(squares = 256) {
    let gridSize = Math.sqrt(squares);
    let percentageGrid = 100 / gridSize;
    let percentageRounded = Math.round(percentageGrid * 100) /100

    for (i = 0; i < squares; i++) {
        const newDiv = document.createElement('div'); //create div
        newDiv.className = "grid-square"  //add class
        gridContainer.appendChild(newDiv); //add div to parent
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${percentageRounded}%)`; //change grid properites to maintain same size
    allDivs = document.querySelectorAll('div'); //select all divs after generation
    addEventListeners(allDivs);
    currentDivCount = squares;
}

//add event listeners to each div in the parent
function addEventListeners(target) {
    target.forEach(element => {
        if (element.classList.contains("grid-square")) { //add event listener to each div with certain class
            element.addEventListener('mouseover', () => {
                element.style.backgroundColor = "black"
            })
        }
    });
}

function removeDivs() {
    allDivs.forEach(element => {
        if (element.classList.contains("grid-square")) {
            element.remove();
        }
    });
}

function clear(){
    removeDivs();
    createDiv(currentDivCount);
}

clearButton.addEventListener('click', () => clear());
submitButton.addEventListener('click', () => {
    let userGridSize = Math.pow(userContent.value, 2);
    removeDivs();
    console.log(userGridSize)
    createDiv(userGridSize);
})


// The goal right now is to modify the css to change the grid rule so that it works with different sizes.