var myapp = angular.module("angularjs4", []);

myapp.controller("controller4",
    function ($scope) {
        //console.log("hello from 4");
       
        $scope.message = "";
        $scope.left = function () {
            return 250 - $scope.message.length;
        };
        $scope.clear = function () {

            $scope.message = "";
        };
        $scope.save = function () {
            alert("Data Saved");
        };

        var  countries = [
            { name: "India", population: "1 billion" },
            { name: "Germany", population: "40 million" },
            { name: "US", population: "200 million" },
            { name: "France", population: "20 million" },
            { name: "Australia", population: "100 million" }
        ];

        $scope.countries = countries;

        var friends = ["packy", "abhya", "shakty", "vicky"];

        $scope.friends = friends;

        $scope.count = 0;
});



