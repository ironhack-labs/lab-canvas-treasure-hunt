// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
console.log(context);

// Iteration 1
function drawGrid() {
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    for (let c = 0; c <= 10; c++) {
        for (let r = 0; r <= 10; r++) {
            context.strokeRect(50 * r, 50 * c, 50, 50)
        }
    }
}

const playerImage = new Image();
playerImage.src = './starter-code/images/character-down.png';

const treasureImage = new Image();
treasureImage.src = './starter-code/images/treasure.png';


// Iteration 2
class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    moveUp() {
        return col = this.col - 1;
    }

    moveRight() {
        return row = this.row + 1;
    }

    moveDown() {
        return col = this.col + 1;
    }
    moveLeft() {
        return row = this.row - 1
    }
}

class Treasure {
    constructor(col, row) {
        this.row = row;
        this.col = col;
    };
}

function drawPlayer() {
    context.drawImage(playerImage, player.col, player.row, 50, 50)
}

const player = new Character(9, 9)

function drawTreasure() {
    context.drawImage(treasureImage, treasure.col, treasure.row, 50, 50)
}

function setRandomPosition() {
    return Math.floor(Math.random() * 9 * 50);
};

const treasure = new Treasure(setRandomPosition(), setRandomPosition())

function drawEverything() {
    window.addEventListener('load', () => {
        drawGrid();
        drawPlayer();
        drawTreasure()
    })
};

drawEverything()

// function drawEverything2() {
//     drawGrid();
//     drawPlayer();
//     drawTreasure()
// };


// drawEverything();
// drawEverything2();