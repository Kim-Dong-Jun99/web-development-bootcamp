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

먼저 heroku에 가입을 하고, nodejs를 클릭하면, 베포 과정에 대한 설명을 볼 수 있다. heroku를 통해서 베포하면, heroku 서버에서 어떤 포트를 쓸지 우리는 모른다. 그래서 코드를 약간 변경해줘야한다.
```javascript
app.listen(process.env.PORT || 3000, function () {
    console.log("server is running on "+process.env.PORT);
});
```
저 프로세스 포트는 heroku에서 쓰일 포트이고, 3000은 우리 로컬에서 쓰일 포트이다. 그리고 procfile을 만들어야한다. 
touch Procfile로 만들고, `web: node app.js`이것을 추가해주자, 그 다음, 깃에 추가해줘야한다. 나는 이미 이 프로젝트에 깃이 있어서 작성한 코드를 복사해서 새로운 디렉토리를 만들고, 깃을 추가했다, 그다음 add .을 해주고, 커밋을 해주자, 그 다음, heroku login된 상태에서, heroku create을 해주면, 링크가 생성된다, 링크를 방문해보면, 아직 아무것도 보이지 않는다. 왜냐면 아직 푸쉬 하지 않았기에!
git push heroku master을 실행하면 베포가 끝났다!

그다음 변경 사항이 생기면, git add . git commit git push heroku master을 해주면 바로바로 반영된다

## Git 정리
새로운 폴더를 만들고, 그 안에 텍스트 파일을 생성했고, git init으로 git을 시작하였다 파일을 생성했으면, 스테이징 단계에 파일을 추가해줘야한다.
스테이징 단계로 추가하는 것은 git add로 추가할 수 있다 git status로 스테이징 단계를 확인해보면,
untracked로 나오는 것을 확인할 수 있다
staging 단계로 추가하려면, git add 해줘야한다. git add filename으로 추가할 수 있고, 
git rm --cached filename으로 삭제할 수 있는 것 같다
git log으로 커밋들을 확인할 수도 있다
강의를 보다보니, 강사님와 내 git log에서 다른 점을 발견하였다. author인데,
강사님 Pc에서는 저자가 Pc 즉 로컬 정보인 반면에, 나는 내 깃허브 주소로 뜬다
git config에서 설정이 되어있기에 그런 것 같다. 내가 이미이 피씨에서 작업을 해서
깃허브에 원격으로 업로드 하였기에 설정이 다르게 뜨는 것 같다.
로컬에서 작업하다가, 꼬였다! 롤백하고 싶다, 그러면 git checkout chapter3.txt로
가장 마지막에 커밋한 버전으로 변경할 수 있다

로컬에서 작업하고, 깃허브에 올리고 싶으면, 일단 깃허브 레포를 생성하고, 
git remote add origin 깃주소 를 하면된다!
```
❯ git remote add origin https://github.com/Kim-Dong-Jun99/Story.git
❯ git branch -M main
❯ git push -u origin main
```
branch 명까지 명시해주고, 푸쉬해주면, 잘 반영되는 것을 확인할 수 있다

git ignore는 어떻게 설정해줄까?
DS_store 은 세팅 파일이라서 깃허브에 안 올려두는 것이 좋다.

git ignore는 어떻게 만드냐, 히든 파일을 만들면 되는데, .gitignore라는 파일을 만들면된다
.gitignore에 무시해야하는 파일을 만들 수 있다
DS_Store랑 secrets.txt는 안 올리고 싶다. 그럴때는 git rm --cached -r . 하면 모든 파일이 스테이징 단계에서 해제된다
.gitignore에는 제외할 파일이름을 하나하나 입력해도된다
주석은 #로 입력한다. *.txt는 .txt 확장자는 무시하라는ㅇ 의미이다.
gitignore에 추가하면, git add . 해도 무시된다

## git clone
git 주소를 따서 git clone하면 프로젝트가 생성된다
마스터 브랜치에는 잘 돌아가는 코드만 올릴 수 있게, 브랜치를 나눠서 개발한다
새로운 브랜치는 git branch로 할 수 있다 그리고 git checkout으로 브랜치를 옮길 수 있다

브랜치를 바꾸면서 로컬 파일들도 변경되는 것을 확인할 수 있다. merge하려면 어떻게 해야될까

브랜치를 main으로 바꾸고, git merge sf-plot을 입력하면, merge가 된다. 

