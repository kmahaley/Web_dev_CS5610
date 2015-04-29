$(function () {
    $("#sort1, #sort2").sortable({
        connectWith: ".connect"
    }).disableSelection();

    $(".dialogue").dialog({
        width: 'auto',
        height: 'auto'
    });
});



