var myapp = angular.module("routing1", ['ngRoute']);

//routing controller
myapp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
      when('/myhome', {
          templateUrl: 'routing/myhome.html'
          //             controller: 'PhoneListCtrl'
      }).
      when('/mycontact', {
          templateUrl: 'routing/mycontact.html'
          //             controller: 'PhoneListCtrl'
      }).
      when('/myprofile/:username', {
          templateUrl: 'routing/myprofile.html',
          controller: 'profilecontrol'
      }).
      when('/myabout', {
          templateUrl: 'routing/myabout.html'
          //             controller: 'PhoneListCtrl'
      }).
      otherwise({
          redirectTo: '/myhome'
      });

    }]);

myapp.controller("profilecontrol", function ($scope, userservice, $routeParams, courseservice) {
    var username = $routeParams.username;

    $scope.username = username;
    $scope.currentuser = userservice.getcurrentuser();
    console.log($scope.currentuser);
    if ($scope.currentuser.role == "professor")
    {
        console.log("inside prof");
        $scope.authoring = courseservice.getcoursebyindices($scope.currentuser.authoring);
        $scope.lecturing = courseservice.getcoursebyindices($scope.currentuser.lecturing);
    }

});

myapp.controller("navcontrol", function ($scope, userservice) {

    $scope.currentuser = null;

    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;
        $scope.currentuser = userservice.login(username, password);

    }

    $scope.logout = function () {
        $scope.currentuser = null;
        userservice.logout();
        $scope.username = null;
        $scope.password = null;

    }

});

myapp.factory("courseservice", function () {
    var courses = [
            { title: "HTML" },
            { title: "CSS" },
            { title: "JQuery" },
            { title: "C#" },
            { title: "SQL" },
            { title: "DB" },
            { title: "C/C++" }];

    var addcourse = function (course) {
        courses.push(course);
    };

    var getcoursebyindex = function (index) {
        return courses[index];
    };

    var getcoursebyindices = function (indices) {
        var responsecourses = [];
        for (var i in indices)
        {
            var course = courses[indices[i]];
            responsecourses.push(course)
        }
        return responsecourses;
    };

    return {
        addcourse: addcourse,
        getcoursebyindex: getcoursebyindex,
        getcoursebyindices: getcoursebyindices
    }
});

myapp.factory("userservice", function () {
    var currentuser = null;

    var users = [
        { username: "john", password: "john", role: "headmaster" },
        { username: "charlie", password: "charlie", role: "professor", authoring: [1, 2, 3], lecturing: [3, 4] },
        { username: "bob", password: "bob", role: "professor", authoring: [2], lecturing: [1,2,3] },
        { username: "harry", password: "harry", role: "student", registered:[2,3,4]}
    ]

        
    var login = function (username, password) {
        for (u in users) {
            if (users[u].username == username && users[u].password == password) {
                currentuser = users[u];
                return users[u];
            }
        }
        return null;

    };

    var logout = function () {
        currentuser = null;
    }

    var getcurrentuser = function () {
        return currentuser;
    };

    return {
        login: login,
        logout: logout,
        getcurrentuser: getcurrentuser
    }
});
