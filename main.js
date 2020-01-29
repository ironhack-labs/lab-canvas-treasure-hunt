// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
context.strokeStyle = 'black'
context.lineWidth = 2 

  for (i=0;i<11;i++){
// vertical
    context.beginPath()
context.moveTo(0, 0+50*i)
context.lineTo(500, 0+50*i)
context.stroke()
context.closePath()
// horizontal
context.beginPath()
context.moveTo(0+50*i, 0)
context.lineTo(0+50*i, 500)
context.stroke()
context.closePath()  

}
}




function drawPlayer(){

const playerImage = new Image()
const playerImageUrl = "./starter-code/images/character-down.png" //direction()
playerImage.src = playerImageUrl
playerImage.addEventListener('load', ()=>{
context.drawImage(playerImage,player.col,player.row)
})}


function drawTreasure(){
const treasureImage = new Image()
const treasureImageUrl = "/starter-code/images/treasure.png"
treasureImage.src = treasureImageUrl
treasureImage.addEventListener('load', ()=>{
context.drawImage(treasureImage,treasure.col,treasure.row,45,45)
/*
function direction(direction){
  switch(direction){
    case down:
      return "/starter-code/images/character-down.png";
    break;
case up:
  
  }
  

}
*/
})}




class Character {
  constructor(col, row, score) {
  this.col = 0
  this.row = 0
  this.score = 0
  }
  moveUp(){
    if(this.row > 0){
      this.row -= 50
    }
    
  }
  moveRight(){
    if(this.col < 450){
      this.col += 50
    }
    
  }
  moveDown(){
    if(this.row < 450){
    this.row += 50
  }
  }
  moveLeft(){
    if(this.col > 0){
      this.col -= 50
    }
    
  }
}

class Treasure {
  constructor(col, row) {
  this.col = col
  this.row = row
  }
setPosition() {
this.col = 50 * Math.floor(Math.random() * 10)
this.row = 50 * Math.floor(Math.random() * 10)
}

}



function drawEverything() {
  drawGrid();
  drawPlayer()
  drawTreasure()
}


drawEverything();


window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  

  

  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      player.moveLeft()
      break;
    case 38:
      console.log('up');
      player.moveUp()
      break;
    case 39:
      console.log('right');
      player.moveRight()
      break;
    case 40:
      console.log('down');
      player.moveDown()
      break;

  }
  if(player.col === treasure.col && player.row === treasure.row){
      treasure.setPosition()
      player.score++ 
      let counter = document.querySelector('h1 span');
      counter.innerText = player.score
      
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawEverything();
});




const player = new Character()
const treasure = new Treasure()
treasure.setPosition()