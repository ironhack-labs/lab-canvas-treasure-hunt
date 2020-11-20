// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  for (let i = 0; i < 11; i++) {
    context.beginPath();
    context.moveTo(i * 50, 0);
    context.lineTo(i * 50, 500);
    context.stroke();
    context.beginPath();
    context.moveTo(0, i * 50);
    context.lineTo(500, i * 50);
    context.stroke();
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 50;
  }
  moveDown() {
    this.row += 50;
  }
  moveRight() {
    this.col += 50;
  }
  moveLeft() {
    this.col -= 50;
  }
}

let Steven = new Character(50, 100);

function drawPlayer(playerName) {
  const player = new Image();
  player.src = 'images/character-down.png';

  player.addEventListener('load', () => {
    // Draw only with starting point
    context.drawImage(player, playerName.col, playerName.row);
  });
}

class Treasure {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }
}

const testTreasure = new Treasure(100, 100);

const drawTreasure = (treasureObject) => {
  const treasure = new Image();
  treasure.src = 'images/treasure.png';

  treasure.addEventListener('load', () =>
    context.drawImage(treasure, treasureObject.col, treasureObject.row, 50, 50)
  );
};

function drawEverything() {
  drawGrid();
  drawPlayer(Steven);
  drawTreasure(testTreasure);
}

drawEverything();

function clearCanvas () {
    context.clearRect(0, 0, 500, 500);
  }

window.addEventListener('keydown', function (event) {
  const key = event.key;
  event.preventDefault();
  switch (key) {
    case 'ArrowUp':
      Steven.moveUp();
      break;
    case 'ArrowDown':
      Steven.moveDown();
      break;
    case 'ArrowLeft':
      Steven.moveLeft();
      break;
    case 'ArrowRight':
      Steven.moveRight();
      break;
    default:
      console.log('An unknown key was pressed');
  }
  clearCanvas();
  drawEverything()
  if (Steven.col === testTreasure.col && Steven.row === testTreasure.row) {
      console.log('YOU FOUND THE TREASURE!!!')
  }
});
