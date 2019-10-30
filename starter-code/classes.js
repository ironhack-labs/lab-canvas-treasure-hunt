function drawGrid() {
  for (i = 0; i <= 500; i += 50) {
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(500, i);
    context.stroke();
    context.closePath();
  }

  for (i = 0; i <= 500; i += 50) {
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, 500);
    context.stroke();
    context.closePath();
  }
}

class Character {
  constructor(col, row, direction) {
    this.col = col;
    this.row = row;
    this.direction = direction;
  }

  moveUp() {
    if (this.row !== 0) {
      this.row -= 1;
      this.direction = 'up';
    } else {
      this.row = this.row;
    }
  }

  moveRight() {
    if (this.col !== 9) {
      this.col += 1;
      this.direction = 'right';
    } else {
      this.col = this.col;
    }
  }

  moveDown() {
    if (this.row !== 9) {
      this.row += 1;
      this.direction = 'down';
    } else {
      this.row = this.row;
    }
  }

  moveLeft() {
    if (this.col !== 0) {
      this.col -= 1;
      this.direction = 'left';
    } else {
      this.col = this.col;
    }
  }
}

class Treasure {
  constructor(col, row) {
    this.trCol = col;
    this.trRow = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 9);
    this.row = Math.floor(Math.random() * 9);
  }
}
