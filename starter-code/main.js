const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

class Character {
    constructor(){
        this.col = 0;
        this.row = 0;
    }

    moveUp(){
        if (this.row !==0){
            this.row-=(width/10);
        }
    }

    moveRight(){
        if(this.col<(height/10*9)){
            this.col+=(height/10);
        }
    }

    moveLeft(){
        if (this.col !==0){
            this.col-=(width/10);
        }
    }

    moveDown(){
        if(this.row<(width/10*9)){
            this.row+=(width/10)
        }
    }
}

class Treasure {
    constructor(){
        this.row = 0;
        this.col = 0;
    }
    setRandomPosition(){
        this.row = Math.floor(Math.random()*10)*(width/10);
        this.col = Math.floor(Math.random()*10)*(height/10);
    }
}


// Iteration 1
function drawGrid() {
    
    const col = width/10;
    context.beginPath();
    for (i=1; i<10;i++){
        context.moveTo(col*i,0);
        context.lineTo(col*i,height);
        context.stroke();
    }
    
    const row = height/10;
    for (i=1; i<10;i++){
        context.moveTo(0,row*i);
        context.lineTo(width,row*i);
        context.stroke()
    }
    context.closePath();
    
}

let character = new Character;
let treasure = new Treasure;

const playerImage = new Image();
playerImage.src = './images/character-down.png';

const treasureImage = new Image();
treasureImage.src = './images/treasure.png';


function drawPlayer(col, row){
    context.drawImage(playerImage, col, row);
}

function drawTreasure (col,row){
    const treasureImageHeight = treasureImage.height;
    const treasureImageWidth = treasureImage.width;
    const smallerBy = 0.22
    context.drawImage(treasureImage,col,row,treasureImageWidth*smallerBy,treasureImageHeight*smallerBy);
}


function drawEverything() {
  drawGrid();
  drawPlayer(character.col, character.row);
  drawTreasure(treasure.col,treasure.row);
}

playerImage.addEventListener('load', () =>{
    treasureImage.addEventListener('load', () =>{
        treasure.setRandomPosition();
        drawEverything();
    })
})
let score = 0
window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    let prevRow;
    let prevCol;
    
    // React based on the key pressed
    switch (event.keyCode) {
      case 37:
        //console.log('left');
        document.getElementById('score').classList.remove('suma');
        document.querySelector('h2').classList.remove('suma');
        character.moveLeft();
        context.clearRect(0,0,width,height);
        if(character.row===treasure.row && character.col === treasure.col){
            score +=1
            document.getElementById('score').innerHTML = score;
            document.getElementById('score').classList.add('suma');
            document.querySelector('h2').classList.add('suma');
            treasure.setRandomPosition();
        }
        drawEverything();
        break;
      case 38:
        //console.log('up');
        document.getElementById('score').classList.remove('suma');
        document.querySelector('h2').classList.remove('suma');
        character.moveUp();
        context.clearRect(0,0,width,height);
        if(character.row===treasure.row && character.col === treasure.col){
            score +=1
            document.getElementById('score').innerHTML = score;
            document.getElementById('score').classList.add('suma');
            document.querySelector('h2').classList.add('suma');
            treasure.setRandomPosition();
        }
        drawEverything();
        break;
      case 39:
        //console.log('right');
        document.getElementById('score').classList.remove('suma');
        document.querySelector('h2').classList.remove('suma');
        character.moveRight();
        context.clearRect(0,0,width,height);
        if(character.row===treasure.row && character.col === treasure.col){
            score +=1
            document.getElementById('score').innerHTML = score;
            document.getElementById('score').classList.add('suma');
            document.querySelector('h2').classList.add('suma');
            treasure.setRandomPosition();
        }
        drawEverything();
        break;
      case 40:
        //console.log('down');
        document.getElementById('score').classList.remove('suma');
        document.querySelector('h2').classList.remove('suma');
        character.moveDown();
        context.clearRect(0,0,width,height);
        if(character.row===treasure.row && character.col === treasure.col){
            score +=1
            document.getElementById('score').innerHTML = score;
            document.getElementById('score').classList.add('suma');
            document.querySelector('h2').classList.add('suma');
            treasure.setRandomPosition();
        }
        drawEverything();
        break;
    }
  });

  let button = document.getElementById('button')

  button.addEventListener('click', ()=>{
      score = 0
      document.getElementById('score').innerHTML = score;
      document.getElementById('score').classList.remove('suma');
        document.querySelector('h2').classList.remove('suma');
      context.clearRect(0,0,width,height);
      treasure.setRandomPosition();
      drawEverything();
  })
