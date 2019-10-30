// ITERATION 4

class Treasure {
  constructor (col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
};

