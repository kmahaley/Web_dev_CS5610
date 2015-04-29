var myapp = angular.module("routing1", []);

myapp.controller('ctrl1', function ($scope) {
    console.log("from name");
    $scope.names = ['Batista', 'The Rock', 'Triple H'];

    $scope.addname = function () {
        $scope.names.push($scope.enteredname);
        $scope.enteredname = '';
    };

    $scope.removename = function (name) {
        var index = $scope.names.indexOf(name);
        $scope.names.splice(index, 1);
    };
});