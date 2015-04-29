//My global variables
var title = "";
var rating = "";
var releaseDate = "";

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

//var myairportapp = angular.module("airports", []);

myindexpageapp.controller("airportscontroller", function ($scope, $http) {

        $(".mymaintable").hide();
        $(".getmapdata").hide();
        $(".mydetailstable").hide();
        $(".mycodestable").hide();

        $(window).resize(function () {

            //console.log($(window).width());
            $("newrow1")
            .css({
                "width": $(window).width() - 100
            });

            $("north")
            .css({
                "width": $(window).width() - 100
            });

            $("south")
            .css({
                "width": $(window).width() - 100
            });

            $(".west")
            .css({
                "width": $(window).width() - 100
            });
            $("#googlemap")
            .css({
                "width": $(window).width() - 100
            });

        });


        console.log("from airport angular");

        $("#searchairport").click(function () {
            console.log("searchairport function");

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

            var mytitle = $("#airporttitle").val().toUpperCase();
            console.log(mytitle);
            $.ajax({
                url: "http://www.myapifilms.com/imdb?title=" + mytitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N",
                //url: "https://api.flightstats.com/flex/airports/rest/v1/jsonp/fs/" + mytitle + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68",
                dataType: "jsonp",
                success: getmyairports

            });

            function getmyairports(airports) {
                console.log(airports)


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

                    if (name != "")
                        $(".mymaintable").fadeIn("slow");

                    $("#myairportname").html(name);

                    $(".countryName").html(title);

                    //$(".countryName").html(countryName);
                    $(".countryCode").html(countryCode);
                    $(".city").html(city);
                    $(".name").html(name);

                    window.location = '#mymaintable';

                }

            }


        });



        $("#getdetailsdata").click(function () {
            $(".mydetailstable").fadeToggle("slow");
            console.log(utcOffsetHours);
            $(".timeZoneRegionName").html(releaseDate);

            //$(".timeZoneRegionName").html(timeZoneRegionName);
            $(".localTime").html(localTime);
            $(".utcOffsetHours").html(utcOffsetHours);

            window.location = '#mydetailstable';
        });

        $("#getcodesdata").click(function () {
            $(".mycodestable").fadeToggle("slow");
            console.log(iata);
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

            //this code is to get roadmaptype of googlemap
            var mapOptions = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //setting
            var map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

            //setting marker option
            var markerOptions = {
                position: new google.maps.LatLng(latitude, longitude)
            };
            var marker = new google.maps.Marker(markerOptions);
            marker.setMap(map);

            //setting the location name option
            var infoWindowOptions = {
                content: name + ', ' + city + ', ' + countryName
            };

            var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
            google.maps.event.addListener(marker, 'click', function (e) {

                infoWindow.open(map, marker);

            });

            //adding weather layer to the map
            var weatherLayer = new google.maps.weather.WeatherLayer({
                temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
            });
            weatherLayer.setMap(map);

            var cloudLayer = new google.maps.weather.CloudLayer();
            cloudLayer.setMap(map);


            window.location = '#getmapdata';
        });


});

