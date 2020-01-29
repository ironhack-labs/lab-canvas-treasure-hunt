// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  context.beginPath();
  for (let x = 0; x <= width; x += 50) {
    context.moveTo(x, 0);
    context.lineTo(x, height);
  }
  context.stroke();

  context.beginPath();
  for (let y = 0; y <= height; y += 50) {
    context.moveTo(0, y);
    context.lineTo(width, y);
  }
  context.stroke();

  /* alternative solution for the grid
  context.strokeStyle = 'black';
  for (let i = 0; i < 10; i++) {
    context.strokeRect(i * 50, 0, 50, 500);
    context.strokeRect(0, i * 50, 500, 50);
   }
  */
}

// Iteration 2

const player = new Character(0, 0, 0);

// Iteration 3

function drawPlayer() {
  const playerImage = new Image();
  playerImage.src = 'images/character-down.png';
  playerImage.addEventListener('load', () => {
    context.drawImage(playerImage, player.col, player.row);
  });
}

// Iteration 4

const treasure = new Treasure(0, 0);
treasure.setRandomPosition();

function drawTreasure() {
  const treasureImage = new Image();
  treasureImage.src = 'images/treasure.png';
  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, treasure.col, treasure.row, 50, 50);
  });
}

// Iteration 5

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      console.log('left');
      drawEverything();
      break;
    case 38:
      player.moveUp();
      console.log('up');
      drawEverything();
      break;
    case 39:
      player.moveRight();
      console.log('right');
      drawEverything();
      break;
    case 40:
      player.moveDown();
      console.log('down');
      drawEverything();
      break;
  }

  if (player.col === treasure.col && player.row === treasure.row) {
    player.score++;
    let counter = document.querySelector('h1 span');
    counter.innerText = player.score;
    treasure.setRandomPosition();
  }
});

function drawEverything() {
  context.clearRect(0, 0, 500, 500);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();
