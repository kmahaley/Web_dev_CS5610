$(function () {
    var circle = $("#circle");
    var square = $("#square");
    var rect = $("#rect");


    $("#radius").selectmenu({
        change: function (event, data) {
            circle.css({
                width: data.item.value,
                height: data.item.value
            });
        }
    });

    $("#side").selectmenu({
        change: function (event, data) {
            square.css({
                width: data.item.value,
                height: data.item.value
            });
        }
    });

    $("#length").selectmenu({
        change: function (event, data) {
            rect.css({
                width: data.item.value,
                height: (data.item.value/2)
                
            });
        }
    });

    $("#color").selectmenu({
        change: function (event, data) {
            circle.css("background", data.item.value);
            square.css("background", data.item.value);
            rect.css("background", data.item.value);
            
            
        }
    });
});