class Treasure {
  constructor() {
    this.canvas = $canvas;
    this.context = context;
    this.col;
    this.row;
    this.setRandomPosition();
    this.treasureImage = new Image();
    this.treasureImage.src = './images/treasure.png';
  }

  drawTreasure() {
    this.treasureImage.addEventListener('load', () => {
      //console.log("im load character image and im running");
      this.context.drawImage(this.treasureImage, this.col * 50, this.row * 50, 50, 50);
    });
    this.context.drawImage(this.treasureImage, this.col * 50, this.row * 50, 50, 50);
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}
