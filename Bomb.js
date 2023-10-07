class Bomb {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x + 1 , this.y - 1],
            [this.x + 2, this.y],
            [this.x - 2, this.y+1],
            [this.x + 2, this.y -1],
            [this.x - 3, this.y],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],

        ];
    }

    ddxk() {
        this.getNewCoordinates();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                matrix[y][x] = 0;
                matrix[this.y][this.x] = 0;
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                        
                    }
                }
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                        
                    }
                }
                for (var i in predatorArr) {
                    if (x == predatorArr[i].x && y == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                        
                    }
                }
                for (var i in hunterArr) {
                    if (x == hunterArr[i].x && y == hunterArr[i].y) {
                        hunterArr.splice(i, 1);
                        break;
                        
                    }
                }
                for (var i in bombArr) {
                    if (x == bombArr[i].x && y == bombArr[i].y) {
                        bombArr.splice(i, 1);
                        break;
                        
                    }
                }
            }
            
        }
    }

}