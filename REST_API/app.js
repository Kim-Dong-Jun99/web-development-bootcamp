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

app.route("/articles").get(function (req, res) {
  Article.find({}, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.send(result);
        }
      }
      )
}).post(function (req, res) {
  const newArticle = new Article({
    title:req.body.title,
    content:req.body.content
  })
  newArticle.save()
  res.redirect("/articles")
}).delete(function (req, res) {
  Article.deleteMany({}, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("delete success");
    }
  });
}
);

app.route("/articles/:title").get(function (req, res) {
  Article.findOne({title: req.params.title}, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.send(result);
    }
  });
}).put(function (req, res) {

  Article.updateOne({title: req.params.title}, {
    title: req.body.title,
    content: req.body.content
  }, {overwrite: true}, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result)
      res.send(result)
    }
  });
}).patch(function (req, res) {
  Article.updateOne({title: req.params.title}, {$set: req.body}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("update done")
    }
  });
}).delete(function (req, res) {
  Article.deleteOne({title: req.params.title}, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("delete done");
    }
  });
});

app.get("/", function(req, res){
  res.send("server started")
});


app.listen(3000, function(){
  console.log("server started in 3000");
})
