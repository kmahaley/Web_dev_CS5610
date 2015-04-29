$(function () {

    $(window).resize(function () {

        //console.log($(window).width());
        $("newrow1")
        .css({
            "width": $(window).width() - 100
        });
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
        $("#googlemap")
        .css({
            "width": $(window).width() - 100
        });

    });

});