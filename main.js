// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  context.lineWidth = 3;
  for (let x = 0; x <= height; x += width / 10) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y <= width; y += width / 10) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
}

//Iteration 2

class Character {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    this.row--;
  }
  moveRight() {
    this.column++;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.column--;
  }
}

const player = new Character(0, 0);

//Iteration 3
function drawPlayer() {
  const char_Image = '/starter-code/images/character-down.png';
  const charac_image = new Image();
  charac_image.src = char_Image;
  charac_image.addEventListener('load', () => {
    context.drawImage(charac_image, player.col * 50, player.row * 50);
  });
}

//Iteration 4
class Treasure {
  constructor() {
    this.row = 0;
    this.col = 0;
  }
  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10) * 50;
    this.col = Math.floor(Math.random() * 10) * 50;
  }
}

const treasure = new Treasure();
treasure.setRandomPosition();

function drawTreasure(col, row) {
  const trea_Image = 'starter-code/images/treasure.png';
  const treas_image = new Image();
  treas_image.src = trea_Image;
  treas_image.addEventListener('load', () => {
    context.drawImage(treas_image, treasure.col, treasure.row, 48, 48);
  });
}

function drawEverything() {
  context.clearRect(0, 0, width, height);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();

//Iteration 5

window.addEventListener('keydown', event => {
  event.preventDefault();
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
