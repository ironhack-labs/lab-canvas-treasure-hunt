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
        this.col = Math.floor(Math.random()*10);
        this.row = Math.floor(Math.random()*10);
    }
    
    drawTreasure () {
        this.image.addEventListener('load', ()=>{
            this.context.drawImage(this.image, this.col, this.row, basePixel, basePixel);
        })
        this.context.drawImage(this.image, this.col, this.row, basePixel, basePixel);
    }; 
}