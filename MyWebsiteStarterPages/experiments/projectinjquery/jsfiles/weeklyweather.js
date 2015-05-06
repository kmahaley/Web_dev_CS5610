//Jquery begins here
$(function () {
    $("#waitingclass").hide();
    function tm(unix_tm) {
        var dt = new Date(unix_tm * 1000);
        return dt;
        //console.log(dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ' -- ' + dt );

    }
    $("#weeklyweather").keypress(keypressHandler);
    function keypressHandler(event) {
        // console.log("inside keypressHandler");

        if ((event.keyCode == '13') || (event.keyCode == '10')) {
            // console.log("inside keypressHandler if statement");

            reportweeklyweather();
        }
    }


    $("#searchweeklyweather").click(reportweeklyweather);

    function reportweeklyweather() {
        //console.log("weather search function");
        
        //clearing all data from DOM
        $(".toappend").empty();
        var mydays=$("#select_no_days").val()
        //input from DOM and changing it into upper case
        var mytitle = $("#weeklyweather").val().toUpperCase();

        if ($("#weeklyweather").val() == '') {
            alert('Input can not be left blank');
            $("#weeklyweather").css({ "box-shadow": "2px 2px 0 red inset" });
            $("#weeklyweather").focus();
        }
        else {
            $("#waitingclass").show();
            $("#weeklyheading").html("Weekly weather of " + mytitle);
        //console.log(mytitle);
        //AJAX call to flightstat API
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + mytitle + "&units=metric&cnt=" + mydays,
            dataType: "jsonp",
            success: getweeklyweather,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus + "Error: " + errorThrown);
        }
        });
        }

        function getweeklyweather(myweather) {
            $("#waitingclass").hide();
            //console.log(myweather)
            //console.log(myweather.city.country);

            $.each(myweather.list, function (i, val) {
                var dt = tm(val.dt);
                var humidity1 = val.humidity;
                //console.log(dt);
                //console.log(val.temp.day);
                //var div = $(".toappend");
                var myblock = "<div class='block'>"
                myblock = myblock + "<div>" + dt + "</div>";
                myblock = myblock + myweather.city.name + "," + myweather.city.country;
                myblock = myblock + "<div>Temperature(C): Min " + val.temp.min + " Max " + val.temp.max + ", Humidity " + humidity1 + " </div>";
                myblock = myblock + "<div>Condition: " + val.weather[0].main +" - "+ val.weather[0].description + "</div>";
                switch (val.weather[0].main) {
                    case 'Clouds':
                        myblock = myblock + "<img alt='Clouds' class='smallimage' src='https://jenamcpadden.files.wordpress.com/2010/08/bright_sun_some_clouds.png'></img>";
                        break;
                    case 'Rain':
                        myblock = myblock + "<img alt='Rain' class='smallimage' src='http://images.all-free-download.com/images/graphiclarge/rain_cloud_clip_art_17461.jpg'></img>";
                        break;
                    case 'Clear':
                        myblock = myblock + "<img alt='Clearsky' class='smallimage' src='http://www.wpclipart.com/weather/sun/crystal_clear.png'></img>";
                        break;
                    case 'Snow':
                        myblock = myblock + "<img alt='Snow' class='smallimage' src='http://www.clker.com/cliparts/n/W/z/O/t/O/snow-clouds-hi.png'></img>";
                        break;
                    default:
                        myblock = myblock + "Weather is unpredictable" + "";
                }

                if (val.temp.max < 10) {
                    myblock = myblock + "<img alt='<10' class='smallimage' src='http://www.redseacollege.com/en/wp-content/uploads/2009/12/SHARM-WEATHER3.png'></img>";
                }
                else if (val.temp.max >= 10 && val.temp.max < 20) {
                    myblock = myblock + "<img alt='10<temp<20' class='smallimage' src='http://www.clker.com/cliparts/5/3/a/3/1194989210401174033sun01.svg.med.png'></img>";
                }
                else if (val.temp.max >= 20 && val.temp.max < 30) {
                    myblock = myblock + "<img alt='21<temp<30' class='smallimage' src='http://classroomclipart.com/images/gallery/Clipart/Weather/weather_sun2.jpg'></img>";
                }
                else if (val.temp.max >= 30 && val.temp.max < 40) {
                    myblock = myblock + "<img alt='30<temp<40' class='smallimage' src='http://iconbug.com/data/4d/256/873b30e4a751b523ef2dba9c1bce501c.png'></img>";
                }
                else if (val.temp.max >= 40) {
                    myblock = myblock + "<img alt='temp>41' class='smallimage' src='http://0.tqn.com/d/webclipart/1/S/W/I/6/Sunshine.png'></img>";
                }

                $(".toappend").append(myblock);
            });

        }


    };//searchweeklyweather ends



    

});//Jquery ends