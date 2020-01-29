const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const $score = document.getElementById('score').innerHTML;
const scoreNumber = Number($score);


//-------PLAYER-----------

//-------TREASURE
/*const treasureUrl = 'https://img.itch.zone/aW1hZ2UvMTMwMDQ5LzU5OTgzMi5wbmc=/347x500/TW1LFU.png';
const treasureImg = new Image();
treasureImg.src = treasureUrl;*/

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    if(this.row>0){
      this.row--;
    }

    if(player.col === treasure.col && player.row === treasure.row){
      treasure.setRandomPosition();
      
    }
   
  }

  moveRight() {
    if(this.col<9){
      this.col++;
    }

    if(player.col === treasure.col && player.row === treasure.row){
      treasure.setRandomPosition();
    }
    
  }

  moveDown() {
    if(this.row<9){
      this.row++;
    }

    if(player.col === treasure.col && player.row === treasure.row){
      treasure.setRandomPosition();
    }
  }

  moveLeft() {
    if(this.col>0){
      this.col--;
    }

    if(player.col === treasure.col && player.row === treasure.row){
      treasure.setRandomPosition();
    }
  }
}

//---------------------------------------TREASURE
class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10) * 50 + 2;
    this.col = Math.floor(Math.random() * 10) * 50 + 2;
  }
}

//-------CREATE PLAYER
const player = new Character(5, 5); // (0,0) = Initial position

//-------CREATE Treasure
const treasure = new Treasure();
//console.log(treasure.row);

/*
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

//console.log(player.col, player.row); // => 1,2*/

function drawPlayer() {
  //console.log('im running');
  //console.log(col);
  const imageUrlPlayer = ['./images/character-down.png','./images/character-left.png','./images/character-right.png','./images/character-up.png'];
  const imageUrlDown = './images/character-down.png';
  const imageDown = new Image();
  imageDown.src = imageUrlPlayer[0];

  imageDown.addEventListener('load', () => {
    context.drawImage(imageDown, player.col * 50, player.row * 50);
  });
}

function drawPlayerLeft(){
  //console.log('im running');
  //console.log(col);
  const imageUrlPlayer = ['./images/character-down.png','./images/character-left.png','./images/character-right.png','./images/character-up.png'];
  //const imageUrlDown = './images/character-down.png';
  const imageDown = new Image();
  imageDown.src = imageUrlPlayer[1];

  imageDown.addEventListener('load', () => {
    context.drawImage(imageDown, player.col * 50, player.row * 50);
  });

}



function drawTreasure() {
  //console.log('im running');
  //console.log(col);
  const trea_Image = './images/treasure.png';
  const treasureImg = new Image();
  treasureImg.src = trea_Image;

  if(player.col*50+2 === treasure.col && player.row*50+2 === treasure.row){
    treasure.setRandomPosition();
    
    
  }
  
  
  //treasure.setRandomPosition();

  treasureImg.addEventListener('load', () => {
    context.drawImage(treasureImg, treasure.col, treasure.row, 50, 50);
  });

  
}

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  for (let j = 0; j < 1000; j += 50) {
    context.strokeStyle = 'black';
    context.lineWidth = 5;

    context.beginPath();
    //inicio do desenho da linha
    context.moveTo(0 + j, 0);

    //primeiro ponto
    context.lineTo(0 + j, 1000);

    context.stroke();
    context.closePath();

    //Line - Rows

    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.beginPath();
    //inicio do desenho da linha
    context.moveTo(0, 0 + j);

    //primeiro ponto
    context.lineTo(1000, 0 + j);

    context.stroke();
    context.closePath();
  }
}

function drawEverything() {
  //context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      drawPlayerLeft();
      break;
    case 38:
      player.moveUp();
      
      break;
    case 39:
      player.moveRight();
      
      break;
    case 40:
      player.moveDown();

      
      break;
  }
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  drawEverything();
});
