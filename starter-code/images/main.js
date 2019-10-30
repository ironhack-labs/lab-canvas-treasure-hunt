// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    moveUp() {
        this.row--;
    };

    moveRight() {
        this.col++;
    };

    moveDown() {
        this.row++;
    };

    moveLeft() {
        this.col--;
    };
};

class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    };
    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10);
        this.row = Math.floor(Math.random() * 10);
    }
};


// Iteration 1
function drawGrid() {
    context.strokeRect(0, 0, width, width);
    context.stroke();

    for (let i = 0; i < 10; i++) {
        context.fillRect(i * (width / 10), 0, 1, height);
    };
    context.stroke();

    for (let i = 0; i < 10; i++) {
        context.fillRect(0, i * (height / 10), width, 1);
    };
    context.stroke();
}

function drawPlayer() {
    const IMAGE_URL = 'character-down.png';
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        context.drawImage(image, 50 * character.col, 50 * character.row, 50, 50);
    })
}

function drawTreasure() {
    const IMAGE_URL = 'treasure.png';
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
        context.drawImage(image, 50 * treasure.col, 50 * treasure.row, 50, 50);
    })
};

function drawEverything() {
    drawGrid();
    drawPlayer();
    drawTreasure();
};

const treasure = new Treasure(6, 5);
treasure.setRandomPosition();
const character = new Character(9, 9);


drawEverything();



function whenTheyMeet() {
    if (character.col === treasure.col && character.row === treasure.row) {
        context.clearRect(treasure.col * 50, treasure.row * 50, 50, 50);
        treasure.setRandomPosition();
        drawEverything();
    }
}


window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    // React based on the key pressed
    switch (event.keyCode) {
        case 37:
            context.clearRect(character.col * 50, character.row * 50, 50, 50);
            character.moveLeft();
            drawEverything();
            console.log('left');
            whenTheyMeet();
            break;
        case 38:
            context.clearRect(character.col * 50, character.row * 50, 50, 50);
            character.moveUp();
            drawEverything();
            console.log('up');
            whenTheyMeet();
            break;
        case 39:
            context.clearRect(character.col * 50, character.row * 50, 50, 50);
            character.moveRight();
            drawEverything();
            console.log('right');
            whenTheyMeet();
            break;
        case 40:
            context.clearRect(character.col * 50, character.row * 50, 50, 50);
            character.moveDown();
            drawEverything();
            console.log('down');
            whenTheyMeet();
            break;
    }
}
);






