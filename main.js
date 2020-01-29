const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  context.strokeStyle = 'Black';
  for (let i = 0; i < 500; i++) {
    context.beginPath();
    context.moveTo(i * 50, 0);
    context.lineTo(i * 50, 500);
    context.stroke();
  }

  for (let k = 0; k < 500; k++) {
    context.beginPath();
    context.moveTo(0, k * 50);
    context.lineTo(500, k * 50);
    context.stroke();
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    return (this.row -= 1);
  }
  moveRight() {
    return (this.col += 1);
  }
  moveDown() {
    return (this.row += 1);
  }
  moveLeft() {
    return (this.col -= 1);
  }
}

const player = new Character(5, 5); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
player.moveRight();
player.moveDown();
player.moveRight();
player.moveDown();
~console.log(player.col, player.row); // => 1,2

const drawPlayer = () => {
  const IMAGE_URL = 'starter-code/images/character-down.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
    const imageWidth = image.width;
    const imageHeight = image.height;
    context.drawImage(image, player.col * 50, player.row * 50, imageWidth, imageHeight);
  });
};

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

const drawTreasure = () => {
  const IMAGE_URL = './starter-code/images/treasure.png';
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
      drawEverything();
      console.log('left');
      break;
    case 38:
      player.moveUp();
      drawEverything();
      console.log('up');
      break;
    case 39:
      player.moveRight();
      drawEverything();
      console.log('right');
      break;
    case 40:
      player.moveDown();
      drawEverything();
      console.log('down');
      break;
  }
});

function drawEverything() {
  context.clearRect(0, 0, 500, 500);
  drawGrid();
  drawPlayer();
  drawTreasure();

  if (player.row === treasure.row && player.col === treasure.col) {
    treasure.setRandomPosition();
    drawTreasure();
  }
}

drawEverything();
