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
        this.row--
      }
      moveDown(){
        this.row++
      }
      moveLeft(){
        this.col--
      }
      moveRight(){
        this.col++  
     }
   }


const player = new Character(0, 0); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2


//Class Treasure

class Treasure {
  constructor(){
    this.col = 0
    this.row = 0
  }
  
  setRandomPosition(){
    this.col = (Math.floor(Math.random()*10)*50);
    this.row = (Math.floor(Math.random()*10)*50)
  }

}

const treasure = new Treasure ();

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
  context.drawImage(characterImage, 0, 0, 50, 50)});
}


function drawTreasure() {
  
  const treasureImageUrl = './starter-code/images/treasure.png';
  const treasureImage = new Image();
  treasureImage.src = treasureImageUrl;

  treasureImage.addEventListener('load', () => {
    treasure.setRandomPosition()
    context.drawImage(treasureImage, treasure.col, treasure.row, 50, 50)});
}





function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure()
}

drawEverything();