rebase를 하면 병렬이 아니라, 순차적으로 개발한 것처럼 개발 내용을 합칠 수 있다

오픈 소스 협업은 어떻게 진행하면 좋을까
포킹과 풀리퀘로 진행할 수 있다. 내 원격 저장소를 누군가가 포크하고, 로컬에서 개발해서 내용을 추가했다고 해보자
그다음 그걸 푸쉬하고, 푸쉬 내용이 내 저장소에 반영되려면 풀 리퀘를 열어야한다

## template - ejs
npm으로 ejs를설치하고, view engine을 세팅해주자, res.render로 화면을 세팅해주는 것을 확인할 수 있다.
ejs나 다른 뷰 엔진을 사용하려면 views라는 새로운 폴더를 생성해줘야한다.
복습, 리퀘스트 데이터를 읽으려면 body-parser를 이용해야하고, 요청을 보내고 데이터를 보내고 받으려면 https를 사용해야한다. 

변수는 let으로 선언하자,const는 상수일때만, var로 선언해주면 안되는 이유는, 조건문이나, 반복문에서 local로 생성되지 않는다, 

ejs로 html에 html을 포함할 수 있다. 그리고 동적으로 데이터를 주고 받기도 편리하다

## 노드 모듈 이해하기
지금 app.js에 날짜 구하는 코드를 다른 파일에 저장해놓고 실행하고 싶다. 어떻게 하면될까. 노드가 이때 도움을 줄 수 있을 것 같다
module.exports로 무엇을 내보낼지 정하고, app.js에서 받아서 그 함수를 실행할 수 있다
하나가 아니라 다수의 함수를 내보내고 싶으면 어떻게 해야될까??
exports로 내보내는 것은 오브젝트라서, 
```javascript
module.exports.getDate = getDate;
module.exports.getDay = getDay;
```
이렇게 여러개를 내보낼 수 있다, 저렇게 묶어서 내보내면, `const date = require(__dirname+"/date.js");`여기서 두개의 함수 모두 다 사용할 수 있다

```javascript
exports.getDate = function (){

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-us", options);

}

exports.getDay = function (){
    let today = new Date();

    let options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-us", options);

}
```
리팩터링해서 수정한 date.js

## 노드에서 라우팅 파라미터는 어떻게 설정할까?
:topic 을 입력해서 설정할 수 있다, 그거 말고 다른 변수들은??

## databases
데이터베이스에는 두가지 유형이 있다. SQL과 NoSQl, SQL에서 유명한 두가지 데이터베이스는 Mysql과 Postgresql, NoSQL에서는 mongoDb와 redis가 유명하다, sql과 nosql의 차이는?? nosql이 좀 더 유연하다! 하지만, 연관관계 맺기에는 sql이 더 유리하다, 근데 scalability는 Nosql이 더 우세하다. 

**Mysql VS MongoDB**

|Mysql| MongoDB      |
|-----|--------------|
|more mature| shiny and new|
|Table structure| Document structure|
|Requires a schema|More flexible to changes|
|Great with relationships|Not great with relationships|
|scales vertically|scaleshorizontally|


개인적으로도 sql이 더 관리하기 편할 것 같다

mongoDB는 nosql이라서 그런가, 파이어베이스와 매우 유사하게 사용할 수 있었다.
`db.컬렉션 명.insertOne({})`을 통해서 아주 손쉽게 데이터 하나를 추가하였고, MongoDB Compass에서도 확인 가능 하였다

when we type collections, we can check collections in current database
MongoDb is extremely well documented so we can always check for information

how can we read data from the collection??
we can check collections by show collections(), but we can't check for document, 
here is the solution:
we can get all the products by db.컬렉션 명.find() 
if we want to find a specific document, we can set query selectors
and can combine queries by logical operators
ex of query:
```db.products.find({name:"Pen"})
[ { _id: 1, name: 'Pen', price: 1.2 } ]
```
and also can use arithmetic operators
```
db.products.find({price:{$gt:3}})
[ { _id: 2, name: 'Tumblr', price: 5, sale: 10 } ]
```
for more info check official documentation

and we by second parameter, we can select field of data to see, and we can hide id by_id:0

to update, we can just use it like below:
db.products.updateOne({_id:1},{$set:{sale:"none"}})
used $set to specify that new field is being inserted

