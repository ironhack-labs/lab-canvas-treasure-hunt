//class of the grid
class Grid {
  constructor(game) {
    this.w = game.$canvas.width;
    this.h = game.$canvas.height;
    this.$canvas = game.$canvas;
    this.context = game.context;
  }

  drawGrid() {
    //loop para dibujar el canvas
    // x (horizontal)
    context.beginPath(); //el inicio de pintar
    for (let x = 0; x <= this.w; x += 50) {
      //avanza 50px en c/iteration pq c/celda es de 50px
      context.strokeStyle = 'black';
      context.lineWidth = 1;
      context.moveTo(x, 0);
      context.lineTo(x, this.h); //moviendo el eje x hacia abajo
      context.stroke();

      // y (vertical)
      for (let y = 0; y <= this.h; y += 50) {
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.moveTo(0, y);
        context.lineTo(this.w, y);
        context.stroke();

        context.closePath(); // no need to close the path in this case because the loop will go only until it reaches 10 celdas of 50px each --> 500 h and w
      }
    }
  }
}
