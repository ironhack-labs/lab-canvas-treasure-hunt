// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Useful Calculations

const width = canvas.width;
const height = canvas.height;
const tileCount = 10;
const tileSize = width / tileCount;


// Iteration 1
function drawGrid(x,y) {
    for(let i = 0; i <= 10; i++) {
      context.strokeStyle = 'black';
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(50 * i, 0);
      context.lineTo(50 * i, 500);
      context.stroke();
      context.moveTo(0, i * 50);
      context.lineTo(500, i * 50);
      context.stroke();
      context.closePath();
  };

  // Iteration 2

  class Character {
    constructor(initialCol, initalRow) {
      this.col = initialCol;
      this.row = initalRow;
      this.direction = 'down';
      this.score = 0;
  
      const imagePaths = {
        left: 'images/character-left.png',
        up: 'images/character-up.png',
        right: 'images/character-right.png',
        down: 'images/character-down.png'
      };
  
      // Save all the images in the character
      this.images = {};
  
      // Loop keys of object
      for (let direction in imagePaths) {
        this.images[direction] = new Image();
        this.images[direction].src = imagePaths[direction];
      }
    }

    moveUp() {
        this.row--;
        this.direction = 'up';
      }
    
      moveDown() {
        this.row++;
        this.direction = 'down';
      }
    
      moveLeft() {
        this.col--;
        this.direction = 'left';
      }
    
      moveRight() {
        this.col++;
        this.direction = 'right';
      }
    }

    const player = new Character(0, 0);


// Iteration 3

function drawPlayer() {
  context.drawImage(
    player.images[player.direction],
    player.col * tileSize,
    player.row * tileSize,
    tileSize,
    tileSize
  );
}


// Iteration 4

class Treasure {
    constructor() {
      this.setRandomPosition(); // to set `this.col` and `this.row`
  
      this.image = new Image();
      this.image.src = 'images/treasure.png';
    }
  
    setRandomPosition() {
      this.col = Math.floor(Math.random() * tileCount);
      this.row = Math.floor(Math.random() * tileCount);
    }
  }
  
  const treasure = new Treasure();
  
  function drawTreasure() {
    context.drawImage(
      treasure.image,
      treasure.col * tileSize,
      treasure.row * tileSize,
      tileSize,
      tileSize
    );
  }
  
  // Iteration 5

document.addEventListener('keydown', event => {
    event.preventDefault(); // Stop the default behavior (moving the screen to the left/up/right/down)
  
    switch (event.keyCode) {
      case 37:
        player.moveLeft();
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
  
    // Check if the user is on the treasure
    if (player.row === treasure.row && player.col === treasure.col) {
      player.score++;
      treasure.setRandomPosition();
    }
  
    // Draw everything
    drawEverything();
  });
  
  // Draw Everything
  
  function drawEverything() {
    context.clearRect(0, 0, width, height);
    drawGrid();
    drawTreasure();
    drawPlayer();
  }
  
  // Might not case, if images hadn't previously been loaded
  // drawEverything();
  
  // Triggering the first drawEverything after 500ms ensures that all pictures had been loaded
  setTimeout(drawEverything, 500)}