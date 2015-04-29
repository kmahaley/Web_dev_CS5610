$(function () {
    $("#change").click(function () {
        $(".dimension").width(100).height(300);
        $(".dimension").css("background-color", "lightgreen");

    });

    $("#display").click(function () {
        var txt = "";
        txt += "My Width: " + $(".dimension").width() + "</br>";
        txt += "My Height: " + $(".dimension").height() + "</br>";
        $(".dimension").html(txt);
    });

    $("#reset").click(function () {
        $(".dimension").width(300).height(100);
        $(".dimension").css("background-color", "lightgrey");
    });

    var h = $("#h3_wrap");

    $("#wrap").click(function () {
        if (h.parent().is("div")) {
            h.unwrap();
        }
        else {
            h.wrap("<div class='wrapping'></div>");
        }
    });

    $(".trial1").addClass("second third");

    $(".trial2").removeClass("second third");

    var a = "https://pbs.twimg.com/profile_images/2482201087/coqnl6dutm7w9b9chf4c_400x400.jpeg";

    $("img").attr("src",a);
});