document.querySelector("button").addEventListener("click", function () {

    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);
    const dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    document.querySelectorAll(".dice img").item(0).setAttribute("src", "images/" + dices[randomNumber1]);
    document.querySelectorAll(".dice img").item(1).setAttribute("src", "images/" + dices[randomNumber2]);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="해선이 승리!!!🥳";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML="동준승 ㅎㅎ";
    } else{
        document.querySelector("h1").innerHTML="비겼다!!"
    }
})