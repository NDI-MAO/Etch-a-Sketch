const container = document.getElementById("container");
const pickColorBtn = document.getElementById("pickColor");
const rainbowBtn = document.getElementById("rainbow");
const toggleGridBtn = document.getElementById("toggleGrid");
const clearBtn = document.getElementById("clear");
const colorPicker = document.getElementById("colorPicker");

let grid=8;
let gridSize = grid*grid;
let selectedColor ="black"

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
    colorChoice = "pickColor";
});
rainbowBtn.addEventListener("click", function(){
    colorChoice = "rainbow";
});
toggleGridBtn.addEventListener("click", function(){
    grid += "outlines";
});
clearBtn.addEventListener("click", function(){
    colorChoice = "clear";
})

function getColor(e){
    switch(colorChoice){
        case "pickColor":
            colorPicker.addEventListener("click", function(){
                e.target.style.backgroundColor = value;  
            })
            break;
        case "rainbow":
            const hexChars = "0123456789ABCDEF";
            for (let i = 0; i < 6; i++) {
              selectedColor = "#"+hexChars[Math.floor(Math.random() * hexChars.length)];
            }   
            e.target.style.backgroundColor = selectedColor;
            break;
        case "outlines":
            e.target.style.borderColor = "black";
            break;
        case "clear":
            selectedColor = rgb(210, 210, 210);
            e.target.style.backgroundColor = selectedColor;


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
            grid = 16;
        } else if (event.target.id === "grid64") {
            grid = 64;
        } else if(event.target.id === "customgrid") {
            grid = parseInt(prompt("register your grid", 10));
            while (grid >= 101) {
                alert("100 is the max number");
                grid = parseInt(prompt("register your grid", 10));
            }
        }
         else { alert("Please enter a valid grid size.");
            };
        }
        regenerateGrid();
    }
);


createGrid();