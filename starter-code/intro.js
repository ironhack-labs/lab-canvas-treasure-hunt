// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Class character
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    return (this.row -= 1);
  }

  moveRight() {
    return (this.col += 1);
  }

  moveDown() {
    return (this.row += 1);
  }

  moveLeft() {
    return (this.col -= 1);
  }
}

const player = new Character(5, 5); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2

//class treasure
class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRamdomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}

const treasure = new Treasure(5, 3); // (0,0) = Initial position

// Iteration 1
function drawGrid() {
  for (let i = 0; i <= 10; i++) {
    context.fillStyle = 'black';
    context.strokeRect(50 * i, 0, 1, height);
  }
  for (let i = 0; i <= 10; i++) {
    context.fillStyle = 'black';
    context.strokeRect(0, 50 * i, width, 1);
  }
}

function drawEverything() {
  context.clearRect(0, 0, width, height);

  drawGrid();
  drawPlayer();
  drawTreasure();
}

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      drawEverything();
      console.log('left');
      break;
    case 38:
      player.moveUp();
      drawEverything();
      console.log('up');
      break;
    case 39:
      player.moveRight();
      drawEverything();
      console.log('right');
      break;
    case 40:
      player.moveDown();
      drawEverything();
      console.log('down');
      break;
  }
});

drawEverything();

function drawPlayer() {
  const image = new Image();
  const imageUrl = './images/character-down.png';
  image.src = imageUrl;
  image.addEventListener('load', () => {
    context.drawImage(image, player.col * 50, player.row * 50, 50, 50);
  });
}

drawPlayer();

//draw treasure
function drawTreasure() {
  const imageTres = new Image();
  const imageUrl = './images/treasure.png';
  imageTres.src = imageUrl;
  imageTres.addEventListener('load', () => {
    context.drawImage(imageTres, treasure.col * 50, treasure.row * 50, 50, 50);
  });
}
drawTreasure();
