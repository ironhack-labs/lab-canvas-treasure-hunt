//main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1

function drawGrid() {
  context.lineWidth = 3;
  for (let column = 0; column < 500; column++) {
    context.strokeStyle = 'darkgreen';
    context.beginPath();
    context.moveTo(column * 50, 0);
    context.lineTo(column * 50, 500);
    context.stroke();
  }

  for (let row = 0; row < 500; row++) {
    context.strokeStyle = 'darkgreen';
    context.beginPath();
    context.moveTo(0, row * 50);
    context.lineTo(500, row * 50);
    context.stroke();
  }
}

drawGrid();

// MAKE A FOR LOOP
//iteration two

class Character {
  constructor(col, row) {
    this.column = col;
    this.row = row;
  }
  moveUp() {
    return (this.row -= 1);
  }
  moveDown() {
    return (this.row += 1);
  }
  moveRight() {
    return (this.column += 1);
  }
  moveLeft() {
    return (this.column -= 1);
  }
}

const player = new Character(0, 0); // (0,0) = Initial position

player.moveDown(); // Increase the value of player.row by 1
player.moveDown(); // Increase the value of player.row by 1
player.moveRight(); // Increase the value of player.column by 1
player.moveRight(); // Increase the value of player.column by 1
player.moveDown(); // Increase the value of player.row by 1
player.moveLeft(); // Decrease the value of player.column by 1
player.moveDown(); // Increase the value of player.row by 1
//console.log(player.column, player.row); // => 1,2

//iteration three
const drawPlayer = () => {
  const playerImage = new Image();
  playerImage.src = './images/character-down.png';
  const playerWidth = playerImage.width;
  const playerHeight = playerImage.height;
  playerImage.addEventListener('load', event => {
    context.drawImage(playerImage, player.column * 50, player.row * 50, playerWidth, playerHeight);
  });
};
drawPlayer();

// Iteration 4
class Treasure {
  constructor() {
    this.column = 0;
    this.row = 0;
  }
  setRandomPosition() {
    this.column = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}
const treasure = new Treasure(0, 0);

const drawTreasure = () => {
  const treasureImage = new Image();
  treasureImage.src = './images/treasure.png';
  treasureImage.addEventListener('load', () => {
    const imageWidth = treasureImage.width / 5;
    const imageHeight = treasureImage.height / 5;
    context.drawImage(
      treasureImage,
      treasure.column * 50,
      treasure.row * 50,
      imageWidth,
      imageHeight
    );
  });
};
//Iteration five
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
  context.clearRect(0, 0, 500, 500);
  drawGrid();
  drawPlayer();
  drawTreasure();

  if (player.row === treasure.row && player.column === treasure.column) {
    treasure.setRandomPosition();
    drawTreasure();
  }
}

drawEverything();
