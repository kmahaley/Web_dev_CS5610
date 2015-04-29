//My global variables
/*var title = "";
var rating = "";
var releaseDate = "";*/

var airlineCode = "";
var flightNumber = "";
var city = "";
var remarks = "";
var currentTime = "";


//jquery begins
$(function () {
    $(".mymaintable").hide();
    console.log("from departures angular");
    
    $("#deptairporttitle").keypress(keypressHandler);
    function keypressHandler(event) {
        // console.log("inside keypressHandler");

        if ((event.keyCode == '13') || (event.keyCode == '10')) {
            // console.log("inside keypressHandler if statement");
            mydeptsearchairportfn();
        }
    }

    $("#deptsearchairport").click(mydeptsearchairportfn);

    function mydeptsearchairportfn() {
        console.log("mydeptsearchairportfn function");

        $(".airlineCode").hide();
        $(".flightNumber").empty();
        $(".city").empty();
        $(".remarks").empty();
        $(".currentTime").empty()

        var mytitle = $("#deptairporttitle").val().toUpperCase();
        var astring1 = "https://api.flightstats.com/flex/fids/rest/v1/json/fs";
        var astring2 = "/departures?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cgate%2Cremarks&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false";
        var deptairporturl = astring1 + mytitle + astring2;
        console.log(deptairporturl);
        //AJAX call to flightstats
        $.ajax({
            
            url: deptairporturl,
            dataType: "jsonp",
            cache: false,
            success: getmydeptairports,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus + "Error: " + errorThrown);
            }

        });
        //getmyairports begins
        function getmydeptairports(airports) {
            console.log(airports)


            for (var m in airports) {
                airport = airports[m];

                airlineCode = airport.airlineCode;
                flightNumber = airport.flightNumber;
                city = airport.city;
                remarks = airport.remarks;
                currentTime = airport.currentTime;
                
                console.log(airlineCode + " " + flightNumber + " " + timeZoneRegionName + " " + latitude);
                if (flightNumber != "")
                    $(".mymaintable").fadeIn("slow");

                $(".airlineCode").html(airlineCode);

                //$(".countryName").html(title);

                $(".flightNumber").html(flightNumber);
                $(".remarks").html(remarks);
                $(".city").html(city);
                $(".currentTime").html(currentTime);

                window.location = '#mymaintable';

            }

        }
        //getmyairports ends
    };


    


});

