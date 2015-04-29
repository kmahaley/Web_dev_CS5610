var myapp = angular.module("angularjs3", []);


myapp.controller("controller1", function ($scope, $http) {

    $scope.myfavmovies = [];

    //Search movie bt title
    $scope.searchmovie = function () {
        var mytitle = $scope.movietitle;
        $http.jsonp("http://www.myapifilms.com/imdb?title=" + mytitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
        .success(function (response) {
        $scope.movies = response;

    });
    };


    //function to add team
    $scope.addteam = function () {
        //console.log($scope.newteam.team);
       var newteam = {
           title: $scope.newteam.title,
           year: $scope.newteam.year,
            rating: $scope.newteam.rating,
            rated: $scope.newteam.rated,
            plot: $scope.newteam.plot   
        };
        $scope.movies.push(newteam);
    };

    //clear data from text boxes
    $scope.clear = function () {
        $scope.newteam = "";
    };

    //connect db here
    $scope.updatedb = function () {
        console.log("call DB here");
    };

    //function to remove the team
    $scope.removeteam = function (movie) {
        var index = $scope.movies.indexOf(movie);
        $scope.movies.splice(index, 1);
    };

    //select and edit movie
    $scope.editteam = function (movie) {
        $scope.newteam = movie;
    };

    $scope.starteam = function (movie) {
        $scope.myfavmovies.push(movie);
    };

    //remove my favorite movies
    $scope.removemyfavteam = function (movie) {
        var index = $scope.myfavmovies.indexOf(movie);
        $scope.myfavmovies.splice(index, 1);
    };
    
});



