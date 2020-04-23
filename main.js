//accessing the canvas
const $canvas = document.querySelector('canvas');

console.dir($canvas); //access the canvas so you can view the object and properties
console.log(`console of the context`, $canvas); //just a console.log test to see the difference

//accessing the context
const context = $canvas.getContext('2d');

//create player based on its blueprint class
const player = new Character(0, 0, $canvas, context); //0, 0 stands for initial position according to x (w) & y (h)

//create treasure based on its blueprint
const treasure = new Treasure(3, 7, $canvas, context); //3, 7 stands for initial position we've given according to the treasure is in a different position than the player

// Iteration 1

w = $canvas.width; //calling width
h = $canvas.height; //calling height

function drawGrid() {
  //loop para dibujar el canvas
  // x (horizontal)
  context.beginPath(); //el inicio de pintar
  for (let x = 0; x <= w; x += 50) {
    //avanza 50px en c/iteration pq c/celda es de 50px
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x, 0);
    context.lineTo(x, h); //moviendo el eje x hacia abajo
    context.stroke();

    // y (vertical)
    for (let y = 0; y <= h; y += 50) {
      context.strokeStyle = 'black';
      context.lineWidth = 1;
      context.moveTo(0, y);
      context.lineTo(w, y);
      context.stroke();

      context.closePath(); // no need to close the path in this case because the loop will go only until it reaches 10 celdas of 50px each --> 500 h and w
    }
  }
}
drawGrid(); //calling function and therefore painting the grid

//Function to 'erase' the canvas
function clearCanvas() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);
  //0 , 0 --> eje x 0 eje y 0 es desde dónde comenzar a borrar. er y 4to arg. dan la orden de hasta dónde borrar (todo el h y todo el w)
}

//draw grid, player and treasure --> repeat
function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything(); //calling draw everything

//Iteration 5 --> react based on keys 37, 38, 39 & 40

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      if (player.col === treasure.col && player.row === treasure.row) {
        player.moveLeft();
        treasure.setRandomPosition();
        clearCanvas();
        drawEverything(); //draw grid, player and treasure
        break;
      } else {
        console.log('left');
        player.moveLeft();
        clearCanvas();
        drawEverything();
        break;
      }
    case 38:
      if (player.col === treasure.col && player.row === treasure.row) {
        player.moveUp();
        treasure.setRandomPosition();
        clearCanvas();
        drawEverything();
        break;
      } else {
        console.log('up');
        player.moveUp();
        treasure.setRandomPosition();
        clearCanvas();
        drawEverything();
        break;
      }
    case 39:
      if (player.col === treasure.col && player.row === treasure.row) {
        player.moveRight();
        treasure.setRandomPosition();
        clearCanvas();
        drawEverything();
        break;
      } else {
        console.log('right');
        player.moveRight();
        treasure.setRandomPosition();
        clearCanvas();
        drawEverything();
        break;
      }
    case 40:
      if (player.col === treasure.col && player.row === treasure.row) {
        player.moveDown();
        treasure.setRandomPosition();
        clearCanvas();
        drawEverything();
        break;
      } else {
        console.log('down');
        player.moveDown();
        treasure.setRandomPosition();
        clearCanvas();
        drawEverything();
        break;
      }
  }
});
