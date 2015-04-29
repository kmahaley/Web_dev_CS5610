var myapp = angular.module("app_p1_p7", []);

myapp.controller("controller_p1_p7", function ($scope, $http) {

    console.log("from controller_p1_p7 login exp");
    
    
    $scope.submituser = function () {
        var username = $scope.username;
        var password = $scope.password;
        // Put the object into storage

        localStorage.setItem('myusername', JSON.stringify(username));
        localStorage.setItem('mypassword', JSON.stringify(password));
       

    };

    
    $scope.showuser = function () {
        // Retrieve the object from storage
        var retrievedObject1 = localStorage.getItem('myusername');
        $("#displayselected").html(JSON.parse(retrievedObject1));
        console.log('retrievedObject: ', JSON.parse(retrievedObject1));
        
    };

    $scope.logoutuser = function () {
        localStorage.removeItem('myusername');
        var retrievedObject1 = localStorage.getItem('myusername');
        console.log('retrievedObject: ', JSON.parse(retrievedObject1));
        $("#displayselected").html(JSON.parse(retrievedObject1));
    };

 

    

});

