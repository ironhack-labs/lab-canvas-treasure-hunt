// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  context.fillStyle = 'white';
  context.fillRect(0, 0, 500, 500);
  context.beginPath();
  context.strokeStyle = '#000000';
  context.moveTo(0, 0); // vertical lines start
  context.lineTo(0, 500);
  context.moveTo(50, 0);
  context.lineTo(50, 500);
  context.moveTo(100, 0);
  context.lineTo(100, 500);
  context.moveTo(150, 0);
  context.lineTo(150, 500);
  context.moveTo(200, 0);
  context.lineTo(200, 500);
  context.moveTo(250, 0);
  context.lineTo(250, 500);
  context.moveTo(300, 0);
  context.lineTo(300, 500);
  context.moveTo(350, 0);
  context.lineTo(350, 500);
  context.moveTo(400, 0);
  context.lineTo(400, 500);
  context.moveTo(450, 0);
  context.lineTo(450, 500);
  context.moveTo(500, 0);
  context.lineTo(500, 500); // vertical lines end
  context.moveTo(0, 0); // horizontal lines start
  context.lineTo(500, 0);
  context.moveTo(0, 50);
  context.lineTo(500, 50);
  context.moveTo(0, 100);
  context.lineTo(500, 100);
  context.moveTo(0, 150);
  context.lineTo(500, 150);
  context.moveTo(0, 200);
  context.lineTo(500, 200);
  context.moveTo(0, 250);
  context.lineTo(500, 250);
  context.moveTo(0, 300);
  context.lineTo(500, 300);
  context.moveTo(0, 350);
  context.lineTo(500, 350);
  context.moveTo(0, 400);
  context.lineTo(500, 400);
  context.moveTo(0, 450);
  context.lineTo(500, 450);
  context.moveTo(0, 500);
  context.lineTo(500, 500); // horizontal lines end
  context.stroke();
  context.closePath();
}

class Character {
  constructor(col, row) {
    this.col = col * 50;
    this.row = row * 50;
  }

  moveUp() {
    if (this.col > 0) {
      this.col -= 50;
    }
  }

  moveRight() {
    if (this.row < 450) {
      this.row += 50;
    }
  }

  moveDown() {
    if (this.col < 450) {
      this.col += 50;
    }
  }

  moveLeft() {
    if (this.row > 0) {
      this.row -= 50;
    }
  }
}

if (this.row > 0) {
  this.row -= 50;
}

class Treasure {
  constructor(col, row) {
    this.col = col * 50;
    this.row = row * 50;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 50;
    this.row = Math.floor(Math.random() * 10) * 50;
  }
}

function drawPlayer(player) {
  const characterImageUrl = './images/character-down.png';

  const characterImage = new Image();
  characterImage.src = characterImageUrl;

  characterImage.addEventListener('load', () => {
    context.drawImage(characterImage, player.row, player.col);
  });
}

function drawTreasure(treasure) {
  const treasureImageUrl = './images/treasure.png';

  const treasureImage = new Image();
  treasureImage.src = treasureImageUrl;

  treasure.setRandomPosition();
  console.log(treasure.row);
  console.log(treasure.col);

  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, treasure.row, treasure.col, 50, 50);
  });
}

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

const player = new Character(0, 0);
const treasure = new Treasure(0, 0);

function drawEverything() {
  drawGrid();
  drawPlayer(player);
  drawTreasure(treasure);
}

drawEverything();
