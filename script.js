const container = document.getElementById("container");
const pickColorBtn = document.getElementById("pickColor");
const rainbowBtn = document.getElementById("rainbow");
const toggleGridBtn = document.getElementById("toggleGrid");
const clearBtn = document.getElementById("clear");
const colorPicker = document.getElementById("colorPicker");


let grid=5;
let gridSize = grid*grid;
let colorChoice = "pickColor";
colorPicker.value = "#2F4F4F"; 

function createGrid() {
    container.innerHTML = "";

for (let i = 1; i <= gridSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        container.appendChild(newDiv);
        newDiv.style.width = newDiv.style.height =(500 / grid) + "px";
        newDiv.addEventListener("mouseover", getColor);
    }
}
//add event listeners
pickColorBtn.addEventListener("click", function(){
    colorPicker.click()
    colorChoice = "pickColor";
});
colorPicker.addEventListener("change", function(event){
})
rainbowBtn.addEventListener("click", function(){
    colorChoice = "rainbow";
});
toggleGridBtn.addEventListener("click", function(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        let setGrid = cell.style.boxShadow;
        if (setGrid) {
            cell.style.boxShadow = "";
        } else {
            cell.style.boxShadow = "inset 0 0 0 .5px black";
        }
    });
});
clearBtn.addEventListener("click", function(){
    colorChoice = "clear";
});
function getColor(e){
    switch(colorChoice){
        case "pickColor":
            e.target.style.backgroundColor = colorPicker.value;
            break;
        case "rainbow":
            const hexChars = "0123456789ABCDEF";
            let rainbowColor = "#";
            for (let i = 0; i < 6; i++) {
                rainbowColor += hexChars[Math.floor(Math.random() * hexChars.length)];
            }
            e.target.style.backgroundColor = rainbowColor;
            break;
            case "clear":
                e.target.style.backgroundColor = ""; 
                break;
    }
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
            grid = 25;
        } else if (event.target.id === "grid64") {
            grid = 50;
        } else if(event.target.id === "customgrid") {
            grid = parseInt(prompt("register your grid", 10));
            grid = Math.min(Math.max(grid, 1), 100);
            }
        regenerateGrid();
    }
        
});
createGrid();