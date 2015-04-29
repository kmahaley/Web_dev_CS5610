$(function () {
    $("body")
        .css({

            "background": "lightcyan"
        });
 
    /*$("h4").remove();*/
    

    $(".mypara")
        .css({
            "color": "blue"

        });

    var newcont=$("<p><i>this is new content too added to red paragraph with new color properties</i></p>")

    newcont.css({
        "color": "white",
        "background-color": "black"
    });

    $("#mypara1")
        .css({
            "color": "red",
            "background-color": "pink"
        })
        .append("NEW CONTENT")
        .append(newcont);


    var newpara = $("<p> This is new paragraph</p>");

    $("h4")
        .append(newpara);

    newpara.css("color","orange" );
});