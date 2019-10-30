const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const player = new Character(0, 0);
const newTreasure = new Treasure(0, 0);

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
  context.drawImage(image, player.col, player.row);
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
  context.drawImage(image, player.col, player.row, imageWidth * size, imageHeight * size);
  });
}
drawTreasure();



function drawEverything() {

}
drawEverything();

console.log(newTreasure.col, newTreasure.row);
newTreasure.setRandomPosition();
console.log(newTreasure.col, newTreasure.row);


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