class Treasure {
    
    constructor (col, row, canvas, context, basePixel) {
        this.col = col;
        this.row = row;
        this.canvas = canvas;
        this.context = context
        this.basePixel = basePixel
        
        this.image = new Image();
        this.image.src = 'images/treasure.png';
      
    }

    setRandomPosition() {
        this.col = Math.floor(Math.random()*10)*basePixel;
        this.row = Math.floor(Math.random()*10)*basePixel;
    }
    
    drawTreasure (col, row) {
        this.image.addEventListener('load', ()=>{
            this.context.drawImage(this.image, col, row, basePixel, basePixel);
        })
        this.context.drawImage(this.image, col, row, basePixel, basePixel);
    }; 
}