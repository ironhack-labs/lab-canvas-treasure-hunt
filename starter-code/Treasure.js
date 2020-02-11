class Treasure {
  constructor() {
    this.row = 0;
    this.col = 0;
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }
}
