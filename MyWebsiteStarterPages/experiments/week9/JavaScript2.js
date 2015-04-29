var myapp = angular.module("a", []);

myapp.controller("b", function ($scope, $http) {

    console.log("from exp2 angular");

    $scope.getdata = function () {
            var mytitle = $scope.airporttitle;

            //$http.get("http://airportcode.riobard.com/search?q=" + mytitle + "&fmt=JSON")
            //$http.jsonp("http://www.cleartrip.com/common/jsonp/airports.json&callback=JSON_CALLBACK")
        $http.jsonp("https://api.flightstats.com/flex/airports/rest/v1/jsonp/active?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68&callback=angular.callbacks._0")

            //$http.jsonp("http://www.myapifilms.com/imdb?title=" + mytitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
            //$http.get("http://services.faa.gov/airport/status/" + mytitle + "?format=application/json")
            //$http.jsonp("https://api.flightstats.com/flex/airports/rest/v1/jsonp/fs/" + mytitle + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68&callback=angular.callbacks._0")
            .success(function (response) {
                console.log(response);

                //console.log(myairportlist.airports);
                var myarray = response.airports;
                console.log(myarray.length);
                // clear dropdown
                $("#airport").html("");
    
                for (var i = 0; i < myarray.length; i++) {
                    var item = myarray[i];
                    $("#airport").append(
                          $("<option></option>").html(item.city + ', ' + item.countryName + '-' + item.iata));
    
                }
    
                $scope.selecteddata = function () {
                    var x = $("#airport").val();
                    console.log(x);
                    $("#displayselected").html(x);
                }
                

            });
        };
    
});