//Iteration 2 - Character Class

class Character {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }

  moveDown() {
    this.col++;
  }
  moveUp() {
    this.col--;
  }
  moveLeft() {
    this.row--;
  }
  moveRight() {
    this.row++;
  }
}
