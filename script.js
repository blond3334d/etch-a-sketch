const boxContainer = document.querySelector(".container");
let userInput = 16;

for (let row = 0; row < userInput; row++) {
    const grid = document.createElement('div');
    grid.setAttribute('class', 'row');
    for (let squares = 0; squares < userInput; squares++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        grid.appendChild(square);
    }

        boxContainer.appendChild(grid);
}