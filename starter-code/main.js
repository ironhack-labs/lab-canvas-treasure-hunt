// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1

function drawGrid() {
    context.strokeStyle = 'black';
    for (let i = 0; i < 10; i++) {
        context.strokeRect(i * 50, 0, 50, 500);
        context.strokeRect(0, i * 50, 500, 50);
    }
}

drawGrid();

class character {
    constructor(col, row) {
        this.col = 0;
        this.row = 0;
    }

    moveUp() {
        this.row--
    }

    moveRight() {
        this.col++
    }

    moveDown() {
        this.row++
    }

    moveLeft() {
        this.col--
    }
}

const player = new character(0, 0);
console.log(player);
player.moveDown();
player.moveDown();
player.moveRight();
console.log(player.col, player.row);



const drawPlayer = () => {
    const IMAGE_URL = "./images/character-down.png";
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        const imageWidth = image.width;
        const imageHeight = image.height;
        context.drawImage(image, 0, 0, imageWidth, imageHeight);
    });
}

class Treasure {
    setRandomPosition(col, row) {
        this.row = Math.floor(Math.random() * 10);
        this.col = Math.floor(Math.random() * 10);
    }

}

const treasure = new treasure(0, 0);
console.log(treasure);
console.log(treasure.col, treasure.row);

const drawTreasure = () => {
    const IMAGE_URL = "./images/treasure.png";
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        const imageWidth = image.width;
        const imageHeight = image.height;
        treasure.setRandomPosition()
        context.drawImage(image, treasure.col * 50, treasure.row * 50, imageWidth / 5, imageHeight / 5);
    });
}


function drawEverything() {
    drawGrid();

    drawPlayer();

    drawTreasure()
}

drawEverything();

/*
window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (position) {
    case moveUp:
      console.log('up');
      break;
    case moveLeft:
      console.log('left');
      break;
    case moveRight:
      console.log('right');
      break;
    case moveDown:
      console.log('down');
      break;
  }
};
*/