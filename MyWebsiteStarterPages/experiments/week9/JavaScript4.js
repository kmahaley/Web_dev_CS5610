var myapp = angular.module("a", []);

myapp.controller("b", function ($scope, $http) {

    console.log("from exp2 angular");

    $scope.getdata = function () {
            var mytitle = $scope.airporttitle;
        // Put the object into storage
            $http.jsonp("http://www.myapifilms.com/imdb?title=" + mytitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
            .success(function (response) {
                //console.log(response);
                
                //console.log(myairportlist.airports);
                //var myarray = response;
                localStorage.setItem('testObject', JSON.stringify(response));
                
            });

    };

    $scope.populate = function () {
        var retrievedObject = localStorage.getItem('testObject');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        var myarray = JSON.parse(retrievedObject);
        console.log(myarray.length);
        // clear dropdown
        $("#airport").html("");

        for (var i = 0; i < myarray.length; i++) {
            var item = myarray[i];
            $("#airport").append(
                  $("<option></option>").html(item.title + '-' + item.idIMDB));

        }
    };

    $scope.showdata = function () {
        // Retrieve the object from storage
       
        var x = $("#airport").val();
        console.log(x);
        $("#displayselected").html(x);
    };

    
});