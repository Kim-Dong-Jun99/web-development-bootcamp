var tweet = prompt("Enter tweet");
var tweetCount = tweet.length;
alert("tweetcount = "+tweetCount);
tweet = tweet.slice(0,1).toUpperCase()+tweet.slice(1, tweet.length).toLowerCase();

alert("string manipulate = "+tweet);

function isLeap(year) {

    /**************Don't change the code above****************/

    //Write your code here.
    if (year % 400 === 0) {
        return "Leap year."
    } else if((year % 100 !== 0) && (year % 4 === 0)){
        return"Leap year.";
    } else{
        return "Not leap year.";
    }



    /**************Don't change the code below****************/

}

function bmiCalculator (weight, height) {
    var interpretation = "";
    var bmi = weight/(height*height);
    if (bmi < 18.5) {
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
    } else if(18.5 <= bmi && bmi  < 24.9){
        interpretation = "Your BMI is "+bmi+", so you have a normal weight.";

    }else{
        interpretation = "Your BMI is "+bmi+", so you are overweight.";
    }
    return interpretation;
}

function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:
    var result = [];
    for (var i = 0; i < n; i ++){
        if(i === 0){
            result.push(0);
        }else if (i===1){
            result.push(1);
        }else{
            result.push(result[result.length-2]+result[result.length-1]);
        }
    }

    return result;





    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}

