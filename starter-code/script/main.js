class Player {
  constructor(){
    this.col = 0;
    this.row = 0;
    this.direction = 'down';
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
const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

const WIDTH_OF_BOARD = $canvas.width; 
const NUM_OF_COLS_AND_ROWS = 10;
const WIDTH_OF_COLS = WIDTH_OF_BOARD / NUM_OF_COLS_AND_ROWS;

// Let's make a player
let player = new Player;

// Let's make some treasure!
let treasure = new Treasure;
treasure.setRandomPosition();


// Iteration 1 - Draw the board
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

function drawPlayer(player) {
  let image;
  // Switch doesn't seem to work but if does...
  if (player.direction === 'up') {
    const playerImgUp = new Image();
    playerImgUp.src = 'images/character-up.png';
    image = playerImgUp;
  } else if (player.direction === 'right') {
    const playerImgRight = new Image();
    playerImgRight.src = 'images/character-right.png';
    image = playerImgRight;
  } else if (player.direction === 'down') {
    const playerImgDown = new Image();
    playerImgDown.src = 'images/character-down.png';
    image = playerImgDown;
  } else if (player.direction === 'left') {
    const playerImgLeft = new Image();
    playerImgLeft.src = 'images/character-left.png';
    image = playerImgLeft;
  }
  
  image.addEventListener('load', () => {
    context.drawImage(image, player.col * 50, player.row  * 50, 48, 48);
  });
} 

function drawTreasure() {
  const image = new Image();
  image.src = 'images/treasure.png';
  image.addEventListener('load', () => {
      context.drawImage(image, treasure.col * 50, treasure.row * 50, 48, 48);
  });
}

function drawEverything() {
  drawGrid();
  drawPlayer(player);
  drawTreasure();
}

function clearPosition(col, row) {
  // size needs to be smaller than player & treasure images 
  // & centered to stop removing the board lines
  context.clearRect((col*50)+1, (row*50)+1, 46, 46);
}

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      // console.log('left');
      clearPosition(player.col, player.row);
      player.moveLeft();
      player.direction = 'left';
      break;
    case 38:
      // console.log('up');
      clearPosition(player.col, player.row);
      player.moveUp();
      player.direction = 'up';
      break;
    case 39:
      // console.log('right');
      clearPosition(player.col, player.row);
      player.moveRight();
      player.direction = 'right';
      break;
    case 40:
      // console.log('down');
      clearPosition(player.col, player.row);
      player.moveDown();
      player.direction = 'down';
      break;
  }
  // Make some new treasure if player reaches it 
  if (player.col == treasure.col && player.row == treasure.row) {
    clearPosition(treasure.col, treasure.row);
    treasure.setRandomPosition();
    drawTreasure();
  }
  drawPlayer(player);
});


drawEverything();