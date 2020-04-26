//Iteration 4
class Treasure {
  constructor(game) {
    //canvas y context como arg para indicarle a blueprint/ plano del treasure que se pinte en el context del canvas
    //col y row se incluyen pq si bien el treasure se ubica en random position, debe ubicarse en el tablero de 10 x 10 celdas.
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    //this.setRandomPosition();
    this.$canvas = game.$canvas;
    this.context = game.context;
    this.treasureImage = new Image();
    this.treasureImage.src = `images/treasure.png`;
  }
  setRandomPosition() {
    const randomCol = Math.floor(Math.random() * 10); //change col position to random number (math random) integer (math floor) between 0 and 10 --> we have 10 cols
    const randomRow = Math.floor(Math.random() * 10); // --> we have 10 rows

    this.col = randomCol;
    this.row = randomRow;
  }

  //Function to draw the treasure on the board
  drawTreasure() {
    const w = this.$canvas.width;
    const h = this.$canvas.height;
    /*
    opcion 1: Declaro una function drawImage que la paso como argumento a mi addEventListener
    //defino la funcion
    
    const drawImage = () => {this.context.drawImage(this.treasureImage, (this.col * w) / 10, (this.row * h) / 10, 50, 50);}; //500x500 ==> 50x50 celda
    //La paso como segundo argumento
   this.treasureImage.addEventListener('load', drawImage);
    //La vuelvo a llamar cuando la imagen ya loaded para las futuras veces que borre y dibuje
    drawImage();
  */
    //Opcion 2: Ejecuto todo con funciones anonimas

    this.treasureImage.addEventListener('load', (event) => {
      this.context.drawImage(
        this.treasureImage,
        (this.col * w) / 10,
        (this.row * h) / 10,
        50,
        50
      );
    });

    //tengo que volver a dibujarla para las veces que borre y dibuje en el futuro

    this.context.drawImage(
      this.treasureImage,
      (this.col * w) / 10,
      (this.row * h) / 10,
      50,
      50
    );
  }
} //end of class Treasure
