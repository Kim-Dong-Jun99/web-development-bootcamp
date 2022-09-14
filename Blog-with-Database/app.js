//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent = "This is blog home page!";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://djkim:rlaehdwns99@cluster0.uxmeckr.mongodb.net/blog");

const postSchema = {
  title:String,
  content:String
}

const Post = mongoose.model("Post",postSchema);



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req, res){
  Post.find({}, function(err, results){
    if (err) {
      console.log(err);
    } else {
      posts = results

      res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
      });
    }
  })



});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  //  const post = {
  //    title: req.body.postTitle,
  //    content: req.body.postBody
  //  };
  //
  //  posts.push(post);
  //
  
  const newPost = new Post({
    title:req.body.postTitle,
    content:req.body.postBody
  });
  
  newPost.save(function(err){
    if (!err) {
      console.log("post successfully created");
    }
  });



  res.redirect("/");

});

app.get("/posts/:id", function(req, res){

  //  posts.forEach(function(post){
  //    const storedTitle = _.lowerCase(post.title);
  //
  //    if (storedTitle === requestedTitle) {
  //      res.render("post", {
  //        title: post.title,
  //        content: post.content
  //      });
  //    }
  //  });

  //  Post.findOne({title:requestedTitle}, function(err, result){
  //    if (err) {
  //      console.log(err);
  //    } else {
  //      res.render("post",{
  //        title:result.title,
  //        content:result.content
  //      })
  //      console.log("post found")
  //    }
  //  })
  
  Post.findById(req.params.id, function(err, result){
    if(err) {
      console.log(err);
    } else {
      res.render("post",{
        title:result.title,
        content:result.content
      })
      console.log("post found")
    }
  })
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
