let gridSize = 16;
const canvasSize = document.querySelector(".canvas").height;
let boxSize = 100 / gridSize + "%";
let previousColor = "#fff";
let currentColor = "#fca311";
let currentMode = "Sketch";

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
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        box.style.backgroundColor = currentColor;
      }
    });
    box.addEventListener("click", (e) => {
      box.style.backgroundColor = currentColor;
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

slider.addEventListener("input", (e) => {
  const cells = document.querySelectorAll(".cellSize");
  cells.forEach((cellSizeValue) => {
    cellSizeValue.innerHTML = e.target.value;
  });
});

const reset = document.querySelector(".Reset");

reset.addEventListener("click", () => {
  removeGrid();
  generateGrid();
});

const erase = document.querySelector(".Erase");

function eraseElements() {
  currentMode = "Erase";
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        box.style.backgroundColor = "#fff";
      }
    });
    box.addEventListener("click", (e) => {
      box.style.backgroundColor = "#fff";
    });
  });
  erase.classList.add("glow");
  sketch.classList.remove("glow");
}

erase.addEventListener("click", () => {
  eraseElements();
});

const sketch = document.querySelector(".Sketch");
sketch.addEventListener("click", (e) => {
  currentMode = "Sketch";
  generateGrid();
  sketch.classList.add("glow");
  erase.classList.remove("glow");
});

const color = document.querySelector(".colorPicker");
const style = document.documentElement.style;

color.addEventListener("change", (e) => {
  currentColor = e.target.value;
  style.setProperty("--colorPicker-shadow", `${currentColor}66`);
});