delte is more simple we can just specify what to delete when using deleteOne

what about relationship??

i have created nested document but i couldn't name the collection, 

# connecting mongoDB with nodejs
we will use mongoose in Nodejs
short cut for npm init -> by typing npm init - y no need for repetitive enter key
but first lets use traditional one
lecture shows connecting to local db, but i used atals cloud, and connection was succesful

```javascript

// jshint esversion:6
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {log} = require('console');
const url = "empty for confidential";

const dbName = 'fruit_proj';

const client = new MongoClient(url);

client.connect(function(err){
  assert.equal(null, err);
  log("Connected successfully");

  const db = client.db(dbName);
  insertDocument(db, function(){

   client.close();
  })
});

const insertDocument = function(db, callback){
  const collection  = db.collection('fruits');

  collection.insertMany([
    {
      name:"Apple",
      score:8,
      review:"Great fruit"
    },
    {
      name:"Orange",
      score:6,
      review:"Kinda sour"
    },
    {
      name:"Banana",
      score:9,
      review:"Great taste"

    }


  ], function(err, result){
    assert.equal(err,null);
    //    assert.equal(3,result.result.n);
    // assert.equal(3,result.ops.length);
    log("Inserted 3 documents into the collection");
    callback(result);
  });
};

```

code for app.js in fruits

reading data from database:
```javascript

const findDocuments = function(db, callback){
  const collection  = db.collection('fruits');
  collection.find({}).toArray(function(err, docs){
    log("Found the records");
    log(docs);
    callback(docs);
  });
};
```
by using mongoose, using mongodb gets a lot easier
we can connect to a database simply using
`mongoose.connect()`

to insert a data, we have to first specify a schema that looks like this:
```javascript
const fruitSchema = new mongoose.Schema({
  name:String,
  rating:Number,
  review:String
});
```
then, create a collection :
```javascript
const Fruit = mongoose.model("Fruit", fruitSchema);
```
left parameter represents a collection name and must be singular
to insert data, its very easy;
```javascript

const fruit = new Fruit({
  name:"Apple",
  rating:7,
  review:""
});

fruit.save();
```

by running brand new app.js, new database named test initialized, 
and inside test database, new fruits collection has been made

to insert various datas:
```javascript
Fruit.insertMany([kiwi, orange, banana], function(err){
  if(err){
    log(err);
  }else{
    log("Successfully saved")
  }
})
```
finding data:
```javascript
Fruit.find(function(err, fruits){
  if (err){
    log(err);
  } else {
    log(fruits);
  }
})

```
db connection close didn't work on mine, 

how to validate data in mongoose, 
```javascript
const fruitSchema = new mongoose.Schema({
  name:String,
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});
```
when we insert a data with rating bigger than 10, it throws a validation error

how to create nested document:
```javascript

const pineapple = new Fruit({
  name:"Pineapple",
  rating:9,
  review:"very sweet"
});

const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favoriteFruit:fruitSchema
})

const Person = mongoose.model("Person", personSchema);

pineapple.save();

const Amy = new Person({
  name:"Amy",
  age:20,
  favoriteFruit:pineapple
})

Amy.save();


```

todolist를 버전 2로 업그레이드 해보았다. 버전 1은 데이터도 로컬에 저장되고, 만들 수 있는 리스트도 제한적이었다. 버전 2는 몽고 db를 연결해서 데이터가 디비 서버에 저장되고, 다양한 리스트를 커스터마이징할 수 있게 하였다.

버전2를 만들면서 막혔던 부분에 대해서 간략하게 정리해보겠다.
우선 커스텀 리스트 객체에 아이템을 추가하고 나서 따로 save를 호출해야하나 고민했는데, mongoose에서는 더티 채킹은 지원해주지 않는 것 같다. 그래서 따로 save를 호출해서 데이터를 저장하였고, 삭제 할때, 루트 페이지로 돌아가는 것을 막고 싶었는데, 그때 hidden이라는 것을 사용해서 커스텀 페이지로 돌아갈 수 있는 방법을 깨달았다.

그리고 loadash를 통해서 대소문자를 무시하고 url 매핑을 할 수 있다

자 이제 만든 것을 베포해보자. 디비까지 연결되어있는데 어떻게 베포할까? 일단 디비는 아틀라스 클라우드에 띄워져있는데, 설정을 어떻게 해야할까, 물론 문제 없을 수도 있을 것 같긴한데, heroku로 베포할때, 깃을 이용해서 베포하는 것 같았다. 근데 현재 url를 깃 이그노어 걸어놔서 깃에 포함되지 않은 상태인데, 어떻게 사용하는지 확인해봐야할 것 같다. 아 아이피 제한을 걸어놔서 상관 없나??맞네 클러스터에는 접근안될 것 같아서 열어두어도 될 것 같다.

client makes a request to a server, 레스트랑에 비유를 해보면, 클라이언트가 피자 가져다 주세요라고 웨이터(서버)에서 요청을 보내면, 서버는 그 요청을 받아드려서 피자를 클라이언트에게 배달한다.
하지만, 클라이언트가 메뉴가 없는 것을 요청하면 서버는 그것을 제공할 수 없다. 인터넷에서는 이 클라이언트가 서버에 요청을 보내는 것을 http request를 통해서 이루어진다
REST는 FTP, HTTP 등 다양한 프로토콜이 있는데, 그런 프로토콜을 통일 시켜주기 위해서 사용하는 것 같다. REST한 API를 만들기 위해서는 GET, POST, PUT, PATCH, DELETE를 사용해야한
get - read, post - create, put, patch - update, delete - delete

|HTTP verbs|/articles|/articles/jack-bauer|
|------|----------|---------------|
|GET|Fetches all the articles|Fetches the article on jack-bauer|
|POST|creates on article|-|
|PUT|-|Updates the article on jack-bauer|
|PATCH|-|Updates the article on jack-bauer|
|DELETE|Deletes all articles|Deletes all articles of jack-bauer|


express 는 app.route로 편리하게 요청을 관리할 수 있다.put, patch 차이점 -> patch는 요소 중 일부만 업데이트할 수 있다


## security
디비에 들어있는 암호를 encrypt 해보자, 암호화를 해놓으면 그것을 열 수 있는 키가 필요하다. mongoose-encryption을 이용하면 암호화를 쉽게 할 수 있다. 먼저 schema를 mongoose schema로 지정해줘야한다. 그리고 간단하게는 schema에 플러그인으로 시크릿으로 지정할 스트링을 넘겨주면 된다. 그리고 모든 필드를 다 암호화하는 것이 아닌 특정 필드만 암호화하는 것이 좋다
`userSchema.plugin(encrypt,{secret: secret, encryptedFields: ['password']});`
암호화하는 코드이다, 이러면 save할때 암호화되고, find할때 암호가 해제되는 것을 확인할 수 다

근데 이렇게 암호화하면 암호가 노출된다. 어떻게 안 노출되게 암호화할 수 있을까, 우선 dotenv를 설치하자 
heroku로 베포할때는 환경변수를 설정할 수 있는 다른 방법이 있으니 배워보자, hashing을 사용하면 encryption보다 간단하게 보안성을 키울 수 있다. 왜냐면 hash된 값으로는 원본을 찾는게 불가능에 가깝기에, hash에 salting까지 추가하면, 더 나은 암호화를 할 수 있다 암호에 salt를 더하고 해쉬를 하는게 하나의 saltround인데, 이것을 중첩하면, 어마어마하게 뚫기 힘든 암호가 나온다. 노드 버전 관리는 nvm으로 할 수 있다, 

## cookie session
쿠키랑 세션에 대해서 알아보자, 쿠키를 브라우저에 심어놔서,장바구니에 아이템을 계속 저장할 수 잇다, 쿠키를 삭제하면, 장바구니에 담긴 물건들이 사라진다. 쿠키는 다른 웹사이트에서도 사용될 수 있다. 타겟팅 광고가 이런식으로 작동한다. 리퀘스트를 서버에 보내면, response로 쿠키를 담아서 보낸다, 그렇다면 세션은 무엇일까, 세션은 로그인되어있는 시점부터 로그아웃하는 시점까지 유지된다. 인프런 쿠키, 세션 강의를 다시 들어봐야겠다. 
passport js를  사용해보자, 원래는 bcrypt로 해슁을 했는데, passport를 사용해서 진행해보자,
serialise - only necessary when using session, creates cookie and stuffs message, 

order is important, 

## Oauth
oauth에 앱을 클라이언트로 등록해 놓으면, 해당 서비스의 authentication을 이용할 수 있다. passport에는 구글, 깃허브, 등등을 이용할 수 있다. 

## React
