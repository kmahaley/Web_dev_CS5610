var myapp = angular.module("angularjs5", []);

myapp.controller("controller5",
    function ($scope) {
        //console.log("hello from 5");

        $scope.calculate = function () {

            var cal = $scope.quantity * $scope.currency
            $scope.display = cal;
        };

        $scope.mySwitch = true;
        
        $scope.hellomsg = function () {

            var hello = "you have successfully clicked me";
            $scope.hello = hello;
        };
        
    });

