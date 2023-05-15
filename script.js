let gridSize = 16;
const canvasSize = document.querySelector(".canvas").height;
let boxSize = 100 / gridSize + "%";

const container = document.querySelector(".canvas");

function generateGrid(grid = gridSize) {
  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    div.className = "box";
    boxSize = 100 / gridSize + "%";
    div.style.flexBasis = boxSize;
    div.style.height = boxSize;
    container.appendChild(div);
  }
  const boxes = document.querySelectorAll(".box");
  let previousColor = "";
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        previousColor = box.style.backgroundColor;
        box.style.backgroundColor = "#fca311";
      }
    });
  });
}
generateGrid();

function removeGrid() {
  container.innerHTML = "";
}

const slider = document.querySelector(".slider");

slider.addEventListener("change", (e) => {
  gridSize = slider.value;
  console.log(gridSize);
  removeGrid();
  generateGrid(gridSize);
});
slider.addEventListener("mousemove", () => {
  slider.style.background = `linear-gradient(90deg, #fca311 ${slider.value}%, #fff ${slider.value}%)`;
});
