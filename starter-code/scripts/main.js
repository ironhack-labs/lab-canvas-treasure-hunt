// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.direction = 'down';
        this.diamonds = 0;
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
        }
        else {
            this.col = 0;
        }
        this.direction = 'right';
    }
    moveDown() {
        if (this.row < 9) {
            this.row++;
        }
        else {
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
    increaseDiamonds(){
        this.diamonds++;
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
}

const randomPlayerX = Math.floor(Math.random()*10);
const randomPlayerY = Math.floor(Math.random()*10);
const player = new Character(randomPlayerX, randomPlayerY, 'down');
// console.log(player.col, player.row);
const treasure = new Treasure(6, 7);
treasure.setRandomPosition();

// Iteration 1
function drawGrid() {
    for (i = 0; i < 10; i++) {
        context.strokeRect(i * width / 10, 0, width / 10, height);
        context.strokeRect(0, i * width / 10, width, height / 10);
    }
}


function drawPlayer() {
    let IMAGE_URL = '';
    switch (player.direction) {
        case 'down':
            IMAGE_URL = './images/character-down.png';
            break;
        case 'up':
            IMAGE_URL = './images/character-up.png';
            break;
        case 'left':
             IMAGE_URL = './images/character-left.png';
            break;
        case 'right':
             IMAGE_URL = './images/character-right.png';
            break;
        default:
             IMAGE_URL = './images/character-down.png';
            break;
    }
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        context.drawImage(image, player.col * 50, player.row * 50, 50, 50);
    });
}

function drawTreasure() {
    const IMAGE_URL = './images/treasure.png';
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        context.drawImage(image, treasure.col * 50, treasure.row * 50, 50, 50);
    });
}

function drawScore() {
    document.getElementById('score').innerText = player.diamonds;
}

function drawEverything() {
    drawGrid();
    drawPlayer();
    drawTreasure();
    drawScore();
}

drawEverything();

window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();

    // React based on the key pressed
    switch (event.keyCode) {
        case 37:
            console.log('left');
            context.clearRect(player.col * 50, player.row * 50, 50, 50);
            player.moveLeft();
            console.log(player.col);
            drawEverything();
            break;
        case 38:
            console.log('up');
            context.clearRect(player.col * 50, player.row * 50, 50, 50);
            player.moveUp();
            console.log(player.row);
            drawEverything();
            break;
        case 39:
            console.log('right');
            context.clearRect(player.col * 50, player.row * 50, 50, 50);
            player.moveRight();
            console.log(player.col);
            drawEverything();
            break;
        case 40:
            console.log('down');
            context.clearRect(player.col * 50, player.row * 50, 50, 50);
            player.moveDown();
            console.log(player.row);
            drawEverything();
            break;
    }
    if (player.row === treasure.row && player.col === treasure.col) {
        context.clearRect(treasure.col * 50, treasure.row * 50, 50, 50);
        treasure.setRandomPosition();
        player.increaseDiamonds();
        drawEverything();  
    };
});