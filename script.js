let gridSize = 16;
const canvasSize = 960;
let cellSize = canvasSize / gridSize;
console.log(cellSize);

const canvas = document.querySelector(".canvas");

function generateGrid(grid = gridSize, boxSize = cellSize) {
  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    div.className = "box";
    div.style.border = "1px solid #dfe3e8";
    div.style.height = `${boxSize}px`;
    div.style.width = `${boxSize}px`;
    canvas.appendChild(div);
  }
}

generateGrid();
