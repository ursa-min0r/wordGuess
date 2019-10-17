var Word = require("./word");
var inquirer = require("inquirer");
var fs = require("fs");

var alphabet = [
    "a", "b", "c", "d",
    "e", "f", "g", "h",
    "i", "j", "k", "l",
    "m", "n", "o", "p",
    "q", "r", "s", "t",
    "u", "v", "w", "x",
    "y", "z"
];

var wins = 0;

var words;
fs.readFile("words.txt", "utf8", function (error, data) {
    if (error) {
        return console.log(error);

    }
    var string = data.replace(/\r/g, "");
    words = string.split("\n");
    game();
});

function game() {
console.log();
}
