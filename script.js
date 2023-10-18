socket = io();

var matrix = [];
var side = 40;
var n = 20;
var m = 20;

for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}
function characters(index, count) {
    for (let a = 0; a < count; a++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index
    }
}


var side = 120;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var hunterArr = [];
var bombArr = [];


function setup() {
    characters(1, 30)
    characters(2, 10)
    characters(3, 5)
    characters(4, 6)
    characters(5, 3)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y, this.index);
                grassEaterArr.push(gr);

            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, this.index);
                predatorArr.push(pre);

            }
            else if (matrix[y][x] == 4) {
                var hnt = new Hunter(x, y, this.index);
                hunterArr.push(hnt);

            }
            else if (matrix[y][x] == 5) {
                var bmb = new Bomb(x, y, this.index);
                bombArr.push(bmb);

            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }



            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in hunterArr) {
        hunterArr[i].eat();
    }
    setInterval(() => {
        for (var i in bombArr) {
            bombArr[i].ddxk();
        }
    }, 20000)

}
socket.on("matrix",function(){
    draw(matrix)
});