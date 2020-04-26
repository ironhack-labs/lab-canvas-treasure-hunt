// main.js
const $canvas = document.querySelector('canvas'); // $ -> para saber que este canvas representa uma variável do HTML e não do JS.
// para dizer ao js qual é o canvas que chamo quando lhe quero mexer

const context = $canvas.getContext('2d');
// método que retorna um objecto que me dá os métodos e propriedades para desenhar no canvas

const width = $canvas.width;
const height = $canvas.height;

// Iteration 1
function drawGrid() {
  context.beginPath();
  for (let row = 0; row <= 10; row++) {
    //linhas verticais
    context.moveTo(0, row * 50);
    context.lineTo(500, row * 50);
    context.stroke();
    //linhas horizontais
    context.moveTo(row * 50, 0);
    context.lineTo(row * 50, 500);
    context.stroke();
  }
  context.closePath();
}

player = new Character(0, 0);

treasure = new Treasure();

function drawEverything() {
  drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
}

drawEverything();

// Jogo começa aqui
window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down) = impede a janela de andar
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();

      console.log('left');
      break;
    case 38:
      player.moveUp();
      console.log('up');
      break;
    case 39:
      player.moveRight();
      console.log('right');
      break;
    case 40:
      player.moveDown();
      console.log('down');
      break;
  }

  if (player.row == treasure.row && player.col == treasure.col) {
    treasure.setRandomPosition();
  }

  context.clearRect(0, 0, 500, 500);
  drawEverything();
});
