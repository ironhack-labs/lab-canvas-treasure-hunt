// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
// Iteration 1

// CLASSES
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp(up) {
    this.row -= 50;
  }

  moveRight(right) {
    this.col += 50;
  }

  moveDown(down) {
    this.row += 50;
  }

  moveLeft(left) {
    this.col -= 50;
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {}
}

const player = new Character(0, 0);

function drawGrid() {
  let xvalue = 0;
  let yvalue = 0;
  // TODO: write the code of the function
  context.strokeStyle = 'black';
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
    context.drawImage(characterImage, player.col, player.row);
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
  context.clearRect(0, 0, 500, 500);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

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
});

drawEverything();
