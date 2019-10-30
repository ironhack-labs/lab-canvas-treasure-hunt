// Iteration 2
class Character {
  constructor(){
    this.col = 0;
    this.row = 0;
  }

  moveUp() {
    this.row > 0 ? this.row -= 1 : this.row = 0
  }
  
  moveRight() {
    this.col < 9 ? this.col += 1 : this.col = 9
  }

  moveDown() {
    this.row < 9 ? this.row += 1 : this.row = 9
  }

  moveLeft() {
    this.col > 0 ? this.col -= 1 : this.col = 0
  }
}

class Treasure {
  constructor() {
    this.row;
    this.col;
  }

  setRandomPosition() {
    this.col = Math.floor(10*Math.random());
    this.row = Math.floor(10*Math.random());
  }
}


// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// I didn't see these at first...
// const width = canvas.width;
// const height = canvas.height;

const WIDTH_OF_BOARD = canvas.width; 
const NUM_OF_COLS_AND_ROWS = 10;
const WIDTH_OF_COLS = WIDTH_OF_BOARD / NUM_OF_COLS_AND_ROWS;

let player = new Character;

let treasure = new Treasure;
treasure.setRandomPosition();

// Iteration 1
function drawGrid() {

  // draw vertical lines
  for (let i=0; i <= NUM_OF_COLS_AND_ROWS; i++) {
    context.beginPath();
    context.moveTo(i*WIDTH_OF_COLS, 0);
    context.lineTo(i*WIDTH_OF_COLS, 500);
    context.closePath();
    context.stroke();
  }

  // draw horizontal lines
  for (let i=0; i <= NUM_OF_COLS_AND_ROWS; i++) {
    context.beginPath();
    context.moveTo(0, i*WIDTH_OF_COLS);
    context.lineTo(500, i*WIDTH_OF_COLS);
    context.closePath();
    context.stroke();
  }
}

function drawPlayer() {
  const image = new Image();
  image.src = 'images/character-down.png';

  image.addEventListener('load', () => {
      context.drawImage(image, player.col * 50, player.row  * 50, 48, 48);
  });
  console.log(`Player row: ${player.row}, Player col: ${player.col}`);
}

function drawTreasure() {
  let col = treasure.col;
  let row = treasure.row;
  // console.log(`Column: ${col}, Row: ${row}`);
  // context.font = '32px Helvetica, sans-serif';
  // context.fillText('T', (col * 50) + 20, (row * 50) + 50); 

  const image = new Image();
  image.src = 'images/treasure.png';
  image.addEventListener('load', () => {
      context.drawImage(image, col * 50, row * 50, 48, 48);
  });
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();

function clearPosition(col, row) {
  context.clearRect((col*50)+1, (row*50)+1, 46, 46);
}

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      clearPosition(player.col, player.row);
      player.moveLeft();
      break;
    case 38:
      console.log('up');
      clearPosition(player.col, player.row);
      player.moveUp();
      break;
    case 39:
      console.log('right');
      clearPosition(player.col, player.row);
      player.moveRight();
      break;
    case 40:
      console.log('down');
      clearPosition(player.col, player.row);
      player.moveDown();
      break;
  }
  // Set new treasure position if player reaches it 
  if (player.col == treasure.col && player.row == treasure.row) {
    treasure.setRandomPosition();
    drawTreasure();
  }
  drawPlayer();
});
