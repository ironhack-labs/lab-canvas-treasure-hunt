//Iteration 2

class Character {
  constructor(col, row, $canvas, context) {
    //canvas y context se pasan como arg para indicarle a blueprint/ plano del player que tiene que pintarse en el context del canvas
    this.col = col;
    this.row = row;
    this.$canvas = $canvas;
    this.context = context;
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

  //Function to draw the player on the board
  drawPlayer() {
    const playerImage = new Image(); //initializing player image with corresponding method
    playerImage.src = 'images/character-down.png'; //linking player img woth its source
    this.context.drawImage(
      playerImage,
      player.col * 50,
      player.row * 50,
      50,
      50
    ); //accessing to context and drawing there the img with player img variable (playerImage) in the board --> this.col & this.row 50 --> image h & w
    window.addEventListener('load', (event) => {
      //
      this.context.drawImage(
        playerImage,
        player.col * 50,
        player.row * 50,
        50,
        50
      );
    });
  }
} //end of class Character
