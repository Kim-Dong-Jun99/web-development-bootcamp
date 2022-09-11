const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname+"/date.js");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let newItems= ["study","project"];
let workItems = [];

app.get("/", function (req, res) {
    let day = date.getDay();

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