const boxContainer = document.querySelector(".container");
const changeSize = document.querySelector("#sizeBtn");
const colorBtn = document.querySelector("#colorBtn");
const closeColorBtn = document.querySelector("#colorBtn");
const resetBtn = document.querySelector("#resetBtn");
const square = document.querySelectorAll(".square");
const row = document.querySelectorAll(".row")
let currentSize = 16;

createGrid(currentSize);

function createGrid(size) {
    boxContainer.innerHTML = "";
    for (let row = 0; row < size; row++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');

        for (let square = 0; square < size; square++) {
            const singleSquare = document.createElement('div');
            singleSquare.setAttribute('class', 'square');

            singleSquare.addEventListener("mouseover", incrementGridOpacity);

            row.appendChild(singleSquare);
        }
        boxContainer.appendChild(row);
    }
};

changeSize.addEventListener("click", () => {
    let inputPrompt = prompt("Change the grid size (1-100):", 16);

    if (inputPrompt > 100) {
        alert("Bruh... too much");
    }

    let userInput = Number(inputPrompt);
    createGrid(userInput);

    currentSize = userInput;
});
 
let currentMode = "grayscale";

function switchColor() {
    colorBtn.addEventListener("click", () => {
        if (currentMode === "grayscale") {
            currentMode = "rainbow";
            colorBtn.classList.add("active");
        } else {
            currentMode = "grayscale";
            colorBtn.classList.remove("active");
        }
    })

    return currentMode;
}

switchColor();

function incrementGridOpacity() {
    const currentOpacity = parseFloat(
        window.getComputedStyle(this).getPropertyValue("--grid-opacity")
    )

    let colorPick = "";
    const addOpacity = Math.min(currentOpacity + 0.1, 1);

    if (currentMode === "grayscale") {
        colorPick = `rgba(0, 0, 0, ${addOpacity})`;
        this.style.setProperty("--grid-opacity", addOpacity);
        this.style.setProperty("background", colorPick);
    } else if (currentMode === "rainbow") {
        const rgbColors = ['255, 0, 0', '255, 127, 0', '255, 255, 0', '0, 255, 0', '0, 0, 255', '75, 0, 130', '148, 0, 211'];
        let rgbRandom = rgbColors[Math.floor(Math.random() * rgbColors.length)];
        colorPick = `rgba(${rgbRandom}, ${addOpacity})`;
        this.style.setProperty("--grid-opacity", addOpacity);
        this.style.setProperty("background", colorPick);
    }
};

resetBtn.addEventListener("click", () => {
    createGrid(currentSize);
});