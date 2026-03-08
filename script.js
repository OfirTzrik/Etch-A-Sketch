const container = document.querySelector("#grid-container");

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");

        // Make the grid fit the container no matter the size
        square.style.height = `${512 / 16}px`;
        square.style.width = `${512 / 16}px`;
        square.style.backgroundColor = "white"
        square.style.borderBottom = "1px solid black";
        square.style.borderRight = "1px solid black";

        square.classList.add("square");
        
        container.appendChild(square);
    }
}

createGrid();

const grid = document.querySelectorAll(".square");
for (const square of grid) {
    square.addEventListener("mouseenter", event => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}