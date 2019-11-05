// main.js
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
console.log(context);

const playerImage = new Image();
playerImage.src = "./starter-code/images/character-down.png";

const treasureImage = new Image();
treasureImage.src = "./starter-code/images/treasure.png";

function drawGrid() {
	context.strokeStyle = "black";
	context.lineWidth = 2;
	for (let c = 0; c <= 10; c++) {
		for (let r = 0; r <= 10; r++) {
			context.strokeRect(50 * r, 50 * c, 50, 50);
		}
	}
}

class Character {
	constructor(col, row) {
		this.col = col;
		this.row = row;
	}

	moveUp() {
		return (this.col = this.col - 50);
	}

	moveRight() {
		return (this.row = this.row + 50);
	}

	moveDown() {
		return (this.col = this.col + 50);
	}
	moveLeft() {
		return (this.row = this.row - 50);
	}

	drawPlayer() {
		context.drawImage(playerImage, player.col, player.row, 50, 50);
	}
}

const player = new Character(0, 0);

class Treasure {
	constructor(col, row) {
		this.row = row;
		this.col = col;
	}
	drawTreasure() {
		context.drawImage(treasureImage, treasure.col, treasure.row, 50, 50);
	}


}

const treasure = new Treasure(setRandomPosition(), setRandomPosition());

function setRandomPosition() {
	return Math.floor(Math.random() * 9 * 50);
}



function drawEverything() {
	window.addEventListener("load", () => {
		drawGrid();
		player.moveDown();
		player.drawPlayer();
		treasure.drawTreasure();
	});
}

drawEverything();

// function updateEverything() {
// 	drawGrid();
// 	player.moveDown();
// 	drawPlayer();
// 	drawTreasure();
// }

// updateEverything();