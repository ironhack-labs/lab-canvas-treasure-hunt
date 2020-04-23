class Background {
    constructor(canvas, context, basePixel) {
      this.canvas = canvas;
      this.context = context
      this.basePixel = basePixel
    }

    drawGrid() {
        this.context.lineWidth = 1;
        this.context.strokeStyle = 'black';
      
        //drawSquare
          this.context.beginPath();
          this.context.moveTo(0, 0);
          this.context.lineTo(this.basePixel*10, 0);
          this.context.lineTo(this.basePixel*10, this.basePixel*10);
          this.context.lineTo(0, this.basePixel*10);
          this.context.lineTo(0, 0);
          this.context.stroke();
          this.context.closePath();
        
        // Draw vertical Lines
        for (let row = 0; row < 10; row++) {
          this.context.beginPath();
          this.context.moveTo(this.basePixel*row, 0);
          this.context.lineTo(this.basePixel*row, this.basePixel*10);
          this.context.stroke();
          this.context.closePath();
      }
      
        // Draw horizontal Lines
        for (let column = 0; column < 10; column++) {
          this.context.beginPath();
          this.context.moveTo(0, this.basePixel*column);
          this.context.lineTo(this.basePixel*10, this.basePixel*column);
          this.context.stroke();
          this.context.closePath();
        }
      }

      clearCanvas () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
  }

