const container = document.querySelector(".container");
function createGrid(gridSize) {
    for (let j = 1; j <= gridSize; j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.classList.add(`row-${j}`);
        for (let i = 1; i <= gridSize; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add(`square-${j}-${i}`);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

createGrid(16);

const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener('click', () => {
    let size = prompt("Please enter a new grid size (<=100): ", "16");
    size = Number(size);
    if (size <= 100 && size > 0) {
        container.innerHTML = "";
        createGrid(size);
    } else {
        alert("Please input a valid number");
    }
})

