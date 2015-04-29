var myapp = angular.module("a", []);

myapp.controller("b", function ($scope, $http) {

    console.log("from exp2 angular");

    $scope.getdata = function () {
            var mytitle = $scope.airporttitle;
        // Put the object into storage
            
            localStorage.setItem('testObject', JSON.stringify(mytitle));

    };

    $scope.showdata = function () {
        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('testObject');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    };

    
});