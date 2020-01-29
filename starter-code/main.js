const canvas = document.querySelector('canvas');
const $scoreNode = document.getElementById('score');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const strokeStyle = 'black';
const lineWidth = 3;

// Iteration 1
function drawGrid() {
  for (let i = 0; i <= 10; i++) {
    context.beginPath();
    context.moveTo(50 * i, 0);
    context.lineTo(50 * i, 500);
    context.closePath();
    context.stroke();
  }
  for (let i = 0; i <= 10; i++) {
    context.beginPath();
    context.moveTo(0, 50 * i);
    context.lineTo(500, 50 * i);
    context.closePath();
    context.stroke();
  }
}

//ex3

function drawPlayer(player) {
  let imagePlayer = '';
  switch (player.direction) {
    case 'S':
      imagePlayer = './images/character-down.png';
      break;
    case 'N':
      imagePlayer = './images/character-up.png';
      break;
    case 'E':
      imagePlayer = './images/character-right.png';
      break;
    case 'W':
      imagePlayer = './images/character-left.png';
      break;
  }
  const image = new Image();
  image.src = imagePlayer;

  image.addEventListener('load', () => {
    context.drawImage(image, player.col * 50, player.row * 50, 50, 50);
  });
}

//ex4

function drawTreasure() {
  const imageTreasure = './images/treasure.png';
  const image = new Image();
  image.src = imageTreasure;

  if (player.row === treasure.row && player.col === treasure.col) {
    treasure.setRandomPosition();
    console.log('you are RICH!');
    player.incScore();
    $scoreNode.innerHTML = '';
    $scoreNode.innerHTML = 'Score : ' + player.score;
  }

  image.addEventListener('load', () => {
    context.drawImage(image, treasure.col * 50, treasure.row * 50, 50, 50);
  });
}

function drawEverything(player) {
  drawGrid();
  drawPlayer(player);
  drawTreasure();
}
const player = new Character(5, 5); // defini a posiç\ao inicial do player

const treasure = new Treasure(0, 0);

drawEverything(player, treasure);

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      // console.log('left');
      player.moveLeft();
      console.log(player);
      console.log(treasure);
      break;
    case 38:
      // console.log('up');
      player.moveUp();
      console.log(player);
      console.log(treasure);
      break;
    case 39:
      // console.log('right');
      player.moveRight();
      console.log(player);
      console.log(treasure);
      break;
    case 40:
      // console.log('down');
      player.moveDown();
      console.log(player);
      console.log(treasure);
      break;
  }

  context.clearRect(0, 0, 500, 500);
  drawEverything(player, treasure);
});
