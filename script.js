let gridSize = 16;
const canvasSize = 960;
let boxSize = 100 / gridSize + "%";

const container = document.querySelector(".canvas");

function generateGrid(grid = gridSize) {
  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    div.className = "box";
    div.style.border = "1px solid #dfe3e8";
    boxSize = 100 / gridSize + "%";
    div.style.flexBasis = boxSize;
    div.style.height = boxSize;
    container.appendChild(div);
  }
  const boxes = document.querySelectorAll(".box");
  let previousColor = "";
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      previousColor = box.style.backgroundColor;
      box.style.backgroundColor = "#fca311";
    });
  });
}
generateGrid();

function removeGrid() {
  container.innerHTML = "";
}

const sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener("click", (e) => {
  gridSize = +prompt("Enter the Grid size");
  removeGrid();
  generateGrid(gridSize);
});
