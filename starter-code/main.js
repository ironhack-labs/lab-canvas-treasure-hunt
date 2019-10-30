const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;


// Iteration 1
function drawGrid() {
    //let count = 0;
    //while (count < 10){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.strokeRect(i * 50, j * 50, 50, 50);
            // context.strokeRect(0, i*50, 50, 50);
            //count++; 
        }
    }
}

class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    moveUp() {
        this.col -= 1;
    }
    moveDown() {
        this.col += 1;
    }
    moveLeft() {
        this.row -= 1;
    }
    moveRight() {
        this.row += 1;
    }
}
const player = new Character(5, 3);


function drawPlayer() {
    const IMAGE_URL = "images/character-down.png";
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        context.drawImage(image, player.col * 50, player.row * 50, 50, 50)
    })
}

class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    setRandomPosition(min, max) {
        let randomCol = Math.floor(Math.random() * (max - min) + min);
        let randomRow = Math.floor(Math.random() * (max - min) + min);
        this.col = randomCol;
        this.row = randomRow;
    }

}

const treasure = new Treasure(50, 50);
treasure.setRandomPosition(0, 10);

function drawTreasure() {
    const IMAGE_URL = "images/treasure.png";
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        context.drawImage(image, treasure.col * 50, treasure.row * 50, 50, 50)
    })
}


window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
  
    // React based on the key pressed
    switch (event.keyCode) {
      case 37:
        player.moveUp()
        drawEverything()
        
        break;
      case 38:
          player.moveLeft()
          drawEverything()
        
        break;
      case 39:
          player.moveDown()
          drawEverything()
        
        break;
      case 40:
          player.moveRight()
          drawEverything()
        
        break;
    }
  });

function drawEverything() {
    context.clearRect(0,0,500,500);
    if (player.col === treasure.col && player.row === treasure.row){
        treasure.setRandomPosition(0,10)
    }
    drawGrid();
    drawPlayer();
    drawTreasure();
    

}
drawEverything();