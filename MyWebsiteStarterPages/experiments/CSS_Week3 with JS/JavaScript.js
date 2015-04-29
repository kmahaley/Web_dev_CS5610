alert("welcome to jQuery page");

function add(a, b) {
    return a + b;
}

var c = add(100, 200);

console.log("value in console c = " + c);


$("#hover-over-me")
    .on("mouseover", function () {
        $(this).css("color", "red");
    });


$("#box")
    .on("mouseover", function () {
        $(this).css({ "width": "300", "background": "yellow", "color": "green" });
    });


$(".mouse-on-move")
    .on("mouseenter", function () {
        $(this).css({ "background-color": "yellow", "font-weight": "bolder" });
    });
