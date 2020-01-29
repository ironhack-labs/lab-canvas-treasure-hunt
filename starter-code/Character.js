// Iteration 2

class Character {
  constructor(col, row, score) {
    this.col = col;
    this.row = row;
    this.score = score;
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= 50;
    }
  }

  moveDown() {
    if (this.row < 450) {
      this.row += 50;
    }
  }

  moveRight() {
    if (this.col < 450) {
      this.col += 50;
    }
  }

  moveLeft() {
    if (this.col > 0) {
      this.col -= 50;
    }
  }
}
