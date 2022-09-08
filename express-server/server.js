const express = require("express");
const app = express();

app.get("/",function(request, response){
	// console.log(request);
	response.send("<h1>Hello</h1>");
});

app.listen(3000, function (){
	console.log("server started in 3000");

}); // 특정 포트에 리슨을 하겠다는 의미이다. 
