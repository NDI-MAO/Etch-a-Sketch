const container = document.getElementById("container");
let grid;
let gridSize = grid*grid;

function createGrid() {
    container.innerHTML = "";

for (let i = 1; i <= gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "newDivId";
    container.appendChild(newDiv);
    newDiv.style.width = newDiv.style.height =(500 / grid) + "px";
    newDiv.addEventListener("mouseover", black);
}
}
function black(event) {
    event.target.style.backgroundColor = "black";
}
function regenerateGrid() {
    gridSize = grid * grid;
    createGrid();
}
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("sizeBox")) {
        if (event.target.id === "grid10"){
            grid = 10;
        } else if (event.target.id === "grid16") {
            grid = 16;
        } else if (event.target.id === "grid64") {
            grid = 64;
        } else if (event.target.id === "grid100") {
            grid = 100;
        } else { alert("Please enter a valid grid size.");
            };
            
        }
        regenerateGrid(); // Regenerate the grid with the new size
    }
);

// Initial grid creation
createGrid();