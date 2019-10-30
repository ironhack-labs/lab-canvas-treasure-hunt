// ITERATION 2

class Character {
  constructor (col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row--;
  }

  moveRight() {
    this.col++
  }

  moveDown() {
    this.row++;
  }

  moveLeft() {
    this.col--;
  }
};


