class Game {
  constructor($canvas, context) {
    this.$canvas = $canvas;
    this.context = context;
    this.score = 0;
    this.w = $canvas.width;
    this.h = $canvas.height;

    this.grid = new Grid(this); //inicializando copia del grid del bluerpint en bkacground

    //create player based on its blueprint class
    this.player = new Character(this); //0, 0 stands for initial position according to x (w) & y (h)

    //create treasure based on its blueprint
    this.treasure = new Treasure(this); //3, 7 stands for initial position we've given according to the treasure is in a different position than the player

    this.scoreBoard = new Scoreboard(this);

    this.setKeyBindings();
  }

  //Function to 'erase' the canvas
  clearScreen() {
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    //0 , 0 --> eje x 0 eje y 0 es desde dónde comenzar a borrar. er y 4to arg. dan la orden de hasta dónde borrar (todo el h y todo el w)
  }

  //draw grid, player and treasure --> repeat
  drawEverything() {
    //1) CLean everything; (2) draw grid; (3) draw Player; (4) draw Treasure
    this.clearScreen();
    this.grid.drawGrid();
    this.player.drawPlayer();
    this.treasure.drawTreasure();
    this.scoreBoard.drawScoreboard();
  }
  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();
      // React based on the key pressed
      //con cada key press, quiero mover al jugador y dibujar todo de nuevo
      switch (event.keyCode) {
        case 37:
          //left
          this.player.moveLeft();
          this.player.collision();
          this.drawEverything();
          break;
        case 38:
          //up
          this.player.moveUp();
          this.player.collision();
          this.drawEverything();
          break;
        case 39:
          //right
          this.player.moveRight();
          this.player.collision();
          this.drawEverything();
          break;
        case 40:
          //down
          this.player.moveDown();
          this.player.collision();
          this.drawEverything();
          break;
      }
    });
  }
}

//Iteration 5 --> react based on keys 37, 38, 39 & 40
