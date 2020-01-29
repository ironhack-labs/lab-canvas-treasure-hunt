// Iteration 2

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= 50;
  }

  moveDown() {
    this.row += 50;
  }

  moveRight() {
    this.col += 50;
  }

  moveLeft() {
    this.col -= 50;
  }
}
