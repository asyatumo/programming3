var express = require("express")
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var random = require("./random")

app.use(express.static("../programming3"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("App is running on port 3000");
});

var Bomb = require("./Bomb")
var Gras = require("./class")
var grasEater = require("./grassEater")
var Hunter = require("./Hunter")
var Predator = require("./Predator")