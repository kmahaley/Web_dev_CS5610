var myapp = angular.module("app_p1_p5", []);
myapp.controller("controller_p1_p5", function ($scope) {

    console.log("from angularjs j5");
    var myairportlist = {
        "airports": [
         {
             "fs": "CLO",
             "iata": "CLO",
             "icao": "SKCL",
             "name": "Alfonso B. Aragon Airport",
             "city": "Cali",
             "cityCode": "CLO",
             "countryCode": "CO",
             "countryName": "Colombia",
             "regionName": "South America",
             "timeZoneRegionName": "America/Bogota",
             "localTime": "2015-03-28T01:53:43.535",
             "utcOffsetHours": -5,
             "latitude": 3.543056,
             "longitude": -76.381389,
             "elevationFeet": 3162,
             "classification": 3,
             "active": true,
             "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CLO?codeType=fs",
             "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CLO?codeType=fs"
         },
         {
             "fs": "KGT",
             "iata": "KGT",
             "icao": "ZUKD",
             "name": "Kangding Airport",
             "city": "Kangding",
             "countryCode": "CN",
             "countryName": "China",
             "regionName": "Asia",
             "timeZoneRegionName": "Asia/Shanghai",
             "localTime": "2015-03-28T14:53:43.535",
             "utcOffsetHours": 8,
             "latitude": 30.13176,
             "longitude": 101.747534,
             "elevationFeet": 13916,
             "classification": 4,
             "active": true,
             "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KGT?codeType=fs",
             "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KGT?codeType=fs"
         },
         {
             "city": "mumbai",
             "iata": "BOM"
         },
         {
             "city": "delhi",
             "iata": "DL"
         },
         {
             "city": "boston",
             "iata": "BOS"
        }
        ]
    }
    //console.log(myairportlist.airports);
    var myarray = myairportlist.airports;
 
    // clear dropdown
    $("#airport").html("");

    for (var i = 0; i < myarray.length; i++) {
        var item = myarray[i];
        $("#airport").append(
              $("<option></option>").html(item.city+'-'+item.iata));
        
    }

    $scope.getdata = function () {
        var x = $("#airport").val();
        console.log(x);
    }

    
});

