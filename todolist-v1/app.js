const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
let schedules = [];
app.get("/", function (req, res) {
    let today = new Date();
    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // if (today.getDay() === 6 || today.getDay() === 0) {
    //     day = "Weekend"
    //     // res.send("<h1>today is weekend!!</h1>");
    // } else {
    //     day = "Weekday"
    //     // res.sendFile(__dirname + "/index.html");
    // }
    // res.render("list", {day: days[today.getDay()]});

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-us", options);

    res.render("list",{
        day: day,
        schedules: schedules,

    });

});

app.post("/", function (req, res) {
    schedules.push( req.body.schedule);

    console.log(schedules[schedules.length-1]);

    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server started");
});