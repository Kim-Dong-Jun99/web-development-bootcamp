//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extend: true}))

mongoose.connect(process.env.DB);

const userSchema = new mongoose.Schema( {
    email:String,
    password:String
})

const User = new mongoose.model("User", userSchema);


app.route("/").get(function (req, res) {
    res.render("home");
});


app.route("/login").get(function (req, res) {
    res.render("login");
}).post(function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({email: username}, function (error, foundUser) {
        if (error) {
            console.log(error);
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    res.render("secrets");
                });
            }
        }
    });
});
app.route("/register").get(function (req, res) {
    res.render("register");
}).post(function (req, res) {
    bcrypt.hash(req.body.password, saltrounds, function (err, hash) {
        const newUser = new User({
            email:req.body.username,
            password: hash})
        newUser.save(function (error) {
            if (error) {
                console.log(error);
            } else {
                res.render("secrets")
            }
        });
    });
});
app.listen(3000, function () {
    console.log("server started");
});
