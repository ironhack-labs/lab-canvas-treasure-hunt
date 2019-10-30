// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
    for (let i = 0; i < 10; i++) {
        context.strokeRect(i * 50, 0, 1, 500);
    }

    for (let i = 0; i < 10; i++) {
        context.strokeRect(0, i * 50, 500, 1);
    }
    // TODO
    // TODO: write the code of the function
}


function drawEverything() {
    drawGrid();
    drawPlayer();
    drawTreasure();
    PrintScore();
}



class Character {
    constructor(col, row, direction) {
        this.col = 0;
        this.row = 0;
        this.direction = 'down';
        this.collectedDiamons = 0;
    }

    moveUp() {
        if (this.row > 0) {
            this.row--; 
        } else {
            this.row = 9;
        }
        this.direction = 'up';
    }

    moveRight() {
        if (this.col < 9) {
            this.col++;
        } else {
            this.col = 0;
        }
        this.direction = 'right';
    }

    moveDown() {
        if (this.row < 9) {
            this.row++;
        } else {
            this.row = 0;
        }
        this.direction = 'down';
    }

    moveLeft() {
        if (this.col > 0) {
            this.col--;
        } else {
            this.col = 9;
        }
        this.direction = 'left';
    }


}

class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10);
        this.row = Math.floor(Math.random() * 10);
    }
};

const diamond = new Treasure(4, 6);
diamond.setRandomPosition();
const player = new Character();


function drawTreasure() {
    const IMAGE_URL = 'starter-code/images/treasure.png'

    const image = new Image();
    image.src = IMAGE_URL;

    image.addEventListener('load', () => {
        const imageHeight = image.height;
        const imageWidth = image.width;



        context.drawImage(image, diamond.col * 50, diamond.row * 50, 50, 50);
    });
    return image;
}





function drawPlayer() {

    let IMAGE_URL = '';
    switch (player.direction) {
        case 'up':
            IMAGE_URL = 'starter-code/images/character-up.png';
            break;
        case 'down':
                IMAGE_URL = 'starter-code/images/character-down.png';
                break;
                case 'left':
                IMAGE_URL = 'starter-code/images/character-left.png';
                break;
                case 'right':
                IMAGE_URL = 'starter-code/images/character-right.png';
                break;
        default:
                IMAGE_URL = 'starter-code/images/character-down.png';
            break;
    }

    const image = new Image();
    image.src = IMAGE_URL;

    image.addEventListener('load', () => {
        const imageHeight = image.height;
        const imageWidth = image.width;

        context.drawImage(image, player.col * 50, player.row * 50, imageWidth, imageHeight);
    });
    return image;
}



function PrintScore() {
    document.getElementById('score').innerText = player.collectedDiamons;
}




window.addEventListener('keydown', (e) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
  
    // React based on the key pressed
    switch (e.keyCode) {
      case 37:
        context.clearRect(player.col * 50, player.row *50, 50, 50);
        player.moveLeft();
        drawEverything();
        console.log('left');
        break;
      case 38:
        context.clearRect(player.col * 50, player.row *50, 50, 50);
        player.moveUp();
        drawEverything();
        console.log('up');
        break;
      case 39:
        context.clearRect(player.col * 50, player.row *50, 50, 50);
        player.moveRight();
        drawEverything();
        console.log('right');
        break;
      case 40:
        context.clearRect(player.col * 50, player.row *50, 50, 50);
        player.moveDown();
        drawEverything();
        console.log('down');
        break;
    }

    if (player.col === diamond.col && player.row === diamond.row){
        context.clearRect(diamond.col * 50, diamond.row * 50, 50, 50);
        diamond.setRandomPosition();
        player.collectedDiamons++;
        drawEverything();

    }
  });

  drawEverything();



