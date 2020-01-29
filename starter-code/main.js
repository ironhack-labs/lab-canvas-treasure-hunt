// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  context.strokeStyle = 'black';
  for (let i = 0; i < 10; i++) {
    context.strokeRect(i * 50, 0, 50, 500);
    context.strokeRect(0, i * 50, 500, 50);
  }
}

class Character {
  constructor(col, row) {
    this.col = 0;
    this.row = 0;
  }
  moveUp() {
    this.row--;
  }

  moveRight() {
    this.col++;
  }

  moveDown() {
    this.row++;
  }

  moveLeft() {
    this.col--;
  }
}

const player = new Character(0, 0);

const drawPlayer = () => {
  const IMAGE_URL = './images/character-down.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
    const imageWidth = image.width;
    const imageHeight = image.height;
    context.drawImage(image, player.col * 50, player.row * 50, imageWidth, imageHeight);
  });
};

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

const treasure = new Treasure(0, 0);
treasure.setRandomPosition();
console.log(treasure.col, treasure.row);

const drawTreasure = () => {
  const IMAGE_URL = './images/treasure.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
    const imageWidth = image.width / 5;
    const imageHeight = image.height / 5;
    context.drawImage(image, treasure.col * 50, treasure.row * 50, imageWidth, imageHeight);
  });
};

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

  // Check if the user is on the treasure
  if (player.row === treasure.row && player.col === treasure.col) {
    player.score++;
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
