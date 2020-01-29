// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

console.log('width', width);
console.log('height', height);

console.dir(document.querySelector('canvas'));
// Iteration 1

function drawGrid() {
  context.beginPath();
  for (let i = 0; i <= width; i += 50) {
    context.moveTo(i, 0);
    context.lineTo(i, height);
    context.moveTo(0, i);
    context.lineTo(width, i);
    context.stroke();
  }
  context.closePath();
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.position = 'right';
  }
  moveRight() {
    this.col += 1;
    this.position = 'right';
  }
  moveUp() {
    this.row -= 1;
    this.position = 'up';
  }
  moveDown() {
    this.row += 1;
    this.position = 'down';
  }
  moveLeft() {
    this.col -= 1;
    this.position = 'left';
  }
}

function drawPlayer() {
  const charImgR = './images/character-right.png';
  const imageR = new Image();
  imageR.src = charImgR;
  const charImgU = './images/character-up.png';
  const imageU = new Image();
  imageU.src = charImgU;
  const charImgL = './images/character-left.png';
  const imageL = new Image();
  imageL.src = charImgL;
  const charImgD = './images/character-down.png';
  const imageD = new Image();
  imageD.src = charImgD;
  if (player.position === 'right') {
    imageR.addEventListener('load', () => {
      context.drawImage(imageR, player.col * 50, player.row * 50, 50, 50);
    });
  } else if (player.position === 'up') {
    imageU.addEventListener('load', () => {
      context.drawImage(imageU, player.col * 50, player.row * 50, 50, 50);
    });
  } else if (player.position === 'down') {
    imageD.addEventListener('load', () => {
      context.drawImage(imageD, player.col * 50, player.row * 50, 50, 50);
    });
  } else {
    imageL.addEventListener('load', () => {
      context.drawImage(imageL, player.col * 50, player.row * 50, 50, 50);
    });
  }
}

function drawPlayer2() {
  const charImgR = './images/aline-right.png';
  const imageR = new Image();
  imageR.src = charImgR;
  const charImgU = './images/aline-up.png';
  const imageU = new Image();
  imageU.src = charImgU;
  const charImgL = './images/aline-left.png';
  const imageL = new Image();
  imageL.src = charImgL;
  const charImgD = './images/aline-down.png';
  const imageD = new Image();
  imageD.src = charImgD;
  if (aline.position === 'right') {
    imageR.addEventListener('load', () => {
      context.drawImage(imageR, aline.col * 50, aline.row * 50, 50, 50);
    });
  } else if (aline.position === 'up') {
    imageU.addEventListener('load', () => {
      context.drawImage(imageU, aline.col * 50, aline.row * 50, 50, 50);
    });
  } else if (aline.position === 'down') {
    imageD.addEventListener('load', () => {
      context.drawImage(imageD, aline.col * 50, aline.row * 50, 50, 50);
    });
  } else {
    imageL.addEventListener('load', () => {
      context.drawImage(imageL, aline.col * 50, aline.row * 50, 50, 50);
    });
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    // for (let i = 0; i < this.length; i++) {
    //   var currentNum = width / 50;
    //   let temporaryValue;
    //   let randomNum;
    //   while (0 !== currentNum) {
    //     randomNum = Math.floor(Math.random() * currentNum);
    //     currentNum -= 1;
    //     temporaryValue = currentNum;
    //     currentNum = randomNum;
    //     randomNum = temporaryValue;
    //     this[i] = randomNum;
    //     console.log(this[i]);
    //   }
    // }
    this.col = Math.floor((Math.random() * width) / 50);
    this.row = Math.floor((Math.random() * width) / 50);
    drawEverything();
  }
}

function drawTreasure() {
  const tresImg = './images/pizza.png';
  const image = new Image();
  image.src = tresImg;
  image.addEventListener('load', () => {
    context.drawImage(image, treasure.col * 50, treasure.row * 50, 40, 40);
  });
}

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
    case 65:
      aline.moveLeft();
      drawEverything();
      break;
    case 87:
      aline.moveUp();
      drawEverything();
      break;
    case 68:
      aline.moveRight();
      drawEverything();
      break;
    case 83:
      aline.moveDown();
      drawEverything();
      break;
  }
});

function drawEverything() {
  let scoreAline = document.querySelector('.aline');
  let scoreViking = document.querySelector('.viking');
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawPlayer();
  drawPlayer2();
  drawTreasure();
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
    scoreViking.innerText = Number(scoreViking.innerText) + 1;
  } else if (aline.col === treasure.col && aline.row === treasure.row) {
    treasure.setRandomPosition();
    scoreAline.innerText = Number(scoreAline.innerText) + 1;
  }
}

const player = new Character(7, 0);
const aline = new Character(3, 0);

const treasure = new Treasure(9, 0);
drawEverything();
