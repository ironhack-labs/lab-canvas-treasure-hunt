// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

class Character {
    constructor(x, y) {
        this.row = x;
        this.col = y;
    }
    moveUp() {
        this.col--
    }
    moveDown() {
        this.col++
    }

    moveLeft() {
        this.row--
    }

    moveRight() {
        this.row++
    }

}

class Treasure {
    constructor() {
        this.row;
        this.col;
    }
    setRandomPosition() {
        this.row = (Math.floor(Math.random() * 10));
        this.col = (Math.floor(Math.random() * 10));
    }
}


// Iteration 1
function drawGrid() {
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    for (i = 50; i < width; i = i + 50) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, height)
        context.closePath();
        context.stroke();

    }
    for (i = 50; i < width; i = i + 50) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(width, i)
        context.closePath();
        context.stroke();

    }
}


let player = new Character(0, 0);

function drawPlayer() {
    const IMAGE_URL = "./images/character-down.png";
    // let x = Math.floor((Math.random() * 10));
    // let y = Math.floor((Math.random() * 10));
    let col = player.col
    let row = player.row
    const image = new Image();
    image.src = IMAGE_URL;

    image.addEventListener('load', () => {
        context.drawImage(image, row * 50, col * 50, 45, 45);
        console.log(player)
    });

}
const treasure = new Treasure();
treasure.setRandomPosition();

function drawTreasure() {
    const IMAGE_URL = "./images/treasure.png";
    const image = new Image();
    image.src = IMAGE_URL;

    image.addEventListener('load', () => {
        context.drawImage(image, treasure.row * 50, treasure.col * 50, 45, 45);
        console.log(treasure)


    });


}

function drawEverything() {
    context.clearRect(0, 0, 500, 500);
    drawGrid();
    drawPlayer()
    drawTreasure()
    if (player.col === treasure.col && player.row === treasure.row) {
        treasure.setRandomPosition()
        drawEverything()
    }
    
    
}

drawEverything();


window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();

    // React based on the key pressed
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
