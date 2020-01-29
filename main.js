// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  context.lineWidth = 3;
  for (let x = 0; x <= 500; x += 500 / 10) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, 500);
    context.stroke();
  }
  for (let y = 0; y <= 500; y += 500 / 10) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(500, y);
    context.stroke();
  }
}

//Iteration 2

class Character {
  constructor(col, row) {
    this.row = row;
    this.col = col;
    this.direction = 'down';
    this.score = 0;
  }
  moveUp() {
    if (this.row >= 1) {
      this.row--;
      this.direction = 'up';
    }
  }
  moveRight() {
    if (this.col < 9) {
      this.col++;
      this.direction = 'right';
    }
  }
  moveDown() {
    if (this.row < 9) {
      this.row++;
      this.direction = 'down';
    }
  }
  moveLeft() {
    if (this.col >= 1) {
      this.col--;
      this.direction = 'left';
    }
  }
}

const player = new Character(0, 0);

//Iteration 3
function drawPlayer() {
  let char_Image = '';

  if (player.direction === 'down') {
    char_Image = '/starter-code/images/character-down.png';
  } else if (player.direction === 'right') {
    char_Image = '/starter-code/images/character-right.png';
  } else if (player.direction === 'up') {
    char_Image = '/starter-code/images/character-up.png';
  } else if (player.direction === 'left') {
    char_Image = '/starter-code/images/character-left.png';
  }
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
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }
}

const treasure = new Treasure();
treasure.setRandomPosition();

function drawTreasure(col, row) {
  console.log(player.col, player.row, treasure.col, treasure.col);
  if (player.row === treasure.row && player.col === treasure.col) {
    treasure.setRandomPosition();
    player.score++;
    console.log('score', player.score);
  }
  const trea_Image = 'starter-code/images/treasure.png';
  const treas_image = new Image();
  treas_image.src = trea_Image;
  treas_image.addEventListener('load', () => {
    context.drawImage(treas_image, treasure.col * 50, treasure.row * 50, 48, 48);
  });
}

function drawEverything() {
  context.clearRect(0, 0, width, height);
  drawGrid();
  drawPlayer();
  drawTreasure();
  drawScores();
}

drawEverything();
//Iteration 5

window.addEventListener('keydown', event => {
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      drawEverything();
      console.log(player.col);
      break;
    case 38:
      player.moveUp();
      drawEverything();
      break;
    case 39:
      player.moveRight();
      drawEverything();
      console.log(player.col);
      break;
    case 40:
      player.moveDown();
      drawEverything();
      break;
  }
});

//Iteration 6
function drawScores() {
  context.font = '20px monospace';
  context.fillStyle = 'black';

  context.fillText('Score' + player.score, 0, 530);
}
