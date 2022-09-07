// $("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
$("h1").text("Good Bye");
$("button").text("Don't click");
$("button").html("<em>Hi hello</em>");

$("img").attr("src","/Drum%20Kit/images/kick.png");
$("a").attr("href", "/index.html");

$("h1").click(function (event) {
    console.log(event);
})

$("button").click(function (e) {
    console.log(e);
    $("h1").css("color", "purple");
})

$("input").keydown(function (e) {
    console.log(e.key);
    $("h1").text(e.key);

});
/*
드럼예제는 input을 body나 document로 바꿔주면된다
 */

$("h1").on("mouseover",function (e) {
    console.log(e);
    $("h1").css("color", "blue");
})

/*
jQuery로 엘리멘트를 추가하거나 삭제할 수도 있다
 */

$("h1").before("<h2>inserted button</h2>");
$("h1").after("<h3>inserted text</h3>");

/*
before,after는 태그 밖에 넣고, prepend,append는 태그 내부에 넣는다,
내부에 넣어서 a나 em, strong 같은 것을 할 수 있겠지?
 */
$(".removed").remove(); // 삭제도 가능

$("button").on("click", function (e) {
    console.log(e);
    // $("h2").fadeToggle();
    // $("h2").toggle();
    // $("h2").slideToggle();
    $("h2").slideUp().slideDown().animate({
        opacity:0.5
    }); // css 코드를 넣어서 애니메이션 효과를 줄 수도 있다, 그리고 연쇄적으로 애니메이션 효과를 줄 수도 있다.
})