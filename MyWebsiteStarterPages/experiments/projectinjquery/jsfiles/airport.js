//My global variables
/*var title = "";
var rating = "";
var releaseDate = "";*/

var countryName = "";
var countryCode = "";
var city = "";
var cityCode = "";
var name = "";
var localTime = "";
var latitude = "";
var longitude = "";
var timeZoneRegionName = "";
var utcOffsetHours = "";
var iata = "";
var postalCode = "";

//jquery begins
$(function () {
    $(".mymaintable").hide();
    $(".getmapdata").hide();
    $(".mydetailstable").hide();
    $(".mycodestable").hide();
    $("#waitingclass").hide();
    $(".displaymycomments").hide();

    //console.log("from airport angular");



    $("#airporttitle").keypress(keypressHandler);

    function keypressHandler(event) {
        // console.log("inside keypressHandler");

        if ((event.keyCode == '13') || (event.keyCode == '10')) {
            // console.log("inside keypressHandler if statement");
            mysearchairportfn();
        }
    }

    $("#searchairport").click(mysearchairportfn);



    function mysearchairportfn() {
        //console.log("searchairport function");

        $(".mymaintable").hide();
        $(".getmapdata").hide();
        $(".mydetailstable").hide();
        $(".mycodestable").hide();
        

        $(".countryName").empty();
        $(".city").empty();
        $(".name").empty();

        $(".timeZoneRegionName").empty();
        $(".localTime").empty();
        $(".utcOffsetHours").empty();

        $(".countryCode").empty();
        $(".cityCode").empty();
        $(".iata").empty();
        $(".postalCode").empty();

        if ($("#airporttitle").val() == '') {
            alert('Input can not be left blank');
            $("#airporttitle").css({ "box-shadow": "2px 2px 0 red inset" });
            
            $("#airporttitle").focus();
        }
        else {
            $("#airporttitle").css({ "box-shadow": "2px 2px 0 #454545 inset" });
            
            var mytitle = $("#airporttitle").val().toUpperCase();
            $("#airporttitle").val('');

            $("#waitingclass").show();

            var astring1 = "https://api.flightstats.com/flex/airports/rest/v1/jsonp/fs/";
            var astring2 = "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68";
            var airporturl = astring1 + mytitle + astring2;
            //console.log(airporturl);
            //AJAX call to flightstats

            $.ajax({

                url: airporturl,
                dataType: "jsonp",
                cache: false,
                success: getmyairports,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus + "Error: " + errorThrown);
                }

            });
        }

        //getmyairports begins
        function getmyairports(airports) {
            // console.log(airports)
            $("#waitingclass").hide();
            $(".displaymycomments").show();

            for (var m in airports) {
                airport = airports[m];

                title = airport.title;
                rating = airport.rating;
                releaseDate = airport.releaseDate;

                countryName = airport.countryName;
                countryCode = airport.countryCode;
                city = airport.city;
                cityCode = airport.cityCode;
                name = airport.name;
                localTime = airport.localTime;
                latitude = airport.latitude;
                longitude = airport.longitude;

                timeZoneRegionName = airport.timeZoneRegionName;
                utcOffsetHours = airport.utcOffsetHours;
                iata = airport.iata;
                postalCode = airport.postalCode;
                //console.log(countryName + " " + postalCode + " " + timeZoneRegionName + " " + latitude);
                if (name != "")
                    $(".mymaintable").fadeIn("slow");

                $(".myairportname").html(name);

                //$(".countryName").html(title);

                $(".countryName").html(countryName);
                $(".countryCode").html(countryCode);
                $(".city").html(city);
                $(".name").html(name);

                window.location = '#mymaintable';

            }

        }
        //getmyairports ends
    };




    $("#getdetailsdata").click(function () {
        $(".mydetailstable").fadeToggle("slow");
        //console.log(utcOffsetHours);
        //$(".timeZoneRegionName").html(releaseDate);

        $(".timeZoneRegionName").html(timeZoneRegionName);
        $(".localTime").html(localTime);
        $(".utcOffsetHours").html(utcOffsetHours);

        window.location = '#mydetailstable';
    });

    $("#getcodesdata").click(function () {
        $(".mycodestable").fadeToggle("slow");
        //console.log(iata);
        $(".countryCode").html(rating);

        //$(".countryCode").html(countryCode);
        $(".cityCode").html(cityCode);
        $(".iata").html(iata);
        $(".postalCode").html(postalCode);

        window.location = '#mycodestable';
    });

    $("#getmapdata").click(function () {

        $(".getmapdata").fadeToggle("slow");
        //var index = myairport.airports.indexOf(a);
        $(".latitude").html(latitude);
        $(".longitude").html(longitude);
        //this code is to get roadmaptype of googlemap
        var mapoptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        //console.log(mapoptions);
        //setting
        var map = new google.maps.Map(document.getElementById('googlemap'), mapoptions);

        //setting marker option
        var markeroptions = {
            position: new google.maps.LatLng(latitude, longitude)
        };
        var marker = new google.maps.Marker(markeroptions);
        marker.setMap(map);

        //setting the location name option
        var infowindowoptions = {
            content: name + ', ' + city + ', ' + countryName
        };

        var infowindow = new google.maps.InfoWindow(infowindowoptions);
        google.maps.event.addListener(marker, 'click', function (e) {

            infowindow.open(map, marker);

        });

        //adding weather layer to the map
        var weatherlayer = new google.maps.weather.WeatherLayer({
            temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
        });
        weatherlayer.setMap(map);

        var cloudlayer = new google.maps.weather.CloudLayer();
        cloudlayer.setMap(map);


        window.location = '#getmapdata';
    });



    //$(".mydetailstable").fadeToggle("slow");
    var comments = ['We then boarded the airplane and had to wait because they wanted to send mechanic parts to San Diego so we sat on the plane another hour.',
            'I called the customer service line for international. I have called four times for three days, still cannot get through. My group flights were canceled because of this. Poor customer service.',
            'I arrived from San Juan PR today and my bag didnt arrive! When I went to the baggage claim Upset and express & frustration the staff behind the counter immediately started defending the airline. That was rude & unprofessional. Uncalled behavior.'];


    var commentstable = $("#commentstable");
    var ticketHeadersRow = "<thead> <tr>";
    ticketHeadersRow = ticketHeadersRow + "<th><h2>" + "Traveller's experience " + "</h2></th> </tr> </thead>";

    $("#commentstable").append(ticketHeadersRow);
    $.each(comments, function (index, value) {
        //console.log(value);
        var tr = "<tr>";
        tr = tr + "<td>" + value + "</td> </tr>";
        $("#commentstable").append(tr);

    });

    $("#addcomment").click(function () {
        $("#commentstable").empty();

        comments.push($("#comment").val());
        //console.log(comments);
        var commentstable = $("#commentstable");
        var ticketHeadersRow = "<thead> <tr>";
        ticketHeadersRow = ticketHeadersRow + "<th><h2 class='colorchange'>" + "Experience" + "</h2></th> </tr> </thead>";

        $("#commentstable").append(ticketHeadersRow);
        $.each(comments, function (index, value) {
            //console.log(value);
            var tr = "<tr>";
            tr = tr + "<td>" + value + "</td> </tr>";
            $("#commentstable").append(tr);

        });
        $("#comment").val('');
    });

});

