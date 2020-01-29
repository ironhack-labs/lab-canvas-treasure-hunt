// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  context.strokeStyle = 'black';
  for (let i = 0; i < 500; i++) {
    context.moveTo(i * 50, 0);
    context.lineTo(i * 50, 500);
    context.stroke();
  }

  for (let i = 0; i < 500; i++) {
    context.moveTo(0, i * 50);
    context.lineTo(500, i * 50);
    context.stroke();
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= 1;
  }

  moveRight() {
    this.col += 1;
  }

  moveDown() {
    this.row += 1;
  }

  moveLeft() {
    this.col -= 1;
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}

const player = new Character(0, 0);
const treasure = new Treasure(0, 0);

console.log(player.col, player.row);

function drawPlayer() {
  const imageUrl = '/starter-code/images/character-down.png';
  const down = new Image();
  down.src = imageUrl;
  down.addEventListener('load', () => {
    context.drawImage(down, player.col * 50, player.row * 50, 50, 50);
  });
}

function drawTreasure() {
  const imageUrl = '/starter-code/images/treasure.png';
  const treasureImg = new Image();
  treasureImg.src = imageUrl;
  if (player.row === treasure.row && player.col === treasure.col) {
    treasure.setRandomPosition();
    context.drawImage(treasureImg, treasure.col * 50, treasure.row * 50, 50, 50);
  } else {
    treasureImg.addEventListener('load', () => {
      context.drawImage(treasureImg, treasure.col * 50, treasure.row * 50, 50, 50);
    });
  }
}

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      drawEverything();
      break;
    case 38:
      player.moveUp();
      drawEverything();
      break;
    case 39:
      player.moveRight();
      drawEverything();
      break;
    case 40:
      player.moveDown();
      drawEverything();
      break;
  }
});

function drawEverything() {
  context.clearRect(0, 0, 500, 500);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();
