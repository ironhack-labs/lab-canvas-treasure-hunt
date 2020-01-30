// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Class Character
class Character {
  constructor (col,row) {
    this.col = col,
    this.row = row
    }
      
      moveUp(){
        if (this.row > 0) {
        this.row--
      }
    }
      moveDown(){
        if (this.row < 9) {
        this.row++
      }
    }
      moveLeft(){
        if (this.col > 0){
        this.col--
      }
    }
      moveRight(){
        if (this.col < 9){
        this.col++  
     }
    }
   }


const player = new Character(0, 0); // (0,0) = Initial position

//Class Treasure

class Treasure {
  constructor(col,row){
    this.col = col,
    this.row = row
  }
  
  setRandomPosition(){
    this.col = (Math.floor(Math.random()*10));
    this.row = (Math.floor(Math.random()*10))
  }

}

const treasure = new Treasure (0,0);

// Iteration 1
function drawGrid() {
  
for (var x = 0; x <= 500; x += 50) {
  context.moveTo(x, 0);
  context.lineTo(x, 500);
}

for (var y = 0; y <= 500; y += 50) {
  context.moveTo(0, y);
  context.lineTo(500, y);
}

context.strokeStyle = "";
context.stroke();  
}



function drawPlayer() {

const characterImageUrl = './starter-code/images/character-down.png';
const characterImage = new Image();
characterImage.src = characterImageUrl;

characterImage.addEventListener('load', () => {
  context.drawImage(characterImage, player.col * 50, player.row * 50, 50, 50)});
}


function drawTreasure() {
  
  const treasureImageUrl = './starter-code/images/treasure.png';
  const treasureImage = new Image();
  treasureImage.src = treasureImageUrl;
  
    if ((player.col === treasure.col) && (player.row === treasure.row)) {
      treasure.setRandomPosition()
      treasureImage.addEventListener('load', () => {
        context.drawImage(treasureImage, treasure.col * 50, treasure.row * 50, 50, 50)});
    } else {
      treasureImage.addEventListener('load', () => {
        context.drawImage(treasureImage, treasure.col * 50, treasure.row * 50, 50, 50)});
    }
}


window.addEventListener('keydown', (event) => {
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
  context.clearRect(0,0,500,500);
  drawGrid();
  drawPlayer();
  drawTreasure()
}

drawEverything();
