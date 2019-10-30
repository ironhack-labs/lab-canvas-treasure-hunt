// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
console.log('canvas')

// Iteration 1
function drawGrid() {
context.strokeStyle = 'black';
for (let i = 0; i < 10; i++) {
    context.strokeRect(i * 50, 0, 50, 500);
  }
  for (let i = 0; i < 10; i++) {
    context.strokeRect( 0, i*50, 500, 50);
  }
}

function drawEverything() {
  context.clearRect(0,0,500,500);
  drawGrid();
  drawPlayer(player);
  drawTreasure(treasure, player);
};

function drawPlayer(character){
  const IMAGE_URL = 'images/character-down.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  context.drawImage(image, character.col* 50, character.row*50, imageWidth, imageHeight )
})
};


function drawTreasure(treasure, character){
  if (character.col === treasure.col && character.row === treasure.row){
  treasure.setRandomPosition()
  const IMAGE_URL = 'images/treasure.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  size = 0.2
  context.drawImage(image, treasure.col* 50, treasure.row*50, imageWidth * size, imageHeight * size)
})} else {
  const IMAGE_URL = 'images/treasure.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  size = 0.2
  context.drawImage(image, treasure.col* 50, treasure.row*50, imageWidth * size, imageHeight * size)
})
}  
};

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
}
moveUp() {
  this.row -= 1
}

moveRight(){
  this.col += 1
}

moveDown(){
  this.row += 1

}

moveLeft(){
  this.col -= 1
}

}

class Treasure {
  constructor(){
    this.col = 0;
    this.row = 0;
}

setRandomPosition(){
  this.col = Math.floor(Math.random() * 10)
  this.row = Math.floor(Math.random() * 10)
}

}

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();
  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      drawEverything()
      break;
    case 38:
      player.moveUp();
      drawEverything()
      break;
    case 39:
      player.moveRight();
      drawEverything()
      break;
    case 40:
      player.moveDown();
      drawEverything()
      break;
  }
});

const player = new Character(0,0)
const treasure = new Treasure()
drawEverything();
