var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random() * 6);
const dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
document.querySelectorAll(".dice img").item(0).setAttribute("src", "images/" + dices[randomNumber1]);
document.querySelectorAll(".dice img").item(1).setAttribute("src", "images/" + dices[randomNumber2]);
