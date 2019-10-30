// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const $score = document.querySelector('span');
const $egg = document.querySelector('h1');

const imagePlayer = new Image();
imagePlayer.src = 'images/character-down.png';

const imagePlayerUp = new Image();
imagePlayerUp.src = 'images/character-up.png';

const imagePlayerLeft = new Image();
imagePlayerLeft.src = 'images/character-left.png';

const imagePlayerRight = new Image();
imagePlayerRight.src = 'images/character-right.png';

const imageTreasure = new Image();
imageTreasure.src = 'images/treasure.png';

function drawPlayer(col, row) {
  if (player.direction === 'down') {
    context.drawImage(imagePlayer, col * 50 + 2, row * 50 + 2, 44, 44);
  } else if (player.direction === 'up') {
    context.drawImage(imagePlayerUp, col * 50 + 2, row * 50 + 2, 44, 44);
  } else if (player.direction === 'left') {
    context.drawImage(imagePlayerLeft, col * 50 + 2, row * 50 + 2, 44, 44);
  } else {
    context.drawImage(imagePlayerRight, col * 50 + 2, row * 50 + 2, 44, 44);
  }
}

function drawTreasure(col, row) {
  context.drawImage(imageTreasure, col * 50 + 2, row * 50 + 2, 44, 44);
}

function randomPos() {
  return Math.floor(Math.random() * 9);
}

let player = new Character(randomPos(), randomPos());
let tres = new Treasure(randomPos(), randomPos());

function drawEverything() {
  drawGrid();
  window.addEventListener('load', () => {
    drawPlayer(player.col, player.row, player.direction);
    console.log('hey');
  });
  window.addEventListener('load', () => {
    drawTreasure(tres.trCol, tres.trRow);
  });
}

function drawEverythingAgain() {
  drawGrid();

  drawPlayer(player.col, player.row, player.direction);

  drawTreasure(tres.trCol, tres.trRow);
}

drawEverything();

let score = 0;
// make it move

function updateThings() {
  if (player.col === tres.trCol && player.row === tres.trRow) {
    tres.trCol = randomPos();
    tres.trRow = randomPos();
    score++;
    $score.innerText = score;
    if (score > 1000) {
      newE();
    }
  }

  drawEverythingAgain();
}

window.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
      player.moveLeft();
      updateThings();
      break;
    case 38:
      context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
      player.moveUp();
      updateThings();
      break;
    case 39:
      context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
      player.moveRight();
      updateThings();
      break;
    case 40:
      context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
      player.moveDown();
      updateThings();
      break;
    case 67:
      score = score * 2;
      $score.innerText = score;
      break;
  }
});

// const canvas = document.querySelector('canvas');
// const context = canvas.getContext('2d');
// const width = canvas.width;
// const height = canvas.height;
// const $score = document.querySelector('span');

// const imagePlayer = new Image();
// imagePlayer.src = 'images/character-down.png';

// const imagePlayerUp = new Image();
// imagePlayerUp.src = 'images/character-up.png';

// const imagePlayerLeft = new Image();
// imagePlayerLeft.src = 'images/character-left';

// const imageTreasure = new Image();
// imageTreasure.src = 'images/treasure.png';

// // Iteration 1
// function drawGrid() {
//   for (i = 0; i <= 500; i += 50) {
//     context.lineWidth = 2;
//     context.strokeStyle = 'black';
//     context.beginPath();
//     context.moveTo(0, i);
//     context.lineTo(500, i);
//     context.stroke();
//     context.closePath();
//   }

//   for (i = 0; i <= 500; i += 50) {
//     context.lineWidth = 2;
//     context.strokeStyle = 'black';
//     context.beginPath();
//     context.moveTo(i, 0);
//     context.lineTo(i, 500);
//     context.stroke();
//     context.closePath();
//   }
// }

// // player class

// class Character {
//   constructor(col, row) {
//     this.col = col;
//     this.row = row;
//   }

//   moveUp() {
//     if (this.row !== 0) {
//       this.row -= 1;
//     } else {
//       this.row = this.row;
//     }
//   }

//   moveRight() {
//     if (this.col !== 9) {
//       this.col += 1;
//     } else {
//       this.col = this.col;
//     }
//   }

//   moveDown() {
//     if (this.row !== 9) {
//       this.row += 1;
//     } else {
//       this.row = this.row;
//     }
//   }

function newE() {
  $egg.innerHTML =
    'and they found that the true treasure was the blood of the enemies they killed along the way';
}

//   moveLeft() {
//     if (this.col !== 0) {
//       this.col -= 1;
//     } else {
//       this.col = this.col;
//     }
//   }
// }

// class Treasure {
//   constructor(col, row) {
//     this.trCol = col;
//     this.trRow = row;
//   }

//   setRandomPosition() {
//     this.col = Math.floor(Math.random() * 9);
//     this.row = Math.floor(Math.random() * 9);
//   }
// }

// function drawPlayer(col, row) {
//   context.drawImage(imagePlayer, col * 50 + 2, row * 50 + 2, 44, 44);
// }

// function drawTreasure(col, row) {
//   context.drawImage(imageTreasure, col * 50 + 2, row * 50 + 2, 44, 44);
// }
// // function drawPlayer(player.col, player.row) {
// // context.drawImage(image, player.col * 50 + 2 , player.row * 50 + 2, 44, 44)
// // }

// function randomPos() {
//   return Math.floor(Math.random() * 9);
// }

// let player = new Character(randomPos(), randomPos());
// let tres = new Treasure(randomPos(), randomPos());

// function drawEverything() {
//   drawGrid();
//   window.addEventListener('load', () => {
//     drawPlayer(player.col, player.row);
//     console.log('hey');
//   });
//   window.addEventListener('load', () => {
//     drawTreasure(tres.trCol, tres.trRow);
//   });
// }

// function drawEverythingAgain() {
//   drawGrid();

//   drawPlayer(player.col, player.row);

//   drawTreasure(tres.trCol, tres.trRow);
// }

// drawEverything();

// let score = 0;
// // make it move

// function updateThings() {
//   if (player.col === tres.trCol && player.row === tres.trRow) {
//     tres.trCol = randomPos();
//     tres.trRow = randomPos();
//     score++;
//     $score.innerText = score;
//   }
//   drawEverythingAgain();
// }

// window.addEventListener('keydown', event => {
//   switch (event.keyCode) {
//     case 37:
//       context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
//       player.moveLeft();
//       updateThings();
// //       break;
//     case 38:
//       context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
//       player.moveUp();
//       updateThings();
// //       break;
//     case 39:
//       context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
//       player.moveRight();
//       updateThings();
// //       break;
//     case 40:
//       context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
//       player.moveDown();
//       updateThings();
// //       break;
//     case 18:
//       score += 100;
//       $score.innerText = score;
//       break;
//   }
// });
