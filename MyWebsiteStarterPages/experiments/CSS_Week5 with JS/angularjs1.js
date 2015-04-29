var myapp = angular.module("angularjs1", []);

myapp.controller("controller1",
    function ($scope) {
        /* 
       $scope.var1 = "from the angular JS";
       var employee = {
            first: "John",
            last: "Wick"
        };
        $scope.employee = employee;
        
        */
        console.log("hello world angularjs 1 and 2");
        var teams = [
        { name: "MS Dhoni", team: "India" },
        { name: "M clark", team: "Australia" },
        { name: "Williamson", team: "England" }];

        $scope.teams = teams;

    });

myapp.controller("controller2", function ($scope) {

    $scope.myfavteams = [];
    //console.log("hello world from controller2");
    var teams = [
        { team: "India", capt: "MS Dhoni", ranking: "2", points: "290", homegd: "Sydney" },
        { team: "Australia", capt: "M clark", ranking: "1", points: "310", homegd: "Adelaide" },
        { team: "England", capt: "Williamson", ranking: "3", points: "260", homegd: "Wellington" },
        { team: "South Africa", capt: "Miller", ranking: "4", points: "220", homegd: "Melbourne" },
        { team: "Pakistan", capt: "Misbah", ranking: "5", points: "200", homegd: "Wellington2" },
        { team: "West Indies", capt: "Samuels", ranking: "6", points: "150", homegd: "Perth" }];

    $scope.teams = teams;

    //function to add team
    $scope.addteam = function () {
        //console.log($scope.newteam.team);
       var newteam = {
            team: $scope.newteam.team,
            capt: $scope.newteam.capt,
            ranking: $scope.newteam.ranking,
            points: $scope.newteam.points,
            homegd: $scope.newteam.homegd
        };
        $scope.teams.push(newteam);
    };

    //function to remove the team
    $scope.removeteam = function (team) {
        var index = $scope.teams.indexOf(team);
        $scope.teams.splice(index, 1);
    };

    //select and edit movie
    $scope.editteam = function (team) {
        $scope.newteam = team;
    };

    //clear  text boxes
    $scope.clear = function () {
        $scope.newteam = "";
    };

    //connect db here
    $scope.updatedb = function () {
        console.log("call DB here");
    }

    $scope.starteam = function (team) {
        
        $scope.myfavteams.push(team);
    };

    //remove my favorite movies
    $scope.removemyfavteam = function (team) {
        var index = $scope.myfavteams.indexOf(team);
        $scope.myfavteams.splice(index, 1);
    };

});



