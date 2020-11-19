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

function drawEverything() {
  drawGrid();
  //drawPlayer();
  //drawTreasure();
}

drawEverything();

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveRight() {
    this.col += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
}

//let Steven = new Character(50, 100);

const drawPlayer = (playerName) => {
  const player = new Image();
  player.src = 'images/character-down.png';

  player.addEventListener('load', () => {
    // Draw only with starting point
    context.drawImage(player, playerName.col, playerName.row);
  });
};

//drawPlayer(Steven);

class Treasure {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }
}

//const testTreasure = new Treasure(50, 100);

const drawTreasure = (treasureObject) => {
  const treasure = new Image();
  treasure.src = 'images/treasure.png';

  treasure.addEventListener('load', () =>
    context.drawImage(treasure, treasureObject.col, treasureObject.row, 50, 50)
  );
};

//drawTreasure(testTreasure);

window.addEventListener('keydown', function (event) {
  const key = event.key;
  switch (key) {
    case 'ArrowUp':
      console.log('up');
      break;
    case 'ArrowDown':
      startingY += 10;
      break;
    case 'ArrowLeft':
      startingX -= 10;
      break;
    case 'ArrowRight':
      startingX += 10;
      break;
    default:
      console.log('An unknown key was pressed');
  }
  //clearCanvas();
  //draw smth
});
