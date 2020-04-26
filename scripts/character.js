class Character {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.canvas = $canvas;
    this.context = context;
    this.playerImage = new Image();
    this.playerImage.src = './images/character-down.png';
  }

  drawPlayer() {
    this.playerImage.addEventListener('load', () => {
      //console.log("im load character image and im running");
      this.context.drawImage(this.playerImage, this.col * 50, this.row * 50, 50, 50);
    });
    this.context.drawImage(this.playerImage, this.col * 50, this.row * 50, 50, 50);
  }

  moveUp() {
    this.row -= 1;
  }

  moveRight() {
    this.col += 1;
  }

  moveDown() {
    this.row += 1;
  }

  moveLeft() {
    this.col -= 1;
  }
}
