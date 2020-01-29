// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let $score = document.querySelector('h1 span');
let currentScore = $score.innertext;

class Character {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    this.col -= 1;
  }

  moveRight() {
    this.row += 1;
  }
  moveDown() {
    this.col += 1;
  }
  moveLeft() {
    this.row -= 1;
  }
}

class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}

// Iteration 1
function drawGrid() {
  for (let i = 0; i <= 10; i++) {
    context.fillStyle = 'black';
    context.strokeRect(50 * i, 0, 1, height);
    context.strokeRect(0, 50 * i, width, 1);
  }
}
function drawPlayer() {
  const imageUrl = './images/character-down.png';
  const image = new Image();
  image.src = imageUrl;
  image.addEventListener('load', () => {
    context.drawImage(image, player.row * 50, player.col * 50, 50, 50);
  });
}

function drawTreasure() {
  const imageUrl = './images/treasure.png';
  const image = new Image();
  image.src = imageUrl;

  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
    context.drawImage(image, treasure.row * 50, treasure.col * 50, 50, 50);
    parseInt($score.innertext) = currentScore + 1;
  } else {
    image.addEventListener('load', () => {
      context.drawImage(image, treasure.row * 50, treasure.col * 50, 50, 50);
    });
  }
}
const player = new Character(0, 0); // (0,0) = Initial position
const treasure = new Treasure(5, 5);

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
  context.clearRect(0, 0, width, height);
  drawGrid();
  drawPlayer();
  drawTreasure();
}
drawEverything();
