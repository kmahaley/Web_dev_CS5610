var myapp = angular.module("routing1", ['ngRoute']);
/*
myapp.controller("controller1", function ($scope) {
   // $scope.hello = "welcome routing";

});

*/

myapp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
      when('/search', {
          templateUrl: 'routing/search.html'
          ,controller: 'homectrl'
        }).
      when('/favorites', {
          templateUrl: 'routing/favorites.html'
          , controller: 'favoritesctrl'
      }).
      otherwise({
          redirectTo: '/search'
      });

}]);

myapp.controller("homectrl", function ($scope, movieservice) {
    $scope.searchmovie = function () {
        movieservice.search($scope.movietitle, function (response) {
            $scope.movies = response;
        });
    }

    $scope.starteam = function (movie) {
        movieservice.starteam(movie)
    }


});

myapp.controller("favoritesctrl", function ($scope, movieservice) {
    $scope.myfavmovies = movieservice.getmyfavmovies();

    $scope.removemyfavteam = function (movie) {
        movieservice.removemyfavteam(movie);
    }
});
