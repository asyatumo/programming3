var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("../programming3-master"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("App is running on port 3000");
});


var Bomb = require("./Bomb")
var Grass = require("./class")
var GrassEater = require("./grassEater")
var Hunter = require("./Hunter")
var Predator = require("./Predator")
var Fire = require("./Fire")
var random = require("./random")

matrix = [];
grassArr = [];
grassEaterArr = [];
predatorArr = [];
hunterArr = [];
bombArr = [];
fireArr = [];
var n = 30;
var m = 30;


// let btn = document.getElementById("btn")
// btn.addEventListener("click",changecolor)
// function changecolor(event){
//     btn.src = event.target.src
// }




for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}

function createGame() {
    function characters(index, count) {
        for (let a = 0; a < count; a++) {
            var v = Math.floor(random(n))
            var w = Math.floor(random(m))
            matrix[v][w] = index
        }
    }
    characters(1, 200)
    characters(2, 100)
    characters(3, 50)
    characters(4, 30)
    characters(5, 20)
    characters(6, 20)

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] === 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] === 2) {
                var grEat = new GrassEater(x, y, this.index);
                grassEaterArr.push(grEat);
            }
            else if (matrix[y][x] === 3) {
                var pre = new Predator(x, y, this.index);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] === 4) {
                var hnt = new Hunter(x, y, this.index);
                hunterArr.push(hnt);
            }
            else if (matrix[y][x] === 5) {
                var bmb = new Bomb(x, y, this.index);
                bombArr.push(bmb);
            }
            else if (matrix[y][x] === 6) {
                var fire = new Fire(x, y, this.index);
                fireArr.push(fire);
            }
        }
    }
}

function drawGame() {
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
    }, 1000)
    io.emit("matrix", matrix)
    io.emit("grassCount", grassArr.length)
    io.emit("grassEaterCount", grassEaterArr.length)
    io.emit("predatorCount", predatorArr.length)
    io.emit("hunterCount", hunterArr.length)
}

let intervalID;
createGame()

function startGame() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        drawGame()
    }, 100);
}

io.on('connection', function(socket) {
    socket.emit('matrix', matrix)
    startGame()
})

