const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', ejs);

mongoose.connect("mongodb+srv://djkim:rlaehdwns99@cluster0.uxmeckr.mongodb.net/rest");

const articleSchema = {
  title:String,
  content:String
}

const Article = mongoose.model("Article", articleSchema);



app.get("/", function(req, res){
  res.send("server started")
});


app.listen(3000, function(){
  console.log("server started in 3000");
})
