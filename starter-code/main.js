const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

//Grid

function drawGrid() {
  //borders
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, 500);
  context.lineTo(500, 500);
  context.lineTo(500, 0);
  context.lineTo(0, 0);
  context.stroke();

  //columns
  const column = width / 10;
  for (i = 1; i < 10; i++) {
    context.moveTo(column * i, 0);
    context.lineTo(column * i, height);
    context.stroke();
  }
  //rows
  const row = height / 10;
  for (i = 1; i < 10; i++) {
    context.moveTo(0, row * i);
    context.lineTo(width, row * i);
    context.stroke();
  }
  context.closePath();
}

//Iteration2
class Character {
  constructor() {
    //below, 2 properties
    this.column = 0;
    this.row = 0;
  }
  //below, 4 methods
  moveUp() {
    if (this.row !== 0) {
      this.row = this.row - width / 10;
    }
  }

  moveRight() {
    if (this.column < (height / 10) * 9) {
      this.column = this.column + height / 10;
    }
  }

  moveLeft() {
    if (this.column !== 0) {
      this.column = this.column - width / 10;
    }
  }

  moveDown() {
    if (this.row < (width / 10) * 9) {
      this.row = this.row + width / 10;
    }
  }
}
//Iteration 3
function drawPlayer(column, row) {
  context.drawImage(playerImage, column, row);
}
//Iteration 4
class Treasure {
  constructor() {
    this.row = 0;
    this.column = 0;
  }
  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10) * (width / 10);
    this.column = Math.floor(Math.random() * 10) * (height / 10);
  }
}

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      break;
    case 38:
      console.log('up');
      break;
    case 39:
      console.log('right');
      break;
    case 40:
      console.log('down');
      break;
  }
};

const player = new Character(0, 0);
let treasure = new Treasure();

//learn how to inspect in chrome
//again I had problems to link the images
const playerImage = new Image();
playerImage.src = './images/character-down.png';

const treasureImage = new Image();
treasureImage.src = './images/treasure.png';

function drawTreasure(column, row) {
  const treasureImageHeight = treasureImage.height;
  const treasureImageWidth = treasureImage.width;
  const smallerBy = 0.2;
  context.drawImage(
    treasureImage,
    column,
    row,
    treasureImageWidth * smallerBy,
    treasureImageHeight * smallerBy
  );
}

function drawEverything() {
  drawGrid();
  drawPlayer(player.column, player.row);
  drawTreasure(treasure.column, treasure.row);
}

playerImage.addEventListener('load', () => {
  treasureImage.addEventListener('load', () => {
    treasure.setRandomPosition();
    drawEverything();
  });
});
