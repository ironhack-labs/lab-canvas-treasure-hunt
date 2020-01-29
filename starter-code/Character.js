// ex2
class Character {
  // a funcao para o boneco mexer em cada açao 1
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }

  moveUp() {
    if (this.row - 1 >= 0) {
      this.row -= 1;
    }
  }
  moveRight() {
    if (this.col + 1 < 10) {
      this.col += 1;
    }
  }
  moveDown() {
    if (this.row + 1 < 10) {
      this.row += 1;
    }
  }
  moveLeft() {
    if (this.col - 1 >= 0) {
      this.col -= 1;
    }
  }
}
