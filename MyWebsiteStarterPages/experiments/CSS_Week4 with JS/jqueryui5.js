$(document).ready(function () {

    $("#myequal")
        .click(function () {
        $("p").eq(1).css("background-color", "lightblue")
        $("p").eq(2).css("background-color", "lightblue");
    });

    $("#mynot")
        .click(function () {
            $("p").not(".intro").css("background-color", "pink")
            $("p").not(".intro").css("background-color", "pink");
        });
    
    $("#myfilter")
        .click(function () {
            $("p").filter(".intro").css("background-color", "lightgreen")
            $("p").filter(".intro").css("background-color", "lightgreen");
        });
    

    $("#mylast")
        .click(function () {
            $("div div div p").last().css("background-color", "#f8b461");
            
        });
    
});
