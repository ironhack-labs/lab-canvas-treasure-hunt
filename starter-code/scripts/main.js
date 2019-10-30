// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  for (i=0;i<10;i++){
    context.strokeRect(i*width/10,0,width/10,height);
    context.strokeRect(0,i*width/10,width,height/10);
  }
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();