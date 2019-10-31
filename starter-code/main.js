const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
    context.fillStyle = 'black';
    for (let i = 0; i<10; i++) {
    context.strokeRect(i*50, 0, 2, 500);
    }
    for (let i = 0; i<10; i++) {
        context.strokeRect(0, i*50, 500, 2);
    }
}

function drawPlayer() {
    const IMAGE_URL = 'images/character-down.png'

    const image = new Image();
    image.src = IMAGE_URL;

    image.addEventListener('load', () => {
        const imageHeight = image.height;
        const imageWidth = image.width;

        const size = 1;

        context.drawImage(image, player.col * 50, player.row * 50, imageWidth * size, imageHeight * size);
        return image;
    });
}

function drawTreasure(){
    const IMAGE_URL = 'images/treasure.png'

    const image = new Image();
    image.src = IMAGE_URL;

    image.addEventListener('load', () => {
        const imageHeight = image.height;
        const imageWidth = image.width;

        const size = 0.2;

        context.drawImage(image, treasure.col * 50, treasure.row * 50, imageWidth * size, imageHeight * size);
        return image;
    });
}

class Character {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    moveUp() {
        if (this.row < 10 && this.row > 0) {
            this.row -= 1;
        } else {
            this.row = this.row;
        }
    }
    moveRight() {
        if (this.col < 9) {
            this.col++;
        } 
    }
    moveDown() {
        if (this.row < 9 && this.row >= 0) {
            this.row++;
        } else {
            this.row = this.row;
        }
    }
    moveLeft() {
        if (this.col !== 0) {
            this.col -= 1;
          } else {
            this.col = this.col;
          }
        }
}

class Treasure {
    constructor (col, row) {
        this.col = col;
        this.row = row;
    }
    setRandomPosition(){
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    }
} 

function randomPosition() {
    return Math.floor(Math.random() * 9);
}

const player = new Character(0, 0);
const treasure = new Treasure(6, 5);
treasure.setRandomPosition();

  // make it move
  window.addEventListener('keydown', event => {
    event.preventDefault();
    switch (event.keyCode) {
      case 37:
        context.clearRect(player.col * 50, player.row * 50, 50, 50);
        player.moveLeft();
        drawEverything();
        console.log(player.col, player.row);
        break;
      case 38:
        context.clearRect(player.col * 50, player.row * 50, 50, 50);
        player.moveUp();
        drawEverything();
        console.log(player.col, player.row);
        break;
      case 39:
        context.clearRect(player.col * 50, player.row * 50, 50, 50);
        player.moveRight();
        drawEverything();
        console.log(player.col, player.row);
        break;
      case 40:
        context.clearRect(player.col * 50, player.row * 50, 50, 50);
        player.moveDown();
        drawEverything();
        console.log(player.col, player.row);
        break;
    }
    if (player.col === treasure.col && player.row === treasure.row) {
        context.clearRect(player.col * 50, player.row * 50, 50, 50);
        treasure.setRandomPosition();
        drawEverything();
    }
  });



  function drawEverything() {
    context.clearRect(0, 0, 500, 500)
    drawGrid();
    drawPlayer();
    drawTreasure();
  }
  drawEverything();