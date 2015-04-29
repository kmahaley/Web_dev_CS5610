$("h3").remove();

$("h4").css( { "color": "green", "background-color": "pink" } );

$(func_as_paramerter);
function func_as_paramerter()
{
    console.log("successefully called function as parameter");

}

$(function () {
    console.log("successefully passed entire function as parameter");

});

$("#mybox").on("click", function () {
    $(this)
        .css({ width: function( index, value ) {
            return parseFloat( value ) * 1.2;
        }
    })
})
