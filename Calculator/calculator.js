const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true})); // html form 데이터를 처리할때 쓰인다, extended:true까지 써줘야한다

app.get("/", function(req, res){
	// res.send("<h1>HelloWorld</h1>");
	res.sendFile(__dirname+"/index.html"); // 현재 파일 경로를 __dirname으로 가져온다, sendFile로 파일을 보낼 수 있다.
	console.log(__dirname);
});

app.post("/", function (req, res) {
	res.send("answer = " + (parseInt(req.body.num1)+ parseInt(req.body.num2))); // post에 대한 간단한 응답, 그리고 num1, num2가 스트링 값으로 넘겨지기에, Int로 바꿔줘야한다.
	console.log(req.body);


});

app.get("/bmicalculator", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
	res.send("Your Bmi is = "+(parseFloat(req.body.weight)) / (parseFloat(req.body.height) * parseFloat(req.body.height)));
});


app.listen(3000, function(){
	console.log("server started in 3000");
});
