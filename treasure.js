//Iteration 4
class Treasure {
  constructor($canvas, context) {
    //canvas y context como arg para indicarle a blueprint/ plano del treasure que se pinte en el context del canvas
    //col y row se incluyen pq si bien el treasure se ubica en random position, debe ubicarse en el tablero de 10 x 10 celdas.
    this.col = 0;
    this.row = 0;
    this.$canvas = $canvas;
    this.context = context;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10); //change col position to random number (math random) integer (math floor) between 0 and 10 --> we have 10 cols
    this.row = Math.floor(Math.random() * 10); // --> we have 10 rows
  }

  //Function to draw the treasure on the board
  drawTreasure() {
    const treasureImage = new Image();
    treasureImage.src = `images/treasure.png`;
    this.context(treasureImage, treasure.col * 50, treasure.row * 50, 50, 50);
    window.addEventListener('load', (event) => {
      //
      this.context.drawImage(
        treasureImage,
        treasure.col * 50,
        treasure.row * 50,
        50,
        50
      );
    });
  }
} //end of class Treasure
