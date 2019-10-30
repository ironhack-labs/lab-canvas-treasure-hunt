class Treasure {
    constructor() {
      this.col = 0;
      this.row = 0;
    }

    setRandomPosition(){ 
        this.col = Math.floor(Math.random()*10)
        this.row = Math.floor(Math.random()*10)
    }
}

