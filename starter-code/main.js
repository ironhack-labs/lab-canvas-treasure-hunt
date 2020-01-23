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
  context.clearRect(0,0,600,600);
  drawGrid();
  drawPlayer(player);
  drawTreasure(treasure, player);
  drawScore(score)
};

function drawPlayer(character){
  let IMAGE_URL ;
  if(character.direction === "d"){
     IMAGE_URL = 'images/character-down.png';
  } else if(character.direction === "u"){
     IMAGE_URL = 'images/character-up.png';
  } else if(character.direction === "l"){
     IMAGE_URL = 'images/character-left.png';
  }else {
    IMAGE_URL = 'images/character-right.png';
  }
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
  score +=1 ;
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

function drawScore(score){
  context.font = '20px monospace';
  context.fillStyle = 'black';
  
  context.fillText(`Score: ${score}`, 0, 530);
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.direction = "d"
}
moveUp() {
  if(this.row >= 1){
    this.row -= 1
  } 
  this.direction = "u"
}

moveRight(){
  if(this.col <= 8){
    this.col += 1
  }
  this.direction = "r"
}

moveDown(){
  if(this.row <= 8){
    this.row += 1
  }
  this.direction = "d"
}

moveLeft(){
  if(this.col >= 1){
    this.col -= 1
  }
  this.direction = "l"
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
let score = -1
drawEverything();
