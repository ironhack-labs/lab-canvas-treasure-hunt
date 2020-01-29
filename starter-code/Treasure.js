class Treasure {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }

  setRandomPosition() {
    const randomPosX = Math.floor(Math.random() * 10);
    const randomPosY = Math.floor(Math.random() * 10);
    this.row = randomPosX;
    this.col = randomPosY;
  }
}
