$(function () {
    $(".cricket").menu({

        select: function (event, ui) {
            //console.log("selected");
            $("body").css("background-color", "lightgreen");
        },

        focus: function (event, ui) {
            $("body").css("background-color", "lightcyan");
            //console.log("focused");
        },

        create: function (event, ui) {
            alert("this is create event");
            window.alert = function () { /* do nothing here */ };
        }
        
    });
    
});