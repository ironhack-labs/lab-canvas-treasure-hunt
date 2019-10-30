const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const player = new Character(0, 0);
const treasure = new Treasure(0, 0);

player.setRandomPosition();
treasure.setRandomPosition();

// ITERATION 1

function drawGrid() {
  context.strokeStyle = 'black';
  context.lineWidth = 3;
  for (let i = 0; i <= height; i += 50) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(500, i);
    context.stroke();
    context.closePath();
  }
  for (let i = 0; i <= width; i += 50) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, 500);
    context.stroke();
    context.closePath();
  }
}
drawGrid();

// ITERATION 3

function drawPlayer () {
  const IMAGE_URL = 'starter-code/images/character-down.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
  context.drawImage(image, player.col*50, player.row*50);
  });
}
drawPlayer();

// ITERATION 4

function drawTreasure() {
  const IMAGE_URL = 'starter-code/images/treasure.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  const size = 0.2;
  context.drawImage(image, treasure.col*50, treasure.row*50, imageWidth * size, imageHeight * size);
  });
}
drawTreasure();

// ITERATION 5

window.addEventListener('keydown', (event) => {
  if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
    }
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
    };
    if (player.col === treasure.col && player.row === treasure.row) {
      treasure.setRandomPosition();;
    }
});

function drawEverything() {
  context.clearRect(0, 0, width, height);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

/* console.log(player.col, player.row);
player.moveDown(); 
player.moveDown(); 
player.moveRight();
console.log(player.col, player.row);
player.moveLeft();
console.log(player.col, player.row);
player.moveUp();
console.log(player.col, player.row);
drawPlayer(); */

/* console.log(treasure.col, treasure.row);
treasure.setRandomPosition();
console.log(treasure.col, treasure.row); */
