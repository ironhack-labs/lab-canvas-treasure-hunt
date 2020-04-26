//Iteration 2

class Character {
  constructor(game) {
    //canvas y context se pasan como arg para indicarle a blueprint/ plano del player que tiene que pintarse en el context del canvas
    this.col = 0;
    this.row = 0;
    this.game = game;
    this.$canvas = game.$canvas;
    this.context = game.context;
    this.score = game.score;
    this.playerImage = new Image(); //initializing player image with corresponding method
    this.playerImage.src = 'images/character-down.png'; //linking player img woth its source
  }
  moveUp() {
    //up
    this.row--;
  }
  moveRight() {
    //right
    this.col++;
  }
  moveDown() {
    //down
    this.row++;
  }
  moveLeft() {
    //left
    this.col--;
  }
  //Iteration 3

  collision() {
    const playerCol = this.col;
    const playerRow = this.row;
    const treasureCol = this.game.treasure.col;
    const treasureRow = this.game.treasure.row;

    if (playerCol === treasureCol && playerRow === treasureRow) {
      console.log('Collision detected');
      this.game.treasure.setRandomPosition();
      this.game.score++;
    }
  }
  //Function to draw the player on the board
  drawPlayer() {
    this.playerImage.addEventListener('load', (event) => {
      this.context.drawImage(
        this.playerImage,
        this.col * 50, //position en columna //500x500 -> celda 50x50
        this.row * 50, //posicion en fila
        50, //ancho
        50 //alto
      );
    });
    this.context.drawImage(
      this.playerImage,
      this.col * 50,
      this.row * 50,
      50,
      50
    );

    //this. context --> accessing to context and drawing there the img with playerImg in the board --> this.col & this.row 50 --> image h & w
    //
  } //end of drawPlayer function
} //end of class Character
