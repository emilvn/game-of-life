import * as controller from "./controller.js";

export function init(rows, cols) {
  const restartButton = document.querySelector("#restart");
  restartButton.addEventListener("click", () => {
    controller.restart();
  });

  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", () => {
    controller.clear();
  });

  const randomButton = document.querySelector("#random");
  randomButton.addEventListener("click", () => {
    controller.random();
  });
  initCells(rows, cols);
}

function initCells(rows, cols) {
  const grid = document.querySelector(".grid");
  document.documentElement.style.setProperty("--row-count", rows);
  document.documentElement.style.setProperty("--col-count", cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      grid.appendChild(cell);
    }
  }
}

export function draw(grid, generation) {
  const generationElement = document.querySelector("#generation");
  generationElement.textContent = generation;
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    const { row, col } = grid.rowColFor(index);
    const value = grid.get(row, col);
    cell.style.backgroundColor = value === 1 ? "#CAFEBABE" : "#0f0f0f";
  });
}
