$(function () {
    $("#title").hide();
    $("#title2").hide();
    $("#tabs")
        .tabs();

    $("#getmovietitle").click(callajax)

    function callajax()
    {
        $("#movies").empty();
        $("#title").show();
        $("#title2").hide();
        var movietitle = $("#movietitle").val();
        $("#title").show();
        $("#movies").empty();
        $.ajax({

            url: "http://www.myapifilms.com/imdb?title=" + movietitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N",
            dataType: "jsonp",

            success: getmymovies

        });
        
    }

    function getmymovies(movies) {
        $("#title").hide();
        $("#title2").hide();
        var ul = $("#movies");
        for (var m in movies)
        {
            movie = movies[m];
            var title = movie.title;
            var plot = movie.plot;
            var urlPoster = movie.urlPoster;
            var li = $("<li>").append(title);
            $("<p>")
                .append(plot)
                .appendTo(li);

            $("<img>")
                .attr("src", urlPoster)
                .appendTo(li);

            ul.append(li);
            

        }
        $("#title2").show();
        var maintitle = "Please find list of movies below";
        $("#title2")
            .html(maintitle)
            .css({
                "color": "white",
                "background-color": "#1d529c"
        });

    }


});

