// var express = require("express");

// var app = express();

// app.use(express.static("/Users/user/Desktop/programming3"));

// app.get("/", function(req, res){

// res.redirect("index.html");

// });

// app.listen(3000, function(){

// console.log("Example is running on port 3000");

// });
var fs = require('fs');
var dummyText = "Apple yep";

function main() {
    fs.writeFileSync("dummytext.txt", dummyText);
    var text = fs.readFileSync("dummytext.txt").toString();
    console.log(dummyText == text);
    console.log(text);
    fs.writeFileSync("undummytext.txt",
        text.replace("Apple", "Microsoft")
    );
}
main();