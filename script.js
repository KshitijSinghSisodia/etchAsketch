let gridSize = 16;
const canvas = document.querySelector(".canvas");
const container = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
const reset = document.querySelector(".Reset");
const erase = document.querySelector(".Erase");
const sketch = document.querySelector(".Sketch");
const color = document.querySelector(".colorPicker");
const style = document.documentElement.style;

let boxSize = `${100 / gridSize}%`;
let previousColor = "#fff";
let currentColor = "#fca311";
let currentMode = "Sketch";

function generateGrid(grid = gridSize) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    div.className = "box";
    boxSize = `${100 / gridSize}%`;
    div.style.flexBasis = boxSize;
    div.style.height = boxSize;
    fragment.appendChild(div);
  }

  container.appendChild(fragment);
}

generateGrid();

function removeGrid() {
  container.innerHTML = "";
}

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
    cellSizeValue.textContent = e.target.value;
  });
});

reset.addEventListener("click", () => {
  removeGrid();
  generateGrid();
});

function eraseElements() {
  currentMode = "Erase";
  erase.classList.add("glow");
  sketch.classList.remove("glow");
}

erase.addEventListener("click", eraseElements);

sketch.addEventListener("click", () => {
  currentMode = "Sketch";
  generateGrid();
  sketch.classList.add("glow");
  erase.classList.remove("glow");
});

color.addEventListener("change", (e) => {
  currentColor = e.target.value;
  style.setProperty("--colorPicker-shadow", `${currentColor}66`);
});

container.addEventListener("mouseover", (e) => {
  if (
    currentMode === "Sketch" &&
    e.target.classList.contains("box") &&
    e.buttons === 1
  ) {
    e.target.style.backgroundColor = currentColor;
  } else if (
    currentMode === "Erase" &&
    e.target.classList.contains("box") &&
    e.buttons === 1
  ) {
    e.target.style.backgroundColor = "#fff";
  }
});

container.addEventListener("click", (e) => {
  if (currentMode === "Sketch" && e.target.classList.contains("box")) {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "Erase" && e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "#fff";
  }
});
