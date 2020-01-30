// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const score = document.querySelector('h1 span');

// Iteration 1
function drawGrid() {
  for (let i = 0; i <= 10; i++) {
    context.beginPath();
    //context.strokeStyle('orange');
    context.moveTo(0 + 50 * i, 0);
    context.lineTo(50 * i, 500);
    context.moveTo(0, 0 + 50 * i);
    context.lineTo(500, 0 + 50 * i);
    context.stroke();
    context.closePath();
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

const treasureActive = new Treasure();

const drawTreasure = () => {
  if (typeof treasureActive.col !== 'number') {
    treasureActive.setRandomPosition();
  }
  const treasureImageSrc = './images/treasure.png';
  const treasureImage = new Image();
  treasureImage.src = treasureImageSrc;
  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, treasureActive.row, treasureActive.col, 45, 45);
  });
};

const drawCharater = players => {
  const characterImageSrc = characterImageDirection(players.direction); //'./images/character-down.png'
  const characterImage = new Image();
  characterImage.src = characterImageSrc;
  characterImage.addEventListener('load', () => {
    context.drawImage(characterImage, players.row, players.col);
  });
};

function drawEverything() {
  colide(players[0]);
  colide(players[1]);
  drawGrid();
  drawCharater(players[0]);
  drawCharater(players[1]);
  drawTreasure();
}
const colide = players => {
  if (players.row === treasureActive.row && players.col === treasureActive.col) {
    treasureActive.setRandomPosition();
    players.score += 1;
    score.innerText = players.score;
  }
  //console.log(player.row, player.col, treasureActive.row, treasureActive.col);
};

drawEverything();

//for player one
window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      player.moveLeft();
      player.direction = 'left';
      break;
    case 38:
      console.log('up');
      player.moveUp();
      player.direction = 'up';
      break;
    case 39:
      console.log('right');
      player.moveRight();
      player.direction = 'right';
      break;
    case 40:
      console.log('down');
      player.moveDown();
      player.direction = 'down';
      break;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawEverything();
});
//for player two
window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 65:
      console.log('left');
      player2.moveLeft();
      player2.direction = 'left';
      break;
    case 87:
      console.log('up');
      player2.moveUp();
      player2.direction = 'up';
      break;
    case 68:
      console.log('right');
      player2.moveRight();
      player2.direction = 'right';
      break;
    case 83:
      console.log('down');
      player2.moveDown();
      player2.direction = 'down';
      break;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawEverything();
});
