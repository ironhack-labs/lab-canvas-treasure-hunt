class Character {
  constructor(col, row, direction, score) {
    this.col = col;
    this.row = row;
    this.direction = 'down';
    this.score = 0;
  }
  moveUp() {
    this.col -= 50;
    if (this.col < 0) {
      this.col += 50;
    }
  }
  moveRight() {
    this.row += 50;
    if (this.row > 450) {
      this.row -= 50;
    }
  }
  moveDown() {
    this.col += 50;
    if (this.col > 450) {
      this.col -= 50;
    }
  }
  moveLeft() {
    this.row -= 50;
    if (this.row < 0) {
      this.row += 50;
    }
  }
}

const player = new Character(0, 0); // (0,0) = Initial position

const characterImageDirection = direction => {
  switch (direction) {
    case 'down':
      return './images/character-down.png';
      break;
    case 'up':
      return './images/character-up.png';
      break;
    case 'left':
      return './images/character-left.png';
      break;
    case 'right':
      return './images/character-right.png';
      break;
  }
};
