$(function () {


    $("h1").html("Dynamically updated jQuery experiments");

    $(".dragme").draggable();

    $("p").draggable({
    grid:[20, 20]});

    $(".resizeme").resizable();

    $("#selectable").selectable();

    $("#sortable").sortable();

    $(".accordion").accordion();
});