const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const scoreSpan = document.querySelector('h1 span');
let currentScore = 0;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  // outer rectangle
  context.beginPath();
  context.rect(0, 0, 500, 500);
  context.stroke();
  context.closePath();

  //lines

  for (let i = 50; i < 500; i += 50) {
    context.beginPath();
    context.lineTo(500, i);
    context.lineTo(0, i);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineTo(i, 500);
    context.lineTo(i, 0);
    context.stroke();
    context.closePath();
  }
}

class Character {
  constructor(col, row, direction) {
    this.col = col;
    this.row = row;
    this.direction = direction;
  }

  moveUp() {
    if (this.row !== 0) {
      this.row -= 50;
      this.direction = 'N';
    }
  }

  moveDown() {
    if (this.row !== 450) {
      this.row += 50;
      this.direction = 'S';
    }
  }

  moveRight() {
    if (this.col !== 450) {
      this.col += 50;
      this.direction = 'E';
    }
  }

  moveLeft() {
    if (this.col !== 0) {
      this.col -= 50;
      this.direction = 'W';
    }
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * Math.floor(10)) * 50;
    this.row = Math.floor(Math.random() * Math.floor(10)) * 50;
    console.log(this.col, this.row);
  }
}

const player = new Character(0, 0, 'S');
const player2 = new Character(450, 450, 'N');
const treasure = new Treasure(0, 0);
treasure.setRandomPosition();

function drawPlayer(player) {
  let playerImageUrl;
  switch (player.direction) {
    case 'N':
      playerImageUrl = 'images/character-up.png';
      break;
    case 'S':
      playerImageUrl = 'images/character-down.png';
      break;
    case 'W':
      playerImageUrl = 'images/character-left.png';
      break;
    case 'E':
      playerImageUrl = 'images/character-right.png';
      break;
  }
  let playerImage = new Image();
  playerImage.src = playerImageUrl;

  playerImage.addEventListener('load', () => {
    context.drawImage(playerImage, player.col, player.row);
  });
}

function drawTreasure(treasure) {
  let treasureImageUrl = 'images/treasure.png';
  let treasureImage = new Image();
  treasureImage.src = treasureImageUrl;

  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, treasure.col, treasure.row, 50, 50);
  });
}

function drawScores() {
  scoreSpan.innerHTML = Number(currentScore);
}

function drawEverything() {
  drawGrid();
  drawPlayer(player);
  drawPlayer(player2);
  drawTreasure(treasure);
}

drawEverything();

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();
  context.clearRect(0, 0, 500, 500);

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 38:
      player.moveUp();
      break;
    case 39:
      player.moveRight();
      break;
    case 40:
      player.moveDown();
      break;
    case 65:
      player2.moveLeft();
      break;
    case 87:
      player2.moveUp();
      break;
    case 68:
      player2.moveRight();
      break;
    case 83:
      player2.moveDown();
      break;
  }
  drawEverything();
  if (
    (player.col === treasure.col && player.row === treasure.row) ||
    (player2.col === treasure.col && player2.row === treasure.row)
  ) {
    currentScore += 1;
    context.clearRect(0, 0, 500, 500);
    treasure.setRandomPosition();
    drawEverything();
    drawScores();
  }
});
