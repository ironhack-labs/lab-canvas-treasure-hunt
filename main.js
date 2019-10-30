// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1

function drawGrid() {
    context.lineWidth = 1;
    context.strokeStyle = 'grey';
    for (let i = 0; i < 10; i++) {
        context.strokeRect(i * 50, 0, 50, 500);
        context.strokeRect(0, i * 50, 500, 50);
    }
 }


function randomPos () {
    return Math.floor(Math.random() *10 * 50);
}

console.log(randomPos())

 class Treasure {
    constructor (col, row, image){
    this.col = col;
    this.row= row;
    this.image = new Image();
    this.image.src = `starter-code/images/treasure.png`;
}
}
 
 class Character {
    constructor(col, row, image) {
      this.col = col;
      this.row = row;
      this.image = new Image();
      this.image.src = `starter-code/images/character-down.png`;
    }

moveUp() {
    this.row --
}

moveRight() {
this.col ++
}

moveDown() {
    this.row ++
}

moveLeft() {
    this.col --
}
}


const player = new Character(0,0)

// test
/* player.moveRight()
console.log(player.col, player.row) */

function drawPlayer() {
   player.image.addEventListener('load', () => {
    context.drawImage(player.image, 0, 0);
      });
} 


const treasure = new Treasure (randomPos(), randomPos())

function drawTreasure (){
    treasure.image.addEventListener('load', () => {
        const imageHeight = treasure.image.height;
        const imageWidth = treasure.image.width;
      
        const size = 0.5;
      
         context.drawImage( treasure.image, treasure.col, treasure.row, 50, 50);
      });
}

function drawEverything() {
    
    context.clearRect(0, 0, 500, 500)
    drawGrid();
    drawPlayer();
    drawTreasure()
 
}

drawEverything();


window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    // React based on the key pressed
    switch (event.keyCode) {
        case 37:
            player.moveLeft();
            console.log('left');
            drawEverything();
            break;
        case 38:
            player.moveUp();
            console.log('up');
            drawEverything();
            break;
        case 39:
            player.moveRight();
            console.log('right');
            drawEverything();
            break;
        case 40:
            player.moveDown();
            console.log('down');
            drawEverything();
            break;
    }
});
