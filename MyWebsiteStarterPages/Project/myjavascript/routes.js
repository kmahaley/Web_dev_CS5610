//var myroutesapp = angular.module("routes", []);
myindexpageapp.controller("routescontroller", function ($scope, $http) {

    console.log("from route angularjs");
    /*searchflight function*/
    $scope.searchroute = function () {

        console.log("searchairport function");
        var sourceairport = $scope.sourceairport;
        var destinationairport = $scope.destinationairport;


       // $http.jsonp("http://www.myapifilms.com/imdb?title=" + source + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
        $http.jsonp("https://api.flightstats.com/flex/ratings/rest/v1/jsonp/route/" + sourceairport + "/" + destinationairport + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68&callback=angular.callbacks._0")
        .success(function (response) {
            console.log(response);
            var myroute = response;

            console.log(myroute.appendix.airports);

            $scope.myairportD = (myroute.appendix.airports[0])
            $scope.myairportA = (myroute.appendix.airports[1])

            //console.log(myroute.ratings);
            $scope.route = myroute.ratings;

            //console.log(myroute.request.arrivalAirport.requestedCode);
            //console.log(myroute.request.departureAirport.requestedCode);

            $scope.source = myroute.request.arrivalAirport.requestedCode;
            $scope.destination = myroute.request.departureAirport.requestedCode;

            //console.log(myroute.appendix.airlines);
            $scope.myairlines = myroute.appendix.airlines;

        });


    }

    /*
    console.log(myroute.appendix.airports);
    
    $scope.myairportD = (myroute.appendix.airports[0])
    $scope.myairportA = (myroute.appendix.airports[1])

    //console.log(myroute.ratings);
    $scope.route = myroute.ratings;

    //console.log(myroute.request.arrivalAirport.requestedCode);
    //console.log(myroute.request.departureAirport.requestedCode);

    $scope.source = myroute.request.arrivalAirport.requestedCode;
    $scope.destination = myroute.request.departureAirport.requestedCode;

    //console.log(myroute.appendix.airlines);
    $scope.myairlines = myroute.appendix.airlines;

*/

            /*var myroute = {
                "request": {
                    "departureAirport": {
                        "requestedCode": "BOM",
                        "fsCode": "BOM"
                    },
                    "arrivalAirport": {
                        "requestedCode": "LHR",
                        "fsCode": "LHR"
                    },
                    "codeType": {},
                    "url": "https://api.flightstats.com/flex/ratings/rest/v1/json/route/BOM/LHR"
                },
                "ratings": [
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "VS",
                     "flightNumber": "355",
                     "codeshares": 0,
                     "directs": 0,
                     "observations": 14,
                     "ontime": 6,
                     "late15": 2,
                     "late30": 4,
                     "late45": 2,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.42857143,
                     "delayObservations": 11,
                     "delayMean": 28,
                     "delayStandardDeviation": 17.090668,
                     "delayMin": 2,
                     "delayMax": 55,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0.53979999,
                     "allDelayStars": 2.7,
                     "allStars": 1.35
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "VS",
                     "flightNumber": "8020",
                     "codeshares": 28,
                     "directs": 0,
                     "observations": 28,
                     "ontime": 25,
                     "late15": 1,
                     "late30": 1,
                     "late45": 1,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.89285713,
                     "delayObservations": 9,
                     "delayMean": 22,
                     "delayStandardDeviation": 41.109947,
                     "delayMin": 1,
                     "delayMax": 128,
                     "allOntimeCumulative": 0.97130001,
                     "allOntimeStars": 4.9000001,
                     "allDelayCumulative": 0.69150001,
                     "allDelayStars": 3.5,
                     "allStars": 4.1999998
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "VS",
                     "flightNumber": "8018",
                     "codeshares": 60,
                     "directs": 0,
                     "observations": 60,
                     "ontime": 29,
                     "late15": 13,
                     "late30": 7,
                     "late45": 11,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.48333332,
                     "delayObservations": 42,
                     "delayMean": 42,
                     "delayStandardDeviation": 50.244675,
                     "delayMin": 2,
                     "delayMax": 246,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0.0359,
                     "allDelayStars": 0.2,
                     "allStars": 0.1
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "AA",
                     "flightNumber": "6658",
                     "codeshares": 59,
                     "directs": 0,
                     "observations": 59,
                     "ontime": 38,
                     "late15": 15,
                     "late30": 4,
                     "late45": 2,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.64406782,
                     "delayObservations": 41,
                     "delayMean": 18,
                     "delayStandardDeviation": 19.024694,
                     "delayMin": 0,
                     "delayMax": 105,
                     "allOntimeCumulative": 0.044599999,
                     "allOntimeStars": 0.2,
                     "allDelayCumulative": 0.9332,
                     "allDelayStars": 4.6999998,
                     "allStars": 2.45
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "AA",
                     "flightNumber": "6660",
                     "codeshares": 60,
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
                     "delayMean": 23,
                     "delayStandardDeviation": 36.403587,
                     "delayMin": 0,
                     "delayMax": 162,
                     "allOntimeCumulative": 0.95539999,
                     "allOntimeStars": 4.8000002,
                     "allDelayCumulative": 0.72570002,
                     "allDelayStars": 3.5999999,
                     "allStars": 4.1999998
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "9W",
                     "flightNumber": "118",
                     "codeshares": 0,
                     "directs": 0,
                     "observations": 60,
                     "ontime": 29,
                     "late15": 13,
                     "late30": 7,
                     "late45": 11,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.48333332,
                     "delayObservations": 42,
                     "delayMean": 42,
                     "delayStandardDeviation": 50.244675,
                     "delayMin": 2,
                     "delayMax": 246,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0.0359,
                     "allDelayStars": 0.2,
                     "allStars": 0.1
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "9W",
                     "flightNumber": "120",
                     "codeshares": 0,
                     "directs": 0,
                     "observations": 60,
                     "ontime": 35,
                     "late15": 10,
                     "late30": 9,
                     "late45": 6,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.58333331,
                     "delayObservations": 38,
                     "delayMean": 28,
                     "delayStandardDeviation": 29.59374,
                     "delayMin": 1,
                     "delayMax": 135,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0.57929999,
                     "allDelayStars": 2.9000001,
                     "allStars": 1.45
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "AI",
                     "flightNumber": "131",
                     "codeshares": 0,
                     "directs": 0,
                     "observations": 60,
                     "ontime": 31,
                     "late15": 7,
                     "late30": 5,
                     "late45": 17,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.51666665,
                     "delayObservations": 44,
                     "delayMean": 60,
                     "delayStandardDeviation": 67.849739,
                     "delayMin": 1,
                     "delayMax": 228,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0,
                     "allDelayStars": 0,
                     "allStars": 0
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "IB",
                     "flightNumber": "4709",
                     "codeshares": 59,
                     "directs": 0,
                     "observations": 59,
                     "ontime": 38,
                     "late15": 15,
                     "late30": 4,
                     "late45": 2,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.64406782,
                     "delayObservations": 41,
                     "delayMean": 18,
                     "delayStandardDeviation": 19.024694,
                     "delayMin": 0,
                     "delayMax": 105,
                     "allOntimeCumulative": 0.044599999,
                     "allOntimeStars": 0.2,
                     "allDelayCumulative": 0.9332,
                     "allDelayStars": 4.6999998,
                     "allStars": 2.45
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "BA",
                     "flightNumber": "138",
                     "codeshares": 0,
                     "directs": 0,
                     "observations": 59,
                     "ontime": 38,
                     "late15": 15,
                     "late30": 4,
                     "late45": 2,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.64406782,
                     "delayObservations": 41,
                     "delayMean": 18,
                     "delayStandardDeviation": 19.024694,
                     "delayMin": 0,
                     "delayMax": 105,
                     "allOntimeCumulative": 0.044599999,
                     "allOntimeStars": 0.2,
                     "allDelayCumulative": 0.9332,
                     "allDelayStars": 4.6999998,
                     "allStars": 2.45
                 },
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
                     "delayMean": 23,
                     "delayStandardDeviation": 36.403587,
                     "delayMin": 0,
                     "delayMax": 162,
                     "allOntimeCumulative": 0.95539999,
                     "allOntimeStars": 4.8000002,
                     "allDelayCumulative": 0.72570002,
                     "allDelayStars": 3.5999999,
                     "allStars": 4.1999998
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "AC",
                     "flightNumber": "6005",
                     "codeshares": 60,
                     "directs": 0,
                     "observations": 60,
                     "ontime": 29,
                     "late15": 13,
                     "late30": 7,
                     "late45": 11,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.48333332,
                     "delayObservations": 42,
                     "delayMean": 42,
                     "delayStandardDeviation": 50.244675,
                     "delayMin": 2,
                     "delayMax": 246,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0.0359,
                     "allDelayStars": 0.2,
                     "allStars": 0.1
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "AC",
                     "flightNumber": "6003",
                     "codeshares": 60,
                     "directs": 0,
                     "observations": 60,
                     "ontime": 35,
                     "late15": 10,
                     "late30": 9,
                     "late45": 6,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.58333331,
                     "delayObservations": 38,
                     "delayMean": 28,
                     "delayStandardDeviation": 29.59374,
                     "delayMin": 1,
                     "delayMax": 135,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0.57929999,
                     "allDelayStars": 2.9000001,
                     "allStars": 1.45
                 },
                 {
                     "departureAirportFsCode": "BOM",
                     "arrivalAirportFsCode": "LHR",
                     "airlineFsCode": "AC",
                     "flightNumber": "6391",
                     "codeshares": 60,
                     "directs": 0,
                     "observations": 60,
                     "ontime": 31,
                     "late15": 7,
                     "late30": 5,
                     "late45": 17,
                     "cancelled": 0,
                     "diverted": 0,
                     "ontimePercent": 0.51666665,
                     "delayObservations": 44,
                     "delayMean": 60,
                     "delayStandardDeviation": 67.849739,
                     "delayMin": 1,
                     "delayMax": 228,
                     "allOntimeCumulative": 0,
                     "allOntimeStars": 0,
                     "allDelayCumulative": 0,
                     "allDelayStars": 0,
                     "allStars": 0
                 }
                ],
                "appendix": {
                    "airlines": [
                     {
                         "fs": "AA",
                         "iata": "AA",
                         "icao": "AAL",
                         "name": "American Airlines",
                         "phoneNumber": "1-800-433-7300",
                         "active": true
                     },
                     {
                         "fs": "AC",
                         "iata": "AC",
                         "icao": "ACA",
                         "name": "Air Canada",
                         "phoneNumber": "1-800-247-2262",
                         "active": true
                     },
                     {
                         "fs": "AI",
                         "iata": "AI",
                         "icao": "AIC",
                         "name": "Air India",
                         "active": true
                     },
                     {
                         "fs": "IB",
                         "iata": "IB",
                         "icao": "IBE",
                         "name": "Iberia",
                         "active": true
                     },
                     {
                         "fs": "VS",
                         "iata": "VS",
                         "icao": "VIR",
                         "name": "Virgin Atlantic",
                         "active": true
                     },
                     {
                         "fs": "9W",
                         "iata": "9W",
                         "icao": "JAI",
                         "name": "Jet Airways (India)",
                         "active": true
                     },
                     {
                         "fs": "BA",
                         "iata": "BA",
                         "icao": "BAW",
                         "name": "British Airways",
                         "phoneNumber": "1-800-AIRWAYS",
                         "active": true
                     }
                    ],
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
                         "localTime": "2015-03-28T12:01:32.227",
                         "utcOffsetHours": 5.5,
                         "latitude": 19.089891,
                         "longitude": 72.868047,
                         "elevationFeet": 24,
                         "classification": 1,
                         "active": true
                     },
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
                         "localTime": "2015-03-28T06:31:32.227",
                         "utcOffsetHours": 0,
                         "latitude": 51.469603,
                         "longitude": -0.453566,
                         "elevationFeet": 80,
                         "classification": 1,
                         "active": true
                     }
                    ]
                }
            }*/


});

