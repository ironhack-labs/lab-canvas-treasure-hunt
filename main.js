const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const basePixel = width/10;

const background = new Background(canvas, context, basePixel);

const treasure = new Treasure(0,0, canvas, context);
treasure.setRandomPosition();


const player = new Character(0, 0, canvas, context, basePixel);
    
function drawEverything() {
  background.clearCanvas();
  background.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure(treasure.col, treasure.row);

}

drawEverything();


window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  switch (event.keyCode) {
      //right
      case 39:
          player.moveRight ();
          drawEverything();
          break
      //left
      case 37:
        player.moveLeft ();
        drawEverything();
          break
      //down
      case 40:
        player.moveDown ();
        drawEverything();
          break    
      //up
      case 38:
        player.moveUp ();
        drawEverything();
          break                               
  }
})