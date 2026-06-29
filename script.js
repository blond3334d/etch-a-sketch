const boxContainer = document.querySelector(".container");
const changeSize = document.querySelector("#sizeBtn");
const colorBtn = document.querySelector("#colorBtn")
const square = document.querySelectorAll(".square");
const row = document.querySelectorAll(".row")

createGrid(16);

changeSize.addEventListener("click", () => {
    let inputPrompt = prompt("Change the grid size (1-100):", 16);

    if (inputPrompt > 100) {
        alert("Bruh... too much");
    }

    let userInput = Number(inputPrompt);
    createGrid
(userInput);
});

function createGrid(size) {
    boxContainer.innerHTML = "";
    for (let row = 0; row < size; row++) {
        const grid = document.createElement('div');
        grid.setAttribute('class', 'row');
    for (let square = 0; square < size; square++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        grid.appendChild(square);
    }
        boxContainer.appendChild(grid);
    }
};

const setColor = (e) => {
    colorPick = rgb(0, 0, 0);
    e.style.backgroundColor = colorPick;

    if (e.style.opacity <= 0.9) {
        e.style.opacity = +e.style.opacity + 0.1;
    }
}

square.forEach((e) => {
    e.addEventListener("mouseover", setColor(e));
})




/*
function incrementGridOpacity() {
    const currentOpacity = parseFloat(
        getComputedStyle(this).getPropertyValue("--grid-opacity")
    )
    
    console.log("Current opacity: ", currentOpacity);
    const opacity = Math.min(currentOpacity + 0.1, 1);

    this.style.setProperty("--grid-opacity", opacity);
} */