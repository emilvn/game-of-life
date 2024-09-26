import * as view from "./view.js";
import { Grid } from "./model.js";

window.addEventListener("load", init);

const ROWS = 32;
const COLS = 90;
let grid;
let generation = 0;

function init() {
  view.init(ROWS, COLS);
  grid = new Grid(ROWS, COLS);
  view.draw(grid);
  setInterval(() => {
    nextGeneration();
    generation++;
    view.draw(grid, generation);
  }, 200);
}

function countNeighbors(row, col) {
  return grid.neighbourValues(row, col).length;
}

function nextGeneration() {
  const nextGen = new Grid(ROWS, COLS);
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const nbrs = countNeighbors(i, j);
      let newVal = 0;
      if (nbrs < 2 || nbrs > 3) {
        newVal = 0;
      } else if (nbrs === 2) {
        newVal = grid.get(i, j);
      } else if (nbrs === 3) {
        newVal = 1;
      }
      nextGen.set(i, j, newVal);
    }
  }
  grid = nextGen;
}

export function restart() {
  grid = new Grid(ROWS, COLS);
  generation = 0;
  view.draw(grid);
}

export function clear() {
  grid.clear();
}

export function random() {
  grid.random();
}
