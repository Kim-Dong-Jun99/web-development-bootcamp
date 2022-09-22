//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const e = require("express");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extend: true}))

mongoose.connect("mongodb+srv://djkim:rlaehdwns99@cluster0.uxmeckr.mongodb.net/secret");

const userSchema = {
    email:String,
    password:String
}

const User = new mongoose.model("User", userSchema);

app.route("/").get(function (req, res) {
    res.render("home");
});


app.route("/login").get(function (req, res) {
    res.render("login");
}).post(function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({email: username}, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            if (result) {
                console.log(result.password);
                console.log(password);
                if (result.password === password) {
                    res.render(("secrets"))
                }else {
                    res.send("Wrong user");
                }
            }
        }
    });
});
app.route("/register").get(function (req, res) {
    res.render("register");
}).post(function (req, res) {
    const newUser = new User({
        email:req.body.username,
        password:req.body.password
    })
    newUser.save(function (error) {
        if (error) {
            console.log(error);
        } else {
            res.render("secrets")
        }
    });
});
app.listen(3000, function () {
    console.log("server started");
});

