const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))
const request = require("request");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    let body = req.body;
    console.log(body);
    // res.send("check log");
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    // res.send("email = " + email + " firstName = " + firstName + " lastName = " + lastName);

    let data = {
        members:[
            {
                email_address:email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ],
    }
    let jsonData = JSON.stringify(data);
    res.send(jsonData);
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server is running on ");
});