//Character
class Character {
    constructor(col, row, direction) {
        this.col = 0;
        this.row = 0;
        this.direction = "South";
    }

    moveUp() {
        this.row > 0 ? this.row-- : this.row;
    }

    moveRight() {
        this.col < 9 ? this.col++ : this.col;
    }

    moveDown() {
        this.row < 9 ? this.row++ : this.row;
    }

    moveLeft() {
        this.col > 0 ? this.col-- : this.col;
    }
};

//Treasure
class Treasure extends Character {
    constructor(col, row) {
        super(col, row);
    }

    setRandomPosition() {
        this.row = Math.floor(Math.random() * 10);         
        this.col = Math.floor(Math.random() * 10);
    }
}

// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const player = new Character(0, 0);
const treasure = new Treasure(10, 10);
let treasureOnScreen = 0;
let points = 0;

function drawGrid() {
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
       context.strokeRect(i * 50, 0, 50, 500);
       context.strokeRect( 0, i * 50, 500, 50);
     };
};    

const drawPlayer = () => {
    if (player.direction === "South") {
        const IMAGE_URL = "./images/character-down.png";   
        const img = new Image();
        img.src = IMAGE_URL; 
        img.addEventListener('load', () => {        
            context.drawImage(img, player.col * 50, player.row * 50, img.width, img.height);        
        });
    }    
    else if (player.direction === "East") {
        const IMAGE_URL = "./images/character-right.png";   
        const img = new Image();
        img.src = IMAGE_URL; 
        img.addEventListener('load', () => {       
            context.drawImage(img, player.col * 50, player.row * 50, img.width, img.height);        
        });        
    }
    else if (player.direction === "North") {
        const IMAGE_URL = "./images/character-up.png";   
        const img = new Image();
        img.src = IMAGE_URL; 
        img.addEventListener('load', () => {        
            context.drawImage(img, player.col * 50, player.row * 50, img.width, img.height);        
        });  
    }
    else {
        const IMAGE_URL = "./images/character-left.png";   
        const img = new Image();
        img.src = IMAGE_URL; 
        img.addEventListener('load', () => {    
            context.drawImage(img, player.col * 50, player.row * 50, img.width, img.height);        
        }); 
    }; 
};

const drawTreasure = () => {    
    const IMAGE_URL = './images/treasure.png';
    const image = new Image();
    image.src = IMAGE_URL;    
    image.addEventListener('load', () => {        
        const imageWidth = image.width;
        const imageHeight = image.height;
        treasure.setRandomPosition();
        context.drawImage(image, treasure.col * 50, treasure.row * 50, imageWidth / 5, imageHeight / 5); 
    }); 
};

const drawPoints = () => {
    context.clearRect(0, 500, 500, 100);
    context.font = '20px Verdana';
    context.fillText(`points: ${points}`, 200, 520);
};

function drawEverything() {
    drawGrid();
    drawPlayer();
    if (treasureOnScreen === 0) {
        drawTreasure();
        treasureOnScreen++;
    };    
};

window.addEventListener('keydown', (e) => {
    context.clearRect(player.col * 50, player.row * 50, 50, 50);
    switch (e.keyCode) {       
        case 39:  
            player.direction = "East"; 
            player.moveRight();
            break;
        case 37:
            player.direction = "West";
            player.moveLeft(); 
            break;
        case 38:
            player.direction = "North";
            player.moveUp();
            break;
        case 40:
            player.direction = "South";
            player.moveDown();
            break;
      }
    if (player.row === treasure.row && player.col === treasure.col) { 
        context.clearRect(treasure.col * 50, treasure.row * 50, 50, 50);
        treasureOnScreen--;
        points += 100;
        drawPoints();
        treasure.setRandomPosition();
    }; 
    drawEverything();
});

drawEverything();