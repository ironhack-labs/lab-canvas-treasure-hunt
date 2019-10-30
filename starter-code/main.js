// main.js
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.playerImageDown = new Image();
    this.playerImageDown.src = "images/character-down.png";
    this.playerImageDown.addEventListener("load", () => {
      context.drawImage(this.playerImageDown, player.col, player.row, 40, 40);
    });
  }

  draw() {
    context.drawImage(this.playerImageDown, player.col, player.row, 40, 40);
  }
  moveUp() {
    this.row = this.row - 50;
  }

  moveRight() {
    this.col = this.col + 50;
  }

  moveDown() {
    this.row = this.row + 50;
  }

  moveLeft() {
    this.col = this.col - 50;
  }
}

let player = new Player(0, 0);

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.treasureImage = new Image();
    this.imageTreasureURL = "images/treasure.png";
    this.treasureImage.src = this.imageTreasureURL;

    this.treasureImage.addEventListener("load", () => {
        context.drawImage(this.treasureImage, treasure.col, treasure.row, 40, 40)
     });
    }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * (500 - 1)) + 1;
    this.row = Math.floor(Math.random() * (500 - 1)) + 1;
  }

  drawT() {
    context.drawImage(this.treasureImage, treasure.col, treasure.row, 40, 40)
  }
}

let treasure = new Treasure(0, 0);

// Iteration 1
const TILE_SIZE = 50;
function drawGrid() {
  context.strokeStyle = "black";

  for (let i = 0; i < 50; i++) {
    context.strokeRect(i * 50, 0, 50, 500);
  }
  for (let i = 0; i < 50; i++) {
    context.strokeRect(0, i * 50, 500, 50);
  }
}

//each orientation has a differen image!!!

function drawPlayer() {
    player.draw()
}


function drawTreasure() {
    treasure.drawT();
 if(player.col === treasure.col && player.row === treasure.row){
        treasure.drawT();
 }
  }

function drawEverything() {
  context.clearRect(0, 0, 500, 500);  
  drawGrid();
  drawPlayer(player);
  drawTreasure(treasure);
}

drawEverything();

window.addEventListener("keydown", event => {
  event.preventDefault();

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

// const player1 = new Character(0, 0); // (0,0) = Initial position

//player.moveDown(); // Increase by 1 the value of player.row
//player.moveDown(); // Increase by 1 the value of player.row
//player.moveRight(); // Increase by 1 the value of player.col
