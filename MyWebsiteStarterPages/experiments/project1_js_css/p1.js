var myapp = angular.module("app_p1_p1", []);

myapp.controller("controller_p1_p1", function ($scope, $http) {

    
    $scope.detailsView = null;
    
    console.log("from airport angular");

    $scope.searchairport = function () {

        console.log("searchairport function");
        var mytitle = $scope.airporttitle;

        /*
        //$http.jsonp("http://www.myapifilms.com/imdb?title=" + mytitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
        $http.jsonp("https://api.flightstats.com/flex/airports/rest/v1/jsonp/fs/" + mytitle + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68&format=JSONP&callback=angular.callbacks._0")
        .success(function (response) {
            console.log(response);
            $scope.myairport = response;
            //console.log(response.city);

        });*/


        $.ajax({
            //url: "http://www.myapifilms.com/imdb?title=" + mytitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N",
            url: "https://api.flightstats.com/flex/airports/rest/v1/jsonp/fs/" + mytitle + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68",
            dataType: "jsonp",

            success: getmyairports

        });

        function getmyairports(response) {
            
            console.log(response)
            $scope.myairport = response;
            
        }

    };

    /*var myairport = {

        "airports": [

          {

              "fs": "BOS",
              "iata": "BOS",
              "icao": "KBOS",
              "faa": "BOS",
              "name": "Logan International Airport",
              "street1": "One Harborside Drive",
              "street2": "",
              "city": "Boston",
              "cityCode": "BOS",
              "stateCode": "MA",
              "postalCode": "02128-2909",
              "countryCode": "US",
              "countryName": "United States",
              "regionName": "North America",
              "timeZoneRegionName": "America/New_York",
              "weatherZone": "MAZ015",
              "localTime": "2015-03-27T15:41:06.102",
              "utcOffsetHours": -4.0,
              "latitude": 42.36646,
              "longitude": -71.020176,
              "elevationFeet": 19,
              "classification": 1,
              "active": true,
              "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BOS?codeType=fs",
              "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BOS?codeType=fs"
          }
      ,
          {

              "fs": "JBC",
              "iata": "JBC",
              "name": "Boston City Heliport",
              "city": "Boston",
              "cityCode": "BOS",
              "stateCode": "MA",
              "countryCode": "US",
              "countryName": "United States",
              "regionName": "North America",
              "timeZoneRegionName": "America/New_York",
              "localTime": "2015-03-27T15:41:06.102",
              "utcOffsetHours": -4.0,
              "latitude": 42.343889,
              "longitude": -71.049444,
              "classification": 5,
              "active": true,
              "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/JBC?codeType=fs",
              "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/JBC?codeType=fs"
          }

        ]

    }*/
   


    $scope.getdata = function (a) {
        //console.log(a);
        //var index = myairport.airports.indexOf(a);

        //this code is to get roadmaptype of googlemap
        var mapOptions = {
            center: new google.maps.LatLng(a.latitude, a.longitude),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //setting
        var map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

        //setting marker option
        var markerOptions = {
            position: new google.maps.LatLng(a.latitude, a.longitude)
        };
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);

        //setting the location name option
        var infoWindowOptions = {
            content: a.name + ', ' + a.city + ', ' + a.countryName
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

        $scope.detailsView = a;
    };

});

