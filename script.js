const container = document.querySelector("#grid-container");
const btn = document.querySelector("button");
const info = document.querySelector("#info");

function createGrid(dim) {
    for (let i = 0; i < dim * dim; i++) {
        const square = document.createElement("div");

        // Make the grid fit the container no matter the size
        square.style.height = `${512 / dim}px`;
        square.style.width = `${512 / dim}px`;
        square.style.backgroundColor = "white"

        square.classList.add("square");
        
        container.appendChild(square);

        square.addEventListener("mouseenter", event => {
            if (event.target.style.backgroundColor == "white") {
                // Not colored before
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                event.target.style.opacity = "0.1";
            } else {
                // Colored before, change opacity
                event.target.style.opacity = `${Number(event.target.style.opacity) + 0.1}`;
            }
        });
    }
}

createGrid(16);

function resetGrid() {
    const grid = document.querySelectorAll(".square");
    for (const square of grid) {
        square.remove();
    }
}

btn.addEventListener("click", () => {
    const newDim = parseInt(prompt("How many rows will the new grid have? (8 to 100)"));

    // Only make changes if a number in the allowed range was passed
    if (!(Number.isNaN(newDim) || newDim < 8 || newDim > 100)) {
        resetGrid();
        createGrid(newDim);
        info.textContent = `Grid is ${newDim}x${newDim}`;
    }
});