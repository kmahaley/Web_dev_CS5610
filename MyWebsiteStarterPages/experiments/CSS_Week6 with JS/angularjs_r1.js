var myapp = angular.module("routing1", ['ngRoute']);

myapp.controller("controller1", function ($scope) {
   // $scope.hello = "welcome routing";

});

myapp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
      when('/home', {
          templateUrl: 'routing/home.html'
            //             controller: 'PhoneListCtrl'
        }).
      when('/Barcelona F.C.', {
          templateUrl: 'routing/barcelona.html',
          //             controller: 'PhoneListCtrl'
      }).
        when('/Real Madrid C.F.', {
            templateUrl: 'routing/realmadrid.html'
            //               controller: 'PhoneListCtrl'
        }).
        when('/Manchester City F.C.', {
            templateUrl: 'routing/mancity.html'
            //               controller: 'PhoneListCtrl'
        }).
      otherwise({
          redirectTo: '/home'
      });

}]);



