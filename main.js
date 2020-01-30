const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
console.log('context');

context.fillStyle = 'black';

let nmboflines = 10;
let sizeOfLine = width / nmboflines;

// Iteration 1
function drawGrid() {
  for (let x = 0; x <= height; x += sizeOfLine) {
    context.beginPath();
    context.lineWidth = 2.5;
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }

  for (let y = 0; y <= width; y += sizeOfLine) {
    context.beginPath();
    context.lineWidth = 2.5;
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
}
// TODO

class Character {
  constructor(col, row, direction) {
    this.col = col;
    this.row = row;
    this.direction = direction;
  }
  moveDown() {
    return this.row++;
  }
  moveUp() {
    return this.row--;
  }
  moveRight() {
    return this.col++;
  }
  moveLeft() {
    return this.col--;
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}

const treasure = new Treasure(0, 0);

const player = new Character(0, 0);

player.moveDown();
player.moveDown();
player.moveRight();
player.moveRight();
player.moveRight();
console.log(player.col, player.row);

const drawTreasure = () => {
  const IMAGE_URL = 'starter-code/images/treasure.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
    const imageWidth = image.width / 5;
    const imageHeight = image.height / 5;
    context.drawImage(image, treasure.col * 50, treasure.row * 50, imageWidth, imageHeight);
  });
};

const drawPlayer = () => {
  const IMAGE_URL = 'starter-code/images/character-right.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
    const imageWidth = image.width;
    const imageHeight = image.height;
    context.drawImage(image, player.col * 50, player.row * 50, imageWidth, imageHeight);
  });
};

window.addEventListener('keydown', event => {
  event.preventDefault();

  switch (event.keyCode) {
    case 37:
      IMAGE_URL = 'starter-code/images/character-left.png';
      console.log('left');
      player.moveLeft();
      drawEverything();
      break;
    case 38:
      console.log('up');
      player.moveUp();
      drawEverything();
      break;
    case 39:
      console.log('right');
      player.moveRight();
      drawEverything();
      break;
    case 40:
      console.log('down');
      player.moveDown();
      drawEverything();
      break;
  }
});

function drawEverything() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawTreasure();
  drawGrid();
  drawPlayer();

  if (player.row === treasure.row && player.col === treasure.col) {
    treasure.setRandomPosition();
    drawTreasure();
  }
}
drawEverything();
