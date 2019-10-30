const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

const WIDTH = ctx.canvas.width;
const HEIGHT = ctx.canvas.height;


class Character {
    constructor(x, y) {
        this.pos = {
            x: x,
            y: y
        };
    }

    moveUp() {
        if(this.pos.y - 1 >= 0) this.pos.y--;
    }

    moveDown() {
        if(this.pos.y + 1 < 10) this.pos.y++;
    }

    moveRight() {
        if(this.pos.x + 1 < 10) this.pos.x++;
    }

    moveLeft() {
        if(this.pos.x - 1 >= 0) this.pos.x--;
    }
}

class Treasure extends Character {
    constructor(x, y) {
        super(x, y);
    }

    setRandomPosition() {
        this.pos.x = Math.floor(Math.random() * 10);
        this.pos.y = Math.floor(Math.random() * 10);
    }
}


const player = new Character(0, 0);
const treasure = new Treasure(5, 5);

// Iteration 1
function drawGrid() {
    let travel = 0;
    while (travel < WIDTH) {
        ctx.strokeRect(travel, 0, 50, HEIGHT);
        ctx.strokeRect(0, travel, WIDTH, 50);
        travel += 50;
    }
}

const drawPlayer = (player) => {
    const img = new Image();
    img.src = "./images/character-down.png";
    img.addEventListener("load",e => {
        ctx.drawImage(img, player.pos.x * 50, player.pos.y * 50);
    });
    
}

const drawTreasure = (treasure) => {
    const img = new Image();
    img.src = "./images/treasure.png";
    img.addEventListener("load", e => {
        ctx.drawImage(img, treasure.pos.x * 50, treasure.pos.y * 50, 50, 50);
    });
}

function drawEverything() {
    drawGrid();
    drawPlayer(player);
    drawTreasure(treasure);  
}

drawEverything();


window.addEventListener('keydown', e => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    e.preventDefault();

    // React based on the key pressed
    switch (e.keyCode) {
        case 37:
            player.moveLeft()
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

    if(player.pos.x === treasure.pos.x && player.pos.y === treasure.pos.y) {
        treasure.setRandomPosition();
    }

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawEverything();
});
