// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  context.strokeStyle = 'black';
  context.lineWidth = 1;

  context.strokeRect(0, 0, 500, 500);
  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      context.strokeRect(j, i, 50, 50);
    }
  }
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

//Iteration 3 - Drawing the player
const player = new Character(0, 0);

function drawPlayer() {
  const playerImageUrl = './images/character-down.png';
  const playerImage = new Image();
  playerImage.src = playerImageUrl;
  playerImage.addEventListener('load', () => {
    context.drawImage(playerImage, player.row * 50, player.col * 50, 50, 50);
  });
}

drawEverything();

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      player.moveLeft();
      drawEverything();

      console.log(player);
      break;
    case 38:
      console.log('up');
      player.moveUp();
      drawEverything();

      console.log(player);

      break;
    case 39:
      console.log('right');
      player.moveRight();
      drawEverything();

      console.log(player);

      break;
    case 40:
      console.log('down');
      player.moveDown();
      drawEverything();

      console.log(player);

      break;
  }
});

const treasure = new Treasure();
treasure.setRandomPosition();

function drawTreasure() {
  const treasureImageUrl = './images/treasure.png';
  const treasureImage = new Image();
  treasureImage.src = treasureImageUrl;
  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, treasure.row * 50, treasure.col * 50, 50, 50);
  });
}
