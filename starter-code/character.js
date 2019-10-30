class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    } 
    moveUp(){  
         this.row -= 1;
    }

    moveRight(){
        this.col += 1;
    }

    moveDown(){
         this.row += 1;
    }

    moveLeft(){
         this.col -=1; 
    }
}




