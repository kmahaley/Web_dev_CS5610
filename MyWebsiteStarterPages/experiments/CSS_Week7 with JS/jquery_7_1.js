$(function () {
    /*getting data from txt file to alert*/

    $.get('../Week7/story.txt', function (data) {
        alert(data);
    });

    $("#display_text").load('../Week7/story.txt');

    /*trying various display properties*/
    $('#slide_t').click(function () {
        $('.try_property').slideToggle('slow');
    });

    $('#slide_d').click(function () {
        $('.try_property').slideDown('slow');
    });

    $('#slide_u').click(function () {
        $('.try_property').slideUp('slow', callbackfn());
    });

    function callbackfn(){
        alert("Are you sure you want to hide the logo?");
    };

    $('#fade_o').click(function () {
        $('.try_property').fadeOut('slow');
    });

    $('#fade_i').click(function () {
        $('.try_property').fadeIn('slow',1);
    });

    $('#fade_t').click(function () {
        $('.try_property').fadeTo('slow',0.3);
    });


});