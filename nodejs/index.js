//const a = 2;

// a = 5; 이건 이제 오류를 낸다, 왜냐 const는 상수이기에, 

//const fs = require("fs");
// 이걸 쓰면 경고 메시지가 뜬다, 근데 새로운 feature라서 뜨는거라서 무시해도 될듯

//fs.copyFileSync("file1.txt", "file2.txt");

// 파일이 복사된 것을 확인할 수 있다, 이미 존재한 파일에는 file1.txt의 내용이 덮어씌워진다

var superheroes = require("superheroes");

var mySuperHero = superheroes.random();
console.log(mySuperHero);

var supervillains = require("supervillains");
var mySuperVillain = supervillains.random();
console.log(mySuperVillain);
