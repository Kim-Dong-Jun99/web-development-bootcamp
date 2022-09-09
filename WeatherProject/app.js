const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
/*
https://home.openweathermap.org/api_keys
https://openweathermap.org/current
 */
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) {
    let cityName = req.body.cityName;
    // 초기에는 한줄에 url에 밑에 정보를 다 담았는데, 이런식으로 하면 요청이 들어올때, 입력된 도시에 날씨 정보를 리턴할 수 있다
    const query = cityName;
    const apikey = "0e2752897c9ee543c94c2caaa9c276f6";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
    https.get(url, function (response) {
        // console.log(response);
        // response.on을 실행해서, 리스폰스에 있는 데이터를 살펴볼 수 있다.
        response.on("data", function (data) {
            console.log(data);
            /*
                <Buffer 7b 22 63 6f 6f 72 64 22 3a 7b 22 6c 6f 6e 22 3a 31 32 36 2e 39 37 37 38 2c 22 6c 61 74 22 3a 33 37 2e 35 36 38 33 7d 2c 22 77 65 61 74 68 65 72 22 3a ... 418 more bytes>
            데이터가 위처럼 이상한 형식으로 나오는데, 이걸 변환하면 response에 있는 텍스트 데이터가 되는 것을 확인할 수 있다
            이제 데이터를 자바스크립트 오브젝트로 변경해보자! 이걸 하려고, res.on을 해서 데이터를 받는 것 같다
            그냥 response는 텍스트만 받아오기에
             */
            const weather = JSON.parse(data);
            console.log(weather);
            // const object = {
            //     name: "djkim",
            //     favoriteFood:"ramen"
            // };
            // console.log(JSON.stringify(object)); // 오브젝트를 JSON으로 변경할 수 있다
            const temp = weather.main.temp;
            const weatherDescription = weather.weather[0].description;
            const weatherIcon = weather.weather[0].icon;
            console.log(weatherDescription);
            console.log(temp);
            res.write("<p>The weather is currently "+weatherDescription+"</p>"); // write으로 리스폰스에 여러줄의 응답을 편하게 쓸 수 있다
            res.write("<h1>The temperature in seoul is " + temp + " degrees Celcius </h1>");
            const imageUrl = makeImgUrl(weatherIcon);
            res.write("<img src="+imageUrl+">");
            res.send();
        });
    });

});


function makeImgUrl(code) {
    return "http://openweathermap.org/img/wn/" + code + "@2x.png";
}

app.listen(3000, function () {
    console.log("server is running on 3000");
});