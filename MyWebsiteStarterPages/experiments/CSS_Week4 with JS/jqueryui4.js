$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").append("<b>New Paragraph</b>. ");
    });
    $("#btn2").click(function () {
        $("ol").prepend("<li>New Team</li>");
    });

    $("#btn3").click(function () {
        $("img").before("<b>Before</b>");
    });

    $("#btn4").click(function () {
        $("img").after("<i>After</i>");
    });
});