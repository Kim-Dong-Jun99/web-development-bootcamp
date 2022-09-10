css, 스크립트 태그를 넣는 순서가 중요하다, 
CSS는 타이틀 밑에 주로 넣고, 자바 스크립트는 주로 바디에 넣는다.
> css가 바디에 있으면 자바스크립트 코드가 실행되기 전에는 스타일이 적용되지 않는다

## Introduction to the DOM
웹 사이트를 동적으로 변화시키기 위해서는 어떻게 해야될까?
DOM은 웹페이지 요소들을 변경시킬 수 있는 오브젝트로 만든다. 다큐멘트를 트리구조로 변경시키고, 각 요소들을 변경시킬 수 잇게 된다!

HTML 파일 안에 있는 모든 내용은 document하위에 속하게 된다

오브젝트 안에는 Property와 method가 있다. method는 ()로 구분할 수 있다

html 요소들을 태그, 아이디, 클래스 등등 다양한 방식으로 선택할 수 있다. 

querySelector에는 엘리멘트, 클래스 혹은 아이디 다 넣을 수 있다.
클래스는 ., 아이디는 #, 태그 이름은 그냥 입력하면 될 것 같다
그리고 설렉터를 혼합시킬 수 있다. ul a 이런식으로, 그리고 li.item이면 item 클래스를 가진 li란 의미이다. li .item이면 li 하위에 item 클래스란 의미이다.

그리고 #list .item을 하면 가장 첫번째 엘리멘트만 리턴된다. 
querySelectorAll하면 리스트를 반환받을 수 있다. 
리스트기에 인덱스를 명시해서 특정 엘리멘트를 지정할 수 있다

자바스크립트로 동적으로 클래스를 엘리멘트에 할당할 수도 있다, 예를들어서 투명으로 만들어주는 css 파일을 클래스에 적용되게 만들어 놓고, 동적으로 그 클래스를 추가해서 안보이거나 보이게할 수 있다는 것이다. toggle을 이용해서 스타일을 적용하거나 삭제할 수 있다

html 태그 안에 들어가는 것은 모두 다 attribute이다
그래서 a 태그 안에 href를 .getAttribute("href")로 가져올 수 있고, 
.setAttribute("href")로 값을 설정할 수 있다

텍스트를 가져올때는, .innerHTML에는 다른 html 태그들도 가져온다. 
그래서 텍스트만 가져오고 싶을때는 .textContent를 써야하고, .innerHTML = <em>hello</em> 이런식으로 html 코드를 추가할 수도 있다

버튼이 클릭되었을때, 이벤트 처리를 어떻게 해야될까?
document.querySelector로 엘리멘트를 찾고, addEventListener로 추가하면된다
이때 함수를 코드안에 내장할 수 있고, 외부에서 선언하고 추가할 수 잇는데, () 이 괄호를 빼고 넘겨줘야한다. 아니면 html이 뜰 때 코드가 실행된다

```javascript
let buttons = document.querySelectorAll(".drum");
for (const button of buttons) {
    button.addEventListener("click", function () {
        alert("I got clicked");
    });
}
```
이렇게 할 수 있는데, 이건 좀 구리다. 함수 재사용이 안되지 않나
```javascript
$0.addEventListener("click", respondToClick);

function respondToClick() {
    console.log("I got clicked");
}
```
첫번째 파라미터로는 이벤트가 들어가고, 두번째 파라미터로는 그 이벤트가 감지됬을때 실행할 함수가 들어간다. 

그리고 자바스크립트는 함수를 파라미터로 넘겨줄 수 있다. 그래서 함수안에서 함수를 실행할 수 있다. 

```javascript
let buttons = document.querySelectorAll(".drum");
for (const button of buttons) {
    // button.addEventListener("click", function () {
    //     alert("I got clicked");
    // });
    button.addEventListener("click", handleClick);
}

function handleClick() {
    console.log(this);
}
```
this를 이용하면 눌린 버튼이 무엇인지 알 수 있다!!

## JavaScript 오브젝트 생성하는 법
```javascript
var bellboy = {
    name: "timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["french", "english"]
}
```
이렇게 밖에 못할까??
오브젝트 생성해줄때마다 저거 다 입력하면 너무 귀찮을 듯
그래서 함수로 생성해준다
```javascript
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}
```
다른 함수들과는 다르게 첫번째 글자를 대문자로 선언하면, constructor 함수로 사용할 수 있다   
`var bellboy1 = new BellBoy("timmy", 20, true,["french","english])`

오 그리고 신기하게 오브젝트 안에 함수를 넣을 수 있는 것 같다
```javascript
var bellboy1 = {
    name: "timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["french", "english"],
    moveSuitcase: function () {
        alert("move suitcase");
        pickUpSuitcase();
        move();
    }
}
```
```javascript
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function () {
        alert("cleaning in progress");
    }
}
```
아직까지는 함수를 넘겨줄때, 파라미터도 같이 넘겨주는 방법은 잘 모르겟다..

```javascript
document.addEventListener("keydown", function (event) {
    console.log(event);

});
```
오 함수에 이벤트라는 파라미터를 넘겨주어보았다. 결과를 확인해보면 키가 눌릴때마다 어느 키가 눌린 것인지 표시해준다. 

## 콜백 함수의 원리
```javascript

let buttons = document.querySelectorAll(".drum");
for (const button of buttons) {
    // button.addEventListener("click", function () {
    //     alert("I got clicked");
    // });
    button.addEventListener("click", handleClick);
}
document.addEventListener("keydown", handleKeyStroke);

function handleClick(event) {
    console.log(this);
    console.log(event.type);
    console.log(event);
    if (this.style.color === "black") {
        this.style.color = "#DA0463";
    }else{

        this.style.color = "black";
    }
    let buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {

        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    }
}

function handleKeyStroke(event) {
    console.log(event);
    let key = event.key;
    console.log(key);
    switch (key) {

        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    }
}
```
작성한 코드이다. 잘 살펴보면
```javascript
button.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeyStroke);
```
우선 addEventListener도 함수 구조로 되어있는 것을 확인할 수 있다. 그리고 첫번째 파라미터로 이벤트의 종류를 넘겨주고, 그 다음에 콜백 함수를 넘겨준다. 이때, 감지한 이벤트와 이벤트 리스너로 설정한 이벤트가 같은 경우에 콜백 함수에 이벤트를 넘겨주는 것 같다. 그래서, handleKeyStroke에 파라미터로 이벤트를 넘겨주고 있지 않지만, 함수를 선언할때, event라는 것을 선언하면 발생한 이벤트를 넘겨받을 수 있다

그럼 여기서 궁금한 점이 다른 파라미터는 혹시 못 넘겨줄까? 더 공부를 해봐야될 것 같다


## JQuery
그전에 썻던 코드들을 보자, DOM에 오브젝트를 찾는 코드가 좀 길고, query를 쓸 때 코드가 길어지면 불편하다. 이걸 좀 심플하게 할 수 없을까?

그렇게 해서 탄생한 것이 JQuery이다.
jQuery는 라이브러리이다. JQuery는 쿼리 코드의 길이를 획기적으로 줄여준다!

jQuery는 어떻게 쓸 수 있을까??

jQuery 소스 파일을 확인해보자, 자바스크립트 코드임을 확인할 수 있는데, 파일의 사이즈를 줄이기위해 주석이나, 스페이스가 없음을 확인할 수 잇다. 용량을 줄여서 속도를 올릴 수 있기에 이렇게 처리하는 것 같다. 

jQuery 예제코드
```javascript
// $("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
$("h1").text("Good Bye");
$("button").text("Don't click");
$("button").html("<em>Hi hello</em>");

$("img").attr("src","/Drum%20Kit/images/kick.png");
$("a").attr("href", "/index.html");


```

## 커멘드라인 이해하기
우리의 운영체제를 피스타치오라고 생각해보자(강의예제로 피스타치오가 등장함), 피스타치오는 껍질이 있고, 그 안에 견과물이 있는데, 그 안에 견과물이 kernel이고 껍질은 shell이다 shell은 GUI shell이 있고, 커멘드라인 인터페이스가 있다, 

강의에서는 Bash를 쓰는데, 나는 zsh을 사용하고 있다. 커멘드라인에 입력하다가 모든 줄을 다 삭제하고 싶을때는 ctrl+u 입력하면 된다

touch라는 명령어로 파일을 생성하고, open으로 열수 있다

# Node REPL

node 입력하고 enter를 치면, 노드 REPL를 실행하게 된다
npm init을 하면, 패키지를 npm으로 베포할 수 있는 것 같다. 
npm init을 하면, package.json이 생성된다!
npm을 이용해서 superheroes라는 패키지를 설치했는데, package.json에 dependencies가 추가되었다.
```javascript

var superheroes = require("superheroes");

var mySuperHero = superheroes.random();
console.log(mySuperHero);

var supervillains = require("supervillains");
var mySuperVillain = supervillains.random();
console.log(mySuperVillain);

```
npm에서 다른 패키지를 설치해서 사용해보앗다. require로 외부 패키지를 가져오고, 해당 패키지의 메소드를 사용할 수 있다.

# Express.js
node 프레임워크이다. node.js는 브라우저에서 부터 자바스크립트를 해방시켜서 컴퓨터에서 직접 사용할 수 있게 하였다. 그 말은 데스크탑 애플리케이션을 node.js로 개발할 수 있다.  express도 이와 유사하게 사용할 수 있다. Express.js는 웹 애플리케이션을 만들때, 반복적인 코드를 줄였다. 

먼저 터미널에서 새로운 폴더를 하나 만들고, 그 안에 js 파일을 하나 만들자. 나는 server.js를 만들었고, 해당 디렉토리에서 npm init을 실행한다. 앞으로 새로운 서버를 만들 때 마다, 이것을 해줘야할 것이다. npm init을 하면, package.json이 성공적으로 생성된 것을 확인할 수 있다

그 다음 express.js를 설치하자 npm install express를 실행하면 express가 설치되었고, package.json에서 확인할 수 있다.

```javascript
const express = require("express");
const app = express();

app.listen(3000, function (){
    console.log("server started in 3000");
    
}); // 특정 포트에 리슨을 하겠다는 의미이다. 

```
처음으로 작성한 서버코드이다. 3000번 포트에 리슨을 걸어두어서, localhost:3000으로 접근하면 오류 메시지를 확인할 수 잇고, 터미널에서는 선언한 로그 메시지를 볼 수 있다. 

localhost:3000 으로 선언한 서버에 접근할 수 있는데, 이건 www.google.com으로 구글 서버에 접근하는 것과 같다. 

다음과 같은 코드를 js에 추가하였다.
```javascript

app.get("/",function(request, response){
    console.log(request);
    
});
```
app을 3000번 포트에 listen을 걸어 두었고, get에 주소를 / 을 할당하였다. 그말은 localhost:3000으로 들어오는 get 요청을 처리해주겠다는 코드같다. 그래서 request로그를 보면 어머어마한 길이의 로그가 찍혀있는 것을 확인할 수 있다. 

이때 사용자에게 응답을 주고 싶으면, 
`response.send("hello");`
이 코드를 추가하면 응답 메시지가 리턴된다. 그리고 GET 메소드에대한 응답만 지정해주어서, post 메소드로 요청을 보내면 오류가 발생한다!!

그리고 요청과 응답 파라미터 명을 req, res로 많이 쓴다. 


계산기 예제를 만들어보자, calculator 폴더를 만들고, calculator.js를 생성한다. npm init으로 package.json을 생성하고, npm install express로 express를 생성한다. 그러고 나서 calculator.js에서 require("express")를 하고, app = express()로 앱을 생성하고, 3000번 포트를 열어두었다.

html form으로 버튼이 눌렸을때, / 에 post 요청을 보내게 하였다. 
```html
<form action="/" method="post">
			<input type="text" name="num1" placeholder="First Number">
			<input type="text" name="num2" placeholder="Second Number">
			<button type="submit" name="submit">Calculate</button>
		</form>
```
이러고 버튼을 눌러보면, 에러가 뜨는데, 그건 왜냐면 /에 post요청을 처리하도록 처리하지 않았다. 
```javascript
app.post("/", function (req, res) {
	res.send("haha"); // post에 대한 간단한 응답
});
```
이 코드를 입력한 후에는 오류가 뜨지 않는다. 그리고 아직은 form 데이터에 접근할 수 없다. 강의에 따르면 새로운 패키지를 설치해야한다고 한다. npm install body-parser을 입력하면 된다

브라우저에서 Html을 확인하면, html안에 있는 코드를 다 확인할 수 있는데, 예제에서는 프론트를 백을 분리해서, 사용자는 내부 Js 코드를 확인할 수 없다

# API 란
API는 명령어, 함수, 프로토콜, 오브젝트의 세트로, 프로그래머가 소프트웨어를 만들거나, 외부 시스템과 상호작용하기 위해서 사용한다. ?로 파라미터를 넘길 수 있고, &로 다수의 파라미터를 넘길 수 있다.

### authentication
api를 이용할때는 내가 누군지 알리기 위해서 key값을 이용해야하는 경우도 있다. 
Json = javascript object notation
Json을 쓰는 이유는 사람도 읽기 편하고, 데이터를 조회하기도 편하다. 

Node js에서 외부 api에 요청 메시지를 어떻게 보낼까
> node js에는 내부적으로 https라는 라이브러리가 있다. `const https = require("https");`
> 이렇게 해서 https를 선언하고, https.get()내부에 https를 포함한 주소를 넘겨주면, get 리퀘스트를보낼 수 있다

**API 정리**
API에서 좀 중요한 것을 몰아쳐서 배워서 정리하고 넘어가보자, 우선 처음 자바스크립트 서버를 개발할때 무엇을 해야하나
> 우선 폴더를 만들고, app.js나 js 파일을 하나 만든다. 그리고 나서 npm init을 터미널에 입력하고, 엔터를 계속 쳐서 디폴트 세팅으로 완료한다
> 그 다음, package.json이 생성되면, npm install express를 한다. 이 명령어를 실행해야지, express 를 사용할 수 있다. 그 다음, 
> ```javascript
> const express = require("express");
> const app = express();
> app.get("/", function(req, res){
>   
>   res.send("hello world");
> });
>
> app.listen(3000, function (){
>   console.log("server start in 3000");
> });
> ```
> 이렇게 하면 3000번 포트에 express 서버를 띄운 것이다. 그다음 index.html 파일을 만들어서 리턴하고 싶으면, res.sendFile(__dirname+"index.html")하면된다.
> 그리고 https 를 사용해서 api를 사용할 수 있는데, 
> ```javascript
> https.get(url, function (response){
>   response.on("data", function (data){
>
> });
> });
> ```
> 이렇게 코드를 쓰면 api에서 리턴한 데이터를 사용할 수 있다. 근데 `console.log(response)`를 실행해보면, api에서 보낸 데이터를 확인할 수 있는데, 굳이 response.on~~ 이코드는 왜 있는걸까?
> 그 이유는 reponse.on에서 넘겨주는 data를 통해서, api로 넘겨온 데이터를 바로 자바스크립트 객체로 읽어올 수 있기 때문이다!
> 여기까지 오면 핵심 내용은 거의 끝이다. 업그레이드로 사용자가 입력한 도시의 날씨 정보를 알기 위해서, index.html에 html form을 만들고 post로 데이터를 보내게 하였다. app.post를 만들고, 그전에 npm install body-parser를 이용해서, request 안에 있는 데이터를 확인할 수 잇게 하였다. body-parser를 설치하고, 
> ```javascript
> const bodyParser = require("body-parser");
> app.use(bodyParser.urlencoded({extended:true}));
>
> ```
> 까지 해주면 body parser을 이용할 수 있다. 그래서 
> `let cityName = req.body.cityname;` 으로 사용자가 입력한 도시 이름을 바로 읽어올 수 있다

## bootstrap 활용하기 
bootstrap에 있는 example을 그대로 복사해서 사용하면 괜찮게 보이는 웹페이지 토대를 빠르게 만들 수 있다. 이때, CDN으로 css을 걸어주고, 커스텀 css 코드는 복사 붙여넣기하면, 예제에 있는 화면과 비슷한 화면이 바로 생성된다

html에 css를 적용하려면, js에 static 파일이 어디있는지 알려줘야한다.
`app.use(express.static("public"));` 이 코드로 알려줄 수 있다.

이제 베포를 진행해보자, mailchimp 실습은 지속적인 오류로 스킵하고, 베포 과정만 진행해보겠다

먼저 heroku에 가입을 하고, nodejs를 클릭하면, 베포 과정에 대한 설명을 볼 수 있다


