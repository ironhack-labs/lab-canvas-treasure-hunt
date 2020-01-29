class Character{
    constructor(col, row){
        this.col = col;
        this.row = row;
        this.direction = 'N';
        this.score = 0;
    }

    moveUp() {
        if(this.row - 1 >= 0){
            this.row--;
            this.direction = 'N';
        }
    }

    moveRight() {
        if(this.col + 1 < 10){
            this.col++;
            this.direction = 'E';
        }
    }

    moveDown() {
        if(this.row + 1 < 10){
            this.row++;
            this.direction = 'S';
        }
    }

    moveLeft() {
        if(this.col - 1 >= 0){
            this.col--;
            this.direction = 'W';
        }
    }

    getCol() {
       return this.col; 
    }

    getRow() {
        return this.row;
    }

    getDirection() {
        return this.direction;
    }

    incScore() {
        this.score++;
    }

    getScore(){
        return this.score;
    }

}


