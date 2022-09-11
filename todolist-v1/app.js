const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let newItems= ["study","project"];
let workItems = [];

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
        listTitle: day,
        newItems: newItems,

    });

});

app.post("/", function (req, res) {
    if (req.body.list === "Work") {
        workItems.push(req.body.newItem);
        res.redirect("/work")
    }else{

        newItems.push( req.body.newItem);


        res.redirect("/");

    }
});

app.get("/work", function (req, res) {
    res.render("list",{
        listTitle: "Work List",
        newItems: workItems
    })
});

app.post("/work", function (req, res) {
    workItems.push(req.body.item);
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server started");
});

app.get("/about", function (req, res) {
    res.render("about");
});