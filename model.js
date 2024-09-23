/**
 * Alle ændringer der skal foretages skal registreres før vi ændrer noget.
 *
 * Vi laver et nyt grid til næste generation,
 * og erstatter det gamle grid med dette grid når den er færdig med at processe hvad der skal fjernes
 *
 * currentGen = grid
 * nextGen = currentGen
 *
 * for rows of currentGen {
 *  for cols of currentGen {
 *      nbrs = countNeighbors(row, col)
 *      if nbrs < 2 || nbrs > 3: newVal = 0
 *      if nbrs == 2: newVal = val
 *      if nbrs == 3: newVal = 1
 *      nextGen.setCellValue(newVal, row, col)
 *  }
 * }
 */

export class Grid {
  grid;
  rowNum;
  colNum;

  constructor(rowNum, colNum) {
    this.rowNum = rowNum;
    // fill with random 0/1s
    for (let i = 0; i < rowNum; i++) {
      const row = [];
      for (let j = 0; j < colNum; j++) {
        if (Math.random() < 0.15) {
          row[j] = 1;
        } else {
          row[j] = 0;
        }
      }
      this.grid[i] = row;
    }
    this.colNum = colNum;
  }

  getCellContent(row, col) {
    if (this.grid[row] === undefined) return;
    return this.grid[row][col];
  }

  getIndexContent(i) {
    const [row, col] = this.getRowAndColFromIndex(i);
    return this.getCellContent(row, col);
  }

  writeToIndex(element, i) {
    const [row, col] = this.getRowAndColFromIndex(i);
    this.writeToCell(element, row, col);
  }

  writeToCell(element, row, col) {
    console.log(element, row, col);
    this.grid[row][col] = element;
  }

  getRowAndColFromIndex(i) {
    const col = i % this.colNum;
    const row = Math.floor(i / this.rowNum);
    return [row, col];
  }

  clear() {
    this.grid = [];
    for (let i = 0; i < this.rowNum; i++) {
      this.grid[i] = [];
    }
  }

  dump() {
    console.table(this.grid);
  }
}
