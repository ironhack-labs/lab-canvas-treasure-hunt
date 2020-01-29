// ex2
class Character {
  // a funcao para o boneco mexer em cada açao 1
  constructor(col, row) {
    this.row = row;
    this.col = col;
    this.score = 0;
    this.direction = 'N';
  }

  moveUp() {
    if (this.row - 1 >= 0) {
      this.row -= 1;
      this.direction = 'N';
    }
  }
  moveRight() {
    if (this.col + 1 < 10) {
      this.col += 1;
      this.direction = 'E';
    }
  }
  moveDown() {
    if (this.row + 1 < 10) {
      this.row += 1;
      this.direction = 'S';
    }
  }
  moveLeft() {
    if (this.col - 1 >= 0) {
      this.col -= 1;
      this.direction = 'W';
    }
  }
  incScore() {
    this.score += 1;
  }
}
