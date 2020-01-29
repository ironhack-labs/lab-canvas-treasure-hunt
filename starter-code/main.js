// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1

function drawGrid() {
  context.strokeRect(0, 0, 500, 500);

  for (let i = 0; i < 10; i++) {
    context.beginPath();
    context.moveTo(50 * i, 0);
    context.lineTo(50 * i, 500);
    context.closePath();
    context.stroke();
    context.lineWidth = 2;
  }
  for (let i = 0; i < 10; i++) {
    context.beginPath();
    context.moveTo(0, 50 * i);
    context.lineTo(500, 50 * i);
    context.closePath();
    context.stroke();
    context.lineWidth = 2;
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 1;
  }

  moveRight() {
    this.col += 1;
  }
  moveDown() {
    this.row += 1;
  }

  moveLeft() {
    this.col -= 1;
  }
};

const player = new Character(0, 0);

const playerImagePath = './images/character-down.png';
const playerImage = new Image();
playerImage.src = playerImagePath;

const playerDownImagePath = './images/character-down.png';
const playerDownImage = new Image();
playerDownImage.src = playerDownImagePath;

const playerUpImagePath = './images/character-up.png';
const playerUpImage = new Image();
playerUpImage.src = playerUpImagePath;

const playerLeftImagePath = './images/character-left.png';
const playerLeftImage = new Image();
playerLeftImage.src = playerLeftImagePath;

const playerRigthImagePath = './images/character-right.png';
const playerRightImage = new Image();
playerRightImage.src = playerRigthImagePath;

function drawPlayer() {
  //console.log('first console.log', player.col, player.row);
  // if (direction === 'up'){
  //   context.drawImage(playerUpImage, player.col * 50, player.row * 50, 50, 50);
  // } else if (direction === 'down'){
  //     context.drawImage(playerDownImage, player.col * 50, player.row * 50, 50, 50);
  // } else if (direction === 'left'){
  //     context.drawImage(playerLeftImage, player.col * 50, player.row * 50, 50, 50);
  //   } else if (direction === 'left'){
  //     context.drawImage(playerLeftImage, player.col * 50, player.row * 50, 50, 50);
  //   }

  context.drawImage(playerImage, player.col * 50, player.row * 50, 50, 50);
  playerImage.addEventListener('load', () => {
    //console.log(player.col, player.row);
    context.drawImage(playerImage, player.col * 50, player.row * 50, 50, 50);
  });
}

const treasureImagePath = './images/treasure.png';

const treasureImage = new Image();
treasureImage.src = treasureImagePath;

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * 9 + 1);
    this.col = Math.floor(Math.random() * 9 + 1);
    // let randomRowPosition = randomNumberRow *= 50;
    // return randomRowPosition;
  }

  // setRandomColPosition() {
    // let randomColPosition = randomNumberCol *= 50;
    // return randomColPosition;
  // }
}

const treasure = new Treasure();


function drawTreasure() {
  context.drawImage(treasureImage, treasure.col * 50, treasure.row * 50, 50, 50);
  treasureImage.addEventListener('load', () => {
    treasure.setRandomPosition();
    context.drawImage(treasureImage, treasure.col * 50, treasure.row * 50, 50, 50);
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
      console.log('left');
      if (treasure.col === player.col && treasure.row === player.row) {
        treasure.setRandomPosition();
        break;
      } else {
        player.moveLeft();
        drawEverything();
      }
      break;
    case 38:
      console.log('up');
      if (treasure.col === player.col && treasure.row === player.row) {
        treasure.setRandomPosition();
        break;
      } else {
        player.moveUp();
        drawEverything();
      }
      break;
    case 39:
      console.log('right');
      if (treasure.col === player.col && treasure.row === player.row) {
        treasure.setRandomPosition();
        break;
      } else {
        player.moveRight();
        drawEverything();
      }
      break;
    case 40:
      console.log('down');
      if (treasure.col === player.col && treasure.row === player.row) {
        treasure.setRandomPosition();
        break;
      } else {
        player.moveDown();
        drawEverything();
      }
      break;
  }
});

drawEverything();
