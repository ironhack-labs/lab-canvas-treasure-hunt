// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

class Character {
    constructor(col, row){
        this.col = col;
        this.row = row;
    }
    moveUp(){
        this.row--;
    }
    moveRight(){
        this.col++;
    }
    moveDown(){
        this.row++;
    }
    moveLeft(){
        this.col--;
    }
}

class Treasure {
    constructor(col,row){
        this.col = col;
        this.row = row;
    }
    setRandomPosition(){
        this.col = Math.floor(Math.random()*10);
        this.row = Math.floor(Math.random()*10);
    }
}


const player = new Character(0, 0);
// console.log(player.col, player.row);
const treasure = new Treasure(3, 3);

// Iteration 1
function drawGrid() {
  for (i=0;i<10;i++){
    context.strokeRect(i*width/10,0,width/10,height);
    context.strokeRect(0,i*width/10,width,height/10);
  }
}


function drawPlayer(){
    const IMAGE_URL = './images/character-down.png';
    const image = new Image();
    image.src = IMAGE_URL;
    // console.dir(image);
    image.addEventListener('load', () => {
        const imageHeight = image.height;
        // console.log("Height", imageHeight);
        const imageWidth = image.width;
        // console.log("Width", imageWidth);
        context.drawImage(image, player.col*50+50, player.row*50+50, 50, 50);
    });
}

function drawTreasure(){
    const IMAGE_URL = './images/treasure.png';
    const image = new Image();
    image.src = IMAGE_URL;
    // console.dir(image);
    image.addEventListener('load', () => {
        const imageHeight = image.height;
        // console.log("Height", imageHeight);
        const imageWidth = image.width;
        // console.log("Width", imageWidth);
        context.drawImage(image, treasure.col*50+50, treasure.row*50+50, 50, 50);
    });
}

function drawEverything() {
    drawGrid();
    drawPlayer();
    drawTreasure()
}

drawEverything();