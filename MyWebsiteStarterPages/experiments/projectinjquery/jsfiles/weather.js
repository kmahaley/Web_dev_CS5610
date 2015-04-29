//My global variables for Weather API datda
//var title = "";
//var rating = "";
//var releaseDate = "";

var countryName = "";
var myweatherairportname = "";
var city = "";
var regionName = "";
var name = "";
var reportTime = "";
var localTime = "";
var latitude = "";
var longitude = "";
var weatherStationIcao = "";
var pressureInchesHg = "";
var temperatureCelsius = "";
var dewPointCelsius = "";

var wind_dir = "";
var wind_speed = "";
var wind_variable = "";

var miles = "";

var sky_coverage = "";
var wea_phenomenon = "";
var wea_intensity = "";

//Jquery begins here
$(function () {
    $(".mymaintable").hide();
    $(".getmapdata").hide();
    $(".mydetailstable").hide();
    $(".mycodestable").hide();
    $("#waitingclass").hide();

    //testing jquery
    //console.log("from weather Jquery");


    $("#weathertitle").keypress(keypressHandler);

    function keypressHandler(event) {
        // console.log("inside keypressHandler");

        if ((event.keyCode == '13') || (event.keyCode == '10')) {
            // console.log("inside keypressHandler if statement");
            mysearchweatherfn();
        }
    }

    $("#searchweatherairport").click(mysearchweatherfn);

    //searchweatherairport begins
    function mysearchweatherfn(){

        //console.log("searchairport function");

        //clearing all data from DOM
        $(".mymaintable").hide();
        $(".getmapdata").hide();
        $(".mydetailstable").hide();
        $(".mycodestable").hide();

        $(".regionName").empty();
        $(".countryName").empty();
        $(".city").empty();
        $(".name").empty();

        $(".latitude").empty();
        $(".longitude").empty();
        $(".reportTime").empty();

        $(".weatherStationIcao").empty();
        $(".temperatureCelsius").empty();
        $(".pressureInchesHg").empty();
        $(".dewPointCelsius").empty();

        $(".wind").empty();
        $(".visibility").empty();
        $(".weathercond").empty();
        $(".skycond").empty();

        //input from DOM and changing it into upper case
        if ($("#weathertitle").val() == '') {
            alert('Input can not be left blank');
            $("#weathertitle").css({ "box-shadow": "2px 2px 0 red inset" });
            $("#weathertitle").focus();
        }
        else {
            $("#weathertitle").css({ "box-shadow": "2px 2px 0 #454545 inset" });

            var mytitle = $("#weathertitle").val().toUpperCase();

            $("#weathertitle").val('');
            $("#waitingclass").show();
        var wstring1 = "https://api.flightstats.com/flex/weather/rest/v1/jsonp/all/";
        var wstring2 = "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68"
        var weatherurl = wstring1 + mytitle + wstring2;
        //console.log(weatherurl);
        //AJAX call to flightstat API
        
        $.ajax({
            
            url: weatherurl,
            dataType: "jsonp",
            cache: false,
            success: getmyweatherairports,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus + "Error: " + errorThrown);
            }

        });
        }

        //getmyweatherairports function begins
        function getmyweatherairports(myweather) {
            $("#waitingclass").hide();
            //console.log(myweather)
            reportTime = myweather.metar.reportTime;
            weatherStationIcao = myweather.metar.weatherStationIcao;
            pressureInchesHg = myweather.metar.conditions.pressureInchesHg;
            temperatureCelsius = myweather.metar.temperatureCelsius;
            dewPointCelsius = myweather.metar.dewPointCelsius;

            wind_dir = myweather.metar.conditions.wind.direction + " (direction)";
            wind_speed = myweather.metar.conditions.wind.speedKnots + " Knots";
            wind_variable = myweather.metar.conditions.wind.directionIsVariable;

            miles = myweather.metar.conditions.visibility.miles + " Miles";

            if (myweather.metar.conditions.skyConditions.length > 0)
                sky_coverage = myweather.metar.conditions.skyConditions[0].coverage;

            if (myweather.metar.conditions.weatherConditions.length > 0) {
                wea_phenomenon = myweather.metar.conditions.weatherConditions[0].phenomenon;
                wea_intensity = myweather.metar.conditions.weatherConditions[0].intensity
            }
            //console.log(sky_coverage + " " + wea_phenomenon + " " + wea_intensity);

            for (var m in myweather.appendix.airports) {
                weather = myweather.appendix.airports[m];

                //title = airport.title;
                //rating = airport.rating;
                //releaseDate = airport.releaseDate;

                countryName = weather.countryName;
                regionName = weather.regionName;
                city = weather.city;
                name = weather.name;
                localTime = weather.localTime;
                latitude = weather.latitude;
                longitude = weather.longitude;

                if (name != "")
                    $(".mymaintable").fadeIn("slow");

                $("#myweatherairportname").html(name);
                //$(".countryName").html(title);

                $(".countryName").html(countryName);
                $(".regionName").html(regionName);
                $(".city").html(city);
                $(".name").html(name);

                window.location = '#mymaintable';

            }

        }

        //getmyweatherairportsends
    } 
    


    //getweatherdetailsdata begins
    $("#getweatherdetailsdata").click(function () {
        $(".mydetailstable").fadeToggle("slow");
        //console.log(weatherStationIcao);
        //$(".timeZoneRegionName").html(releaseDate);
        $(".reportTime").html(reportTime);
        $(".weatherStationIcao").html(weatherStationIcao);
        $(".temperatureCelsius").html(temperatureCelsius);
        $(".pressureInchesHg").html(pressureInchesHg);
        $(".dewPointCelsius").html(dewPointCelsius);
        window.location = '#mydetailstable';

    });//getweatherdetailsdata ends

    //getweathercodesdata begins
    $("#getweathercodesdata").click(function () {
        $(".mycodestable").fadeToggle("slow");
        //console.log(sky_coverage);
        $(".skycond").html(sky_coverage);
        $(".visibility").html(miles);

        //appending to UL dom element
        var windul = $("#wind");
        var li = $("<li>").append(wind_dir);
        $("<li>")
                .append(wind_speed)
                .appendTo(li);
        $("<li>")
                .append(wind_variable)
                .appendTo(li);

        windul.append(li);

        var weatherul = $("#weathercond");
        var li = $("<li>").append(wea_phenomenon);
        $("<li>")
                .append(wea_intensity)
                .appendTo(li);

        weatherul.append(li);

        window.location = '#mycodestable';
    });

    //googlemap functionality
    $("#getweathermapdata").click(function () {

        $(".latitude").html(latitude);
        $(".longitude").html(longitude);

        $(".getmapdata").fadeToggle("slow");
        //var index = myairport.airports.indexOf(a);

        //this code is to get roadmaptype of googlemap
        var mapoptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //setting
        var map = new google.maps.Map(document.getElementById('googlemap'), mapoptions);

        //setting marker options
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

    });// Map function ends

});//Jquery ends