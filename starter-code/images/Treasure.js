class Treasure{
    constructor(){
        this.col = 0;
        this.row = 0;
    }

    setRandomPosition() {
        let randX = Math.floor(Math.random() * 10), randY = Math.floor(Math.random() * 10);
        this.col = randY;
        this.row = randX;
    }

    getCol() {
        return this.col; 
     }
 
     getRow() {
         return this.row;
     }
 
}