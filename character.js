class Character {
    constructor (col, row, canvas, context, basePixel) {
    this.col = col*basePixel;
    this.row = row*basePixel;
    this.canvas = canvas;
    this.context = context;
    this.basePixel = basePixel;  
    
    this.image = new Image();
    this.image.src = 'images/character-down.png';
      
    }
    
    drawPlayer () {
        this.image.addEventListener('load', () => {
            this.context.drawImage(this.image, this.col, this.row);
        });
        this.context.drawImage(this.image, this.col, this.row);
    }

    moveDown () {
        this.row = this.row + basePixel;

    }
    
    moveUp () {
        this.row = this.row - basePixel;

    }

    moveLeft () {
        this.col = this.col - basePixel;
    }

    moveRight () {
        this.col = this.col + basePixel;

    }      
    

} 
  



            

