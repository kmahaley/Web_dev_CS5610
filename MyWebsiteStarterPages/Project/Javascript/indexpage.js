var myindexpageapp = angular.module("indexpage", ['ngRoute']);

myindexpageapp.controller("indexpagecontroller", function ($scope) {
    console.log("routing");

});

myindexpageapp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
      when('/home', {
          templateUrl: 'projecthome.html',
          
      }).
      when('/Airports', {
          
          templateUrl: '../mypages/airports.html',
          controller: 'airportscontroller',
      }).
        when('/Flights', {
            templateUrl: '../mypages/flights.html',
            controller: 'flightscontroller'
        }).
        when('/Routes', {
            templateUrl: '../mypages/routes.html',
            controller: 'routescontroller'
        }).
         when('/Weather', {
             templateUrl: '../mypages/weather.html',
             controller: 'weathercontroller'
         }).
         when('/About us', {
             templateUrl: 'aboutus.html'
             
         }).
        when('/credits', {
            templateUrl: 'credits.html'

        }).
      otherwise({
          redirectTo: '/home'
      });

}]);

