$(function () {
    $("#animate").click(function () {
        $(".try_property2").animate({ fontSize: "+=15px" });
        $(".try_property3").animate(
            {
                height: "+=20px",
                width: "+=20px",
                opacity: '0.5',
            });
    });

    $("#reset").click(function () {
        $(".try_property2").animate({ fontSize: "14px" });
        $(".try_property3").animate(
            {
                height: "100",
                width: "100",
                opacity: '1',
            });
    });

    $("#empty").click(function () {
        $(".try_property4").empty();
    });

    $("#remove").click(function () {
        $(".try_property4").remove();
    });

    $("#text1_change").click(function () {
        $("#text1").text("Srilanka");
    });

    $("#html1_change").click(function () {
        $("#html1").html("<i>USA</i>");
    });

    $("#value1_change").click(function () {
        $("#value1").val("Neo Anderson");
    });
});