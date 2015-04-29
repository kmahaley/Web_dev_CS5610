$(function () {
    $("body")
        .css({

            "background": "lightcyan"
        });
 
    var maintitle = "This is dynamic header of the page";
    $("#title").html(maintitle);

    var teams = ["australia", "serbia", "brazil", "england", "france"]

    var ul = $("#teams");

    ul.empty();

    for (var i in teams) {
        var li = $("<li>" + teams[i] + "</li>");
        ul.append(li);
    }

    $("#button").click(function () {
        $("#effect").addClass("newClass", 1000);
    });

});