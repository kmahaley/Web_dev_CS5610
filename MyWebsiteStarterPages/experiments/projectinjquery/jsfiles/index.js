$(function () {

    //Default page
    $('#indexmain').load('htmlfiles/myprojecthome.html');

    $("#indexpage1").click(function () {
        $('#indexmain').load('htmlfiles/myprojecthome.html');
        
    });
    $("#indexpage9").click(function () {
        $('#indexmain').load('htmlfiles/iatacode.html');

    });
    $("#indexpage2").click(function () {
        $('#indexmain').load('htmlfiles/airport.html');
        
    });
    $("#indexpage7").click(function () {
        $('#indexmain').load('htmlfiles/route.html');

    });
    $("#indexpage8").click(function () {
        $('#indexmain').load('htmlfiles/weeklyweather.html');

    });
    $("#indexpage3").click(function () {
        $('#indexmain').load('htmlfiles/flight.html');
        
    });
    $("#indexpage4").click(function () {
        $('#indexmain').load('htmlfiles/weather.html');
        
    });

    $("#indexpage5").click(function () {
        $('#indexmain').load('htmlfiles/about.html');
       
    });

    $("#indexpage6").click(function () {
        $('#indexmain').load('htmlfiles/credits.html');
        
    });

    $(window).resize(function () {

        //console.log($(window).width());

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