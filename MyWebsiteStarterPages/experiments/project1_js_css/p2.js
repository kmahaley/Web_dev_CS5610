var myapp = angular.module("app_p1_p2", []);
myapp.controller("controller_p1_p2", function ($scope,$http) {

    console.log("from flight rating angular");

    /*searchflight function*/
    $scope.searchflight = function () {

        console.log("searchairport function");
        var airlinecode = $scope.airlinecode;
        var airlinenumber = $scope.airlinenumber;
        
        //$http.jsonp("http://www.myapifilms.com/imdb?title=" + airlinecode + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
        $http.jsonp("https://api.flightstats.com/flex/ratings/rest/v1/jsonp/flight/" + airlinecode + "/" + airlinenumber + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68&callback=angular.callbacks._0")
        .success(function (response) {
            //console.log(response);

            $scope.flightrating = response.ratings;
            //$scope.flightrating = response;
            var myflightrating = response;
            console.log(myflightrating);

            /*getdata function*/
            $scope.getdata = function (r) {
                console.log(r);
                //var index = myairport.airports.indexOf(a);

                $scope.detailsView = r;
                //console.log(myflightrating.appendix.airlines);
                console.log(myflightrating.appendix.airports);
                $scope.myairline = myflightrating.appendix.airlines;

                $scope.myairportD = (myflightrating.appendix.airports[0])
                $scope.myairportA = (myflightrating.appendix.airports[1])
            };
            /*end of getdata function*/


            //getroute function : Google map functionality
            $scope.getroute = function (r) {
                $scope.x = 1;
                //console.log(myflightrating.appendix.airports);
                var directionsDisplay;
                var directionsService = new google.maps.DirectionsService();
                var map;

                var airport = myflightrating.appendix.airports;
                var locations = [
                    [airport[0].city, airport[0].latitude, airport[0].longitude, airport[0].countryName, airport[0].localTime],
                    [airport[1].city, airport[1].latitude, airport[1].longitude, airport[1].countryName, airport[1].localTime]
                ];

                /* var locations = [
                     ['Bondi Beach', -33.890542, 151.274856, 4],
                     ['Coogee Beach', -33.923036, 151.259052, 5],
                     ['Cronulla Beach', -34.028249, 151.157507, 3],
                     ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
                     ['Maroubra Beach', -33.950198, 151.259302, 1]
                 ];
         
                 console.log(myarray);*/
                console.log(locations);

                var infowindow = new google.maps.InfoWindow();
                var marker, i;

                map = new google.maps.Map(document.getElementById('googlemap'), {
                    zoom: 4,
                    center: new google.maps.LatLng(airport[0].latitude, airport[0].longitude),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        animation: google.maps.Animation.DROP,
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            //to get animation on maps
                            if (marker.getAnimation() != null) {
                                marker.setAnimation(null);
                            } else {
                                marker.setAnimation(google.maps.Animation.BOUNCE);
                            }
                            //to display content on the map city names
                            infowindow.setContent(locations[i][0] + ", " + locations[i][3] + " " + locations[i][4]);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }

                var flightPlanCoordinates = [
                                                new google.maps.LatLng(airport[0].latitude, airport[0].longitude),
                                                new google.maps.LatLng(airport[1].latitude, airport[1].longitude)

                ];

                var flightPath = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3
                });


                var flightPathD = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: false,
                    strokeColor: '#0000FF',
                    strokeOpacity: 1.0,
                    strokeWeight: 3
                });

                flightPath.setMap(map);
                flightPathD.setMap(map);


                /*//this code is to get driving,cycling and transit travel modes "FLIGHT" mode not available yet on google API
                directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap(map);
        
                var start = new google.maps.LatLng(airport[0].latitude, airport[0].longitude);
                var end = new google.maps.LatLng(airport[0].latitude, airport[0].longitude);
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });*/

            };
            /*end of getroute function*/

        });/*end of success method*/
        

    };/*end of searchflight function*/

    
    
    /*var myflightrating = {

        "request": {

            "airlineCode": {

                "requestedCode": "BA",
                "fsCode": "BA"
            }
      ,
            "flightNumber": {

                "requested": "198",
                "interpreted": "198"
            }
      ,
            "departureAirport": {


            }
      ,
            "codeType": {


            }
      ,
            "url": "https://api.flightstats.com/flex/ratings/rest/v1/json/flight/BA/198"
        }
,
        "ratings": [

          {

              "departureAirportFsCode": "BOM",
              "arrivalAirportFsCode": "LHR",
              "airlineFsCode": "BA",
              "flightNumber": "198",
              "codeshares": 0,
              "directs": 0,
              "observations": 60,
              "ontime": 50,
              "late15": 6,
              "late30": 1,
              "late45": 3,
              "cancelled": 0,
              "diverted": 0,
              "ontimePercent": 0.83333331,
              "delayObservations": 20,
              "delayMean": 23.0,
              "delayStandardDeviation": 36.403587,
              "delayMin": 0,
              "delayMax": 162,
              "allOntimeCumulative": 0.95539999,
              "allOntimeStars": 4.8000002,
              "allDelayCumulative": 0.72570002,
              "allDelayStars": 3.5999999,
              "allStars": 4.1999998
          }

        ]
,
        "appendix": {

            "airlines": [

              {

                  "fs": "BA",
                  "iata": "BA",
                  "icao": "BAW",
                  "name": "British Airways",
                  "phoneNumber": "1-800-AIRWAYS",
                  "active": true
              }

            ]
      ,
            "airports": [

              {

                  "fs": "BOM",
                  "iata": "BOM",
                  "icao": "VABB",
                  "name": "Chhatrapati Shivaji International Airport",
                  "city": "Mumbai",
                  "cityCode": "BOM",
                  "countryCode": "IN",
                  "countryName": "India",
                  "regionName": "Asia",
                  "timeZoneRegionName": "Asia/Kolkata",
                  "localTime": "2015-03-28T11:54:21.035",
                  "utcOffsetHours": 5.5,
                  "latitude": 19.089891,
                  "longitude": 72.868047,
                  "elevationFeet": 24,
                  "classification": 1,
                  "active": true
              }
        ,
              {

                  "fs": "LHR",
                  "iata": "LHR",
                  "icao": "EGLL",
                  "name": "London Heathrow Airport",
                  "city": "London",
                  "cityCode": "LON",
                  "stateCode": "EN",
                  "countryCode": "GB",
                  "countryName": "United Kingdom",
                  "regionName": "Europe",
                  "timeZoneRegionName": "Europe/London",
                  "localTime": "2015-03-28T06:24:21.035",
                  "utcOffsetHours": 0.0,
                  "latitude": 51.469603,
                  "longitude": -0.453566,
                  "elevationFeet": 80,
                  "classification": 1,
                  "active": true
              }

            ]

        }

    }*/


    //console.log(myflightrating.ratings);
    //$scope.flightrating = myflightrating.ratings;




});





