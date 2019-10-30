// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  const WIDTH_OF_BOARD = canvas.width; 
  const NUM_OF_COLS_AND_ROWS = 10;
  const WIDTH_OF_COLS = WIDTH_OF_BOARD / NUM_OF_COLS_AND_ROWS;
  
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

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
