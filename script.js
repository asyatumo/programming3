socket = io();
var grassCl = "green"
var n = 30;
var m = 30;
var side = 20;
let springBtn = document.getElementById("spr")
let winterBtn = document.getElementById("wnt")
let autumnBtn = document.getElementById("otm")
let summerBtn = document.getElementById("smr")

springBtn.addEventListener("click", changeColor)
winterBtn.addEventListener("click", changeColor)
autumnBtn.addEventListener("click", changeColor)
summerBtn.addEventListener("click", changeColor)


function changeColor(evt) {
    evt.preventDefault()
    if(evt.target.innerText.toLowerCase() === "spring"){
        grassCl = "#005e0d"   
    }
    else if (evt.target.innerText.toLowerCase() === "winter") {
        grassCl = "#c2fffb"
    }
    else if (evt.target.innerText.toLowerCase() === "autumn") {
        grassCl = "#f29616"
    }
    else if (evt.target.innerText.toLowerCase() === "summer") {
        grassCl = "#13f031"
    }
}

function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

function drawGame(matrix) {
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix.length; x++) {
            if(matrix[y][x] === 0) {
                fill("#acacac");
            } else if(matrix[y][x] === 1) {
                fill(grassCl);
            } else if(matrix[y][x] === 2) {
                fill("yellow");
            } else if(matrix[y][x] === 3) {
                fill("red");
            } else if(matrix[y][x] === 4) {
                fill("orange");
            } else if(matrix[y][x] === 5) {
                fill("black");
            } else if(matrix[y][x] === 6) {
                fill("#6e0505");
            }
            
            rect(x * side, y * side, side, side)
        }
    }
}

socket.on("matrix", drawGame)
var grasses = document.getElementById("grassNum")
var grassEaters = document.getElementById("grassEaterNum")
var hunters = document.getElementById("hunterNum")
var predators = document.getElementById ("predatorNum")

socket.on("grassCount", (grassCount) => {
    grasses.innerText = grassCount
})
socket.on("grassEaterCount", (grassEaterCount) => {
    grassEaters.innerText = grassEaterCount
})
socket.on("hunterCount", (hunterCount) => {
    hunters.innerText = hunterCount
})
socket.on("predatorCount", (predatorCount) => {
   predators.innerText = predatorCount
})