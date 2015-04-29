myapp.factory('movieservice', function movieservice($http) {

    //Search movie bt title
    var searchmovie = function (mytitle, callback) {
        
        $http.jsonp("http://www.myapifilms.com/imdb?title=" + mytitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
        .success(callback);
    }
    
    //adding favorite movie to the array defined below
    var myfavmovies = [];
    var starteam = function (movie) {
        myfavmovies.push(movie);
    };
    
    var getmyfavmovies = function () {
        return myfavmovies;
    }

    //remove my favorite movies
    var removemyfavteam = function (movie) {
        var index = myfavmovies.indexOf(movie);
        myfavmovies.splice(index,1);
    };

    //exposing functions to return values
    return {
        search: searchmovie,
        starteam: starteam,
        getmyfavmovies: getmyfavmovies,
        removemyfavteam:removemyfavteam
    }
});