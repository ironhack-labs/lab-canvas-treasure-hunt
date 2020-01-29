// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  for (let i = 0; i <= 10; i++) {
    context.beginPath();
    context.moveTo(0 + 50 * i, 0);
    context.lineTo(50 * i, 500);
    context.moveTo(0, 0 + 50 * i);
    context.lineTo(500, 0 + 50 * i);
    context.stroke();
    context.closePath();
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.col -= 50;
  }
  moveRight() {
    this.row += 50;
  }
  moveDown() {
    this.col += 50;
  }
  moveLeft() {
    this.row -= 50;
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    this.col = 50 * Math.floor(Math.random() * 10);
    this.row = 50 * Math.floor(Math.random() * 10);
  }
}
//clear this only for test
const player = new Character(0, 0); // (0,0) = Initial position

console.log(player.col, player.row); // => 1,2
//delete above till const player
const treasureActive = new Treasure();

const drawTreasure = () => {
  if (typeof treasureActive.col !== 'number') {
    treasureActive.setRandomPosition();
  }
  const treasureImageSrc = './images/treasure.png';
  const treasureImage = new Image();
  treasureImage.src = treasureImageSrc;
  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, treasureActive.col, treasureActive.row, 45, 45);
  });
};

const drawCharater = () => {
  const characterImageSrc = './images/character-down.png';
  const characterImage = new Image();
  characterImage.src = characterImageSrc;
  characterImage.addEventListener('load', () => {
    context.drawImage(characterImage, player.row, player.col);
  });
};

function drawEverything() {
  drawGrid();
  drawCharater();
  drawTreasure();
}

drawEverything();

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      player.moveLeft();
      break;
    case 38:
      console.log('up');
      player.moveUp();
      break;
    case 39:
      console.log('right');
      player.moveRight();
      break;
    case 40:
      console.log('down');
      player.moveDown();
      break;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawEverything();
});
