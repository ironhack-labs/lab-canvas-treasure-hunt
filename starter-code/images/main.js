// main.js

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const playerOne = new Character(0,0), playerTwo = new Character(5,5), treasure = new Treasure();

// Iteration 1
function drawGrid() {
  let x = width/10, y = height/10;
  context.fillStyle = 'black';

  for(let i = 0; i < 10; i++)
    for(let j = 0; j < 10; j++)
        context.strokeRect(i*x, j*y, x, y);

}

function imageUrlDir(direction) {
    let url = '';
    switch(direction){
        case 'N':
            url = "/images/character-up.png";
            break;
        case 'S':
            url = "/images/character-down.png";
            break;
        case 'E':
            url = "/images/character-right.png";
            break;
        case 'W':
            url = "/images/character-left.png";
            break;
    }
    return url;
} 

function drawPlayer(player) {
    const imageUrl = imageUrlDir(player.getDirection()), image = new Image();
    image.src = imageUrl;

    image.addEventListener('load', () => context.drawImage(image, player.getCol() * 50, player.getRow() * 50));
}

function drawTreasure(player, player2, treasure) {
    const imageUrl = "/images/treasure.png", image = new Image(), $nodeScore1 = document.querySelector('#score1'),
    $nodeScore2 = document.querySelector('#score2');
    image.src = imageUrl;

    if(player.getCol() === treasure.getCol() && player.getRow() === treasure.getRow()) {
        treasure.setRandomPosition();
        player.incScore();
        let score = player.getScore();
        $nodeScore1.innerHTML = '';
        $nodeScore1.innerHTML = score;
    }

    if(player2.getCol() === treasure.getCol() && player2.getRow() === treasure.getRow()) {
        treasure.setRandomPosition();
        player2.incScore();
        let score = player2.getScore();
        $nodeScore2.innerHTML = '';
        $nodeScore2.innerHTML = score;
    }

    image.addEventListener('load', () => context.drawImage(image, treasure.getCol() * 50, treasure.getRow() * 50, 50, 50));
}

function drawEverything(player, player2, treasure) {
  drawGrid();
  drawPlayer(player);
  drawPlayer(player2);
  drawTreasure(player, player2,treasure)
}

drawEverything(playerOne, playerTwo, treasure);

window.addEventListener('keydown', (event) => {
    let whichP = 1;
    event.preventDefault();

    switch (event.keyCode) {
      case 37:
        playerOne.moveLeft();
        break;
      case 38:
        playerOne.moveUp();
        break;
      case 39:
        playerOne.moveRight();
        break;
      case 40:
        playerOne.moveDown();
        break;
      case 65:
        playerTwo.moveLeft();
        break;
      case 87:
        playerTwo.moveUp();
        break;
      case 68:
        playerTwo.moveRight();
        break;
      case 83:
        playerTwo.moveDown();
        break;
    }
    context.clearRect(0, 0, 500, 500);
    drawEverything(playerOne, playerTwo, treasure);
  });

