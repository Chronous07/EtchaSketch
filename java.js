const gridContainer = document.querySelector(".container");
const sizingButton = document.getElementById("sizingButton");

sizingButton.addEventListener("click", resetBoard);
createGrid(16);

function resetBoard() {
    let gridSize = Number(prompt("Please select a new grid size (max 100)"));
    
    if (isNaN(gridSize)){gridSize = 16;};

    if(gridSize > 100) {
        gridSize = 100;
    };

    clearBoard();
    createGrid(gridSize);
}

function clearBoard(){
     while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function hover (e){
    let target = e.target;
    console.log(getRandomRGBColor());
    target.style.background = getRandomRGBColor();
}

function getRandomRGBColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `RGB(${red},${green},${blue})`;
}

function createGrid(size){
    for (i = 0; i < size; i++) {
        let gridRow = document.createElement("div");

        for (x = 0; x < size; x++) {
            let gridSquare = document.createElement("div");

            gridSquare.id = "square";
            gridSquare.addEventListener("mouseout", hover)
            gridRow.id = "row";

            gridRow.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridRow);
    }
}