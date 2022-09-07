// $("h1").on("click", function (e) {
//     console.log(e);
// })
let buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    level += 1;
    userClickedPattern = [];
    $("h1").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").on("click", handler);

function handler(event) {
    let userChosenColor = event.target.id;

    console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);

    // $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
}

function playSound(name) {
    let colorSound = new Audio("sounds/" +name+".mp3");
    colorSound.play();
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("true");
    } else {
        console.log("wrong");
        let audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    if (currentLevel === level - 1) {
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}