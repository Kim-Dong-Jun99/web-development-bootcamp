//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
// const md5 = require("md5");
// const bcrypt = require("bcrypt");
// const saltrounds = 10;

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));
// 먼저 앱에게 session을 사용하라고 하고, 초기 세팅을 해준다,

app.use(passport.initialize()); // 그다음 passport를 시작하고,
app.use(passport.session()); // passport가 세션을 사용할 것이라고 앱에게 알려준다

mongoose.connect(process.env.DB);

const userSchema = new mongoose.Schema( {
    username:String,
    password:String,
    secret:String
})

userSchema.plugin(passportLocalMongoose); // passportlocalmongoose로 해쉬, 솔트하고, 디비에 저장되게하는데 도움을 받는다

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.route("/").get(function (req, res) {
    res.render("home");
});


app.route("/login").get(function (req, res) {
    res.render("login");
}).post(function (req, res) {
    const user = new User({
        username:req.body.username,
        password:req.body.password
    });
    // use passport to login and authenticate
    req.login(user, function(error){
        if (error) {
            console.log(error);
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            })
        }
    })
    
});

app.route("/logout").get(function(req, res){
    req.logout(function(error){
        if (error) {
            console.log(error);
        } else {
            res.redirect("/");

        }
    });
});

app.route("/register").get(function (req, res) {
    res.render("register");
}).post(function (req, res) {
    User.register({username:req.body.username}, req.body.password, function(error, newUser){
        if (error) {
            console.log(error);
            res.redirect("/register");
        } else {
            // 유저 등록하기
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });
});

app.route("/secrets").get(function(req, res){
    User.find({"secret":{$ne:null}}, function(error, foundSecrets){
        if(error) {
            console.log(error);
        } else {
            if (foundSecrets) {
                res.render("secrets", {userWithSecrets:foundSecrets});
            }
        }
    });
});

app.route("/submit").get(function(req, res){
    if (req.isAuthenticated()) {
        res.render("submit");
    } else {
        res.redirect("/login");
    }
}).post(function(req, res){
    const submittedSecret = req.body.secret;
    console.log(req.user);
    User.findById(req.user._id, function(error, foundUser){
        if (error) {
            console.log(error);
        } else {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save(function(){
                    res.redirect("/secrets");
                })
            }
        }
    });
})
app.listen(3000, function () {
    console.log("server started");
});

