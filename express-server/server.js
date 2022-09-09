const express = require("express");
const app = express();

app.get("/",function(request, response){
	// console.log(request);
	response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req,res){
  res.send("contact me at djkim@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is djkim and I am software dept student.");
});

app.listen(3000, function (){
	console.log("server started in 3000");

}); // 특정 포트에 리슨을 하겠다는 의미이다. 


app.get("/hobbies", function(req, res){
  res.send("My hobby is coding"); // test comment
});
