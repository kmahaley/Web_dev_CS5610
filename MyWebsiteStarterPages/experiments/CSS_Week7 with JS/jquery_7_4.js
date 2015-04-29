$(function () {
    $("#copyparent").click(function () {
        var myparent = $(".parent").text();
        var current = $(".main").html();
       // console.log(myparent);
        //console.log(current);
        $(".main").html(myparent + current);

    });

    $("#copychild").click(function () {
        var mychild = $(".child").text();
        var current = $(".main").html();
       // console.log(mychild);
        //console.log(current);
        $(".main").html(mychild + current);

    });

    $(".circle").on({
        mouseenter: function () {
            $(this).css("background","red");},
        mouseleave: function () {
            $(this).css({ "background": "lightblue", "color": "white" });
        }
        
    });

});