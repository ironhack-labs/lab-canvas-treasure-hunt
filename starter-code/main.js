// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const player = new Character(9, 8);
const treasure = new Treasure();


// Iteration 1

function drawGrid() {
    context.strokeStyle = 'black';
    for (let i = 0; i < 10; i++) {
        context.strokeRect(i * 50, 0, 0, 500);
      }
      context.strokeStyle = 'green';
      for (let j = 0; j < 10; j++) {
        context.strokeRect(0, j * 50, 500, 0);
      } 
}

function drawPlayer (player) {  
    const IMAGE_URL = 'images/character-down.png'
    const image = new Image();
    image.src = IMAGE_URL;
    console.dir(image);
    image.addEventListener('load', () => {
    const imageHeight = image.height;
    const imageWidth = image.width;
    const size = 1;
    context.drawImage(image, player.col*50, player.row*50, imageWidth * size, imageHeight * size);
    });
}

function drawTreasure (treasure) { 
    if(player.col === treasure.col && player.row === treasure.row){ 
    treasure.setRandomPosition();
    const IMAGE_URL = 'images/treasure.png'
    const image = new Image();
    image.src = IMAGE_URL;
    console.dir(image);
    image.addEventListener('load', () => {
    const imageHeight = image.height;
    const imageWidth = image.width;
    const size = 0.2;
    context.drawImage(image, treasure.col*50, treasure.row*50, imageWidth * size, imageHeight * size);
})} else { 
    const IMAGE_URL = 'images/treasure.png'
    const image = new Image();
    image.src = IMAGE_URL;
    console.dir(image);
    image.addEventListener('load', () => {
    const imageHeight = image.height;
    const imageWidth = image.width;
    const size = 0.2;
    context.drawImage(image, treasure.col*50, treasure.row*50, imageWidth * size, imageHeight * size);
})
}
}; 

window.addEventListener('keydown', (event) => {
    event.preventDefault();
    switch (event.keyCode) {
      case 37: 
        player.moveLeft()
        // console.log('left');
        drawEverything();
        break;
      case 38:
        player.moveUp()
        // console.log('up');
        drawEverything();
        break;
      case 39:
        player.moveRight()
        // console.log('right');
        drawEverything();
        break;
      case 40:
        player.moveDown()
        // console.log('down');
        drawEverything();
        break;
    }
  });

function drawEverything() { 
    context.clearRect(0, 0, 500, 500); 
  drawGrid();
  drawPlayer(player);
  drawTreasure(treasure);
}

drawEverything();