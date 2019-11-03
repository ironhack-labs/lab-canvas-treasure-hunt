// main.js
//const canvas = document.querySelector('canvas');
const canvas = document.getElementById('game');
const scores = document.getElementById('scoreBoard')
const context = canvas.getContext('2d');
const context2 = scores.getContext('2d');
const width = canvas.width;
const height = canvas.height;

class Character {
    constructor(x, y) {
        this.row = x;
        this.col = y;
        this.points = 0;
    }
    moveUp() {
        if(this.col > 0){
            this.col--
        }
    }
    moveDown() {
        if (this.col < 9) {
            this.col++
        }
    }
    
    moveLeft() {
        if (this.row > 0) {
            this.row--
        }        
    }

    moveRight() {
        if (this.row < 9) {
            this.row++
        } 
    }
    
    drawPlayer() {
        const IMAGE_URL = "./images/character-down.png";
        // let x = Math.floor((Math.random() * 10));
        // let y = Math.floor((Math.random() * 10));

        const image = new Image();
        image.src = IMAGE_URL;
        context.drawImage(image, this.row * 50, this.col * 50, 45, 45);
    
        image.addEventListener('load', () => {
            context.drawImage(image, this.row * 50, this.col * 50, 45, 45);
            //console.log(player)
        });
    
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
let player2 = new Character(9,0);
console.log(player)
console.log(player2)

/* window.onload = function () {
    document.getElementById("player2").onclick = function () {
        
        player2 = new Character(9, 9);

    };

}; */


const treasure = new Treasure();
treasure.setRandomPosition();

function drawTreasure() {
    const IMAGE_URL = "./images/treasure.png";
    const image = new Image();
    image.src = IMAGE_URL;
    context.drawImage(image, treasure.row * 50, treasure.col * 50, 45, 45);
    
    image.addEventListener('load', () => {
        console.log(treasure)
        context.drawImage(image, treasure.row * 50, treasure.col * 50, 45, 45);
        

    });


}

function scoreBoard(){
    context2.clearRect(0,0,width,height)
    context2.font = "bold  40px Arial"
    context2.fillText("Player One:", 40,50)
    context2.fillText(player.points, 40,90)
    context2.fillText("Player Two:", 40,200)
    context2.fillText(player2.points, 40,240)

}



function drawEverything() {
    scoreBoard();



    context.clearRect(0, 0, 500, 500);
    drawGrid();
    player2.drawPlayer()
    player.drawPlayer()
    drawTreasure()
    if (player.col === treasure.col && player.row === treasure.row) {
        player.points += 10
        treasure.setRandomPosition()
        drawEverything()
    } else if (player2.col === treasure.col && player2.row === treasure.row){
        player2.points += 10
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
        case 65:
            player2.moveLeft();
            drawEverything();
            break;
        case 87:
            player2.moveUp();
            drawEverything();
            break;
        case 68:
            player2.moveRight();
            drawEverything();
            break;
        case 83:
            player2.moveDown();
            drawEverything();
            break;
    }

});
