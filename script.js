//accessing the canvas
const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

const game = new Game($canvas, context);

game.drawEverything(); //calling draw everything

console.dir($canvas); //access the canvas so you can view the object and properties
console.log(`console log of the context`, $canvas); //just a console.log test to see the difference

//accessing the context
