// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
let xvalue = 0;
let yvalue = 0;
// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      context.beginPath();
      context.rect(xvalue, yvalue, 50, 50);
      xvalue += 50;
      context.stroke();
    }
    xvalue = 0;
    yvalue += 50;
  }
}

function drawPlayer() {
  const characterImageSrc = '/lab-canvas-treasure-hunt/starter-code/images/character-down.png';
  const characterImage = new Image();
  characterImage.src = characterImageSrc;

  characterImage.addEventListener('load', () => {
    context.drawImage(characterImage, 0, 0);
  });
}

function drawTreasure() {
  const treasureImageSrc = '/lab-canvas-treasure-hunt/starter-code/images/treasure.png';
  const treasureImage = new Image();
  treasureImage.src = treasureImageSrc;

  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, 50, 50, 48, 48);
  });
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();

// iteration 2

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp(up) {
    return (this.row -= 1);
  }

  moveRight(right) {
    return (this.col += 1);
  }

  moveDown(down) {
    return (this.row += 1);
  }

  moveLeft(left) {
    return (this.col -= 1);
  }
}

const player = new Character(0, 0);
