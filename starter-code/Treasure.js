// Iteration 4

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = 50 * Math.floor(Math.random() * 10);
    this.row = 50 * Math.floor(Math.random() * 10);
  }
}
