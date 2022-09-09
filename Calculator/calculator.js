const express = require("express");
const app = express();

app.get("/", function(req, res){
	res.send("<h1>HelloWorld</h1>");
});

app.listen(3000, function(){
	console.log("server started in 3000");
});