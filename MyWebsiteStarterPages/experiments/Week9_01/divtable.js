//console.log($(window).width());
//console.log($(window).height());

$(window).resize(function () {

    console.log($(window).width());

    $("north")
    .css({
        "width": $(window).width() - 100
    });

    $("south")
    .css({
        "width": $(window).width() - 100
    });

    $(".west")
    .css({
        "width": $(window).width() - 50
    });

});