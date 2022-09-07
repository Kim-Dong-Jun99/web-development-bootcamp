
// document.querySelector("button").addEventListener("click", handleClick)
//
// function handleClick() {
//     alert("I got clicked");
// }

let buttons = document.querySelectorAll(".drum");
for (const button of buttons) {
    // button.addEventListener("click", function () {
    //     alert("I got clicked");
    // });
    button.addEventListener("click", handleClick);
}
document.addEventListener("keydown", handleKeyStroke);

function handleClick(event) {
    console.log(this);
    console.log(event.type);
    console.log(event);
    // if (this.style.color === "black") {
    //     this.style.color = "#DA0463";
    // }else{
    //
    //     this.style.color = "black";
    // }
    let buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {

        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    }
    buttonAnimation(buttonInnerHtml, this);
}

function handleKeyStroke(event) {
    console.log(event);
    let key = event.key;
    console.log(key);
    // if (this.style.color === "black") {
    //     this.style.color = "#DA0463";
    // }else{
    //
    //     this.style.color = "black";
    // }
    switch (key) {

        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    }
    buttonAnimation(key, document.querySelector("." + key));
}

function buttonAnimation(currentKey, btn) {
    let element = document.querySelector("." + currentKey);
    // element.classList.toggle("pressed");

    element.classList.add("pressed");
    btn.style.color = "black";
    setTimeout(function () {
        element.classList.remove("pressed");
        btn.style.color = "#DA0463";

    }, 100);
}

// function add(num1, num2) {
//     return num1 + num2;
// }
//
// function multiply(num1, num2) {
//     return num1 * num2;
// }
//
// function subtract(num1, num2) {
//     return num1 - num2;
// }
//
// function divide(num1, num2) {
//     return num1 / num2;
// }
//
// function calc(num1, num2, operator) {
//     return operator(num1, num2);
// }
