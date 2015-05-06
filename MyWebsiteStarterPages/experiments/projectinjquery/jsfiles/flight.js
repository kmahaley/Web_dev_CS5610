//My global variables
//var title = "";
//var rating = "";
//var releaseDate = "";

var departureairport = "";
var departureairportcode = "";
var departureairportcity = "";
var departureairportcountry = "";
var departureairportlat = "";
var departureairportlong = "";
var arrivalairport = "";
var arrivalairportcode = "";
var arrivalairportcity = "";
var arrivalairportcountry = "";
var arrivalairportlat = "";
var arrivalairportlong = "";
var airlinename = "";
var airlinecontactnumber = "";
var airlinecode = "";
var flightcode = "";
var meandelay = "";
var maxdelay = "";
var mindelay = "";
var cancellation = "";
var ontime = "";

//Jquery function
$(function () {
    $(".mymaintable").hide();
    $(".getmapdata").hide();
    $(".mydetailstable").hide();
    $(".mycodestable").hide();
    $(".displaymycomments").hide();
    $("#waitingclass").hide();
    //console.log("from flight angular");

    $("#inputairlinenumber").keypress(keypressHandler);

    function keypressHandler(event) {
        // console.log("inside keypressHandler");

        if ((event.keyCode == '13') || (event.keyCode == '10')) {
            // console.log("inside keypressHandler if statement");
            mysearchflightfn();
        }
    }

    $("#searchflight").click(mysearchflightfn);

    //mysearchflightfn function begins
    function mysearchflightfn() {
        
       // console.log("searchairport function");

        $(".mymaintable").hide();
        $(".getmapdata").hide();
        $(".mydetailstable").hide();
        $(".mycodestable").hide();
        

        $(".myairlinename").empty();
        $(".departureairport").empty();
        $(".arrivalairport").empty();
        $(".airlinecode").empty();
        $(".flightcode").empty();
        $(".ontime").empty();

        $(".departureairportlat").empty();
        $(".arrivalairportlat").empty();
        $(".departureairportlong").empty();
        $(".arrivalairportlong").empty();

        $(".givenairline").empty();
        $(".departurea").empty();
        $(".arrivala").empty();

        $(".maxdelay").empty();
        $(".mindelay").empty();
        $(".meandelay").empty();
        $(".cancellation").empty();


        if ($("#inputairlinecode").val() == '' || $("#inputairlinenumber").val() == '') {
            alert('Input can not be left blank');
            $("#inputairlinecode").css({ "box-shadow": "2px 2px 0 red inset" });
            $("#inputairlinenumber").css({ "box-shadow": "2px 2px 0 red inset" });
            $("#inputairlinecode").focus();
        }
        else {
            $("#inputairlinecode").css({ "box-shadow": "2px 2px 0 #454545 inset" });
            $("#inputairlinenumber").css({ "box-shadow": "2px 2px 0 #454545 inset" });

            var inputairlinecode = $("#inputairlinecode").val().toUpperCase();
            var inputairlinenumber = $("#inputairlinenumber").val();

            $("#inputairlinecode").val('');
            $("#inputairlinenumber").val('');
            $("#waitingclass").show();

            var fstring1 = "https://api.flightstats.com/flex/ratings/rest/v1/jsonp/flight/";
            var fstring2 = "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68";
            var flighturl = fstring1 + inputairlinecode + "/" + inputairlinenumber + fstring2;
            //console.log(flighturl);

            //AJAX call to flightstats
            $.ajax({

                url: flighturl,
                dataType: "jsonp",
                cache: false,
                success: getmyflightdetails,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus + "Error: " + errorThrown);
                }

            });
        }

        //getmyflightdetails begins
        function getmyflightdetails(response) {
           // console.log(response)
            $(".displaymycomments").show();
            $("#waitingclass").hide();

            for (var m in response.ratings) {
                rate1 = response.ratings[m];

                airlinecode = rate1.airlineFsCode;
                flightcode = rate1.flightNumber;
                meandelay = rate1.delayMean;
                maxdelay = rate1.delayMax;
                mindelay = rate1.delayMin

                cancellation = Math.round((rate1.cancelled * 100) / rate1.observations).toFixed(2);
                ontime = Math.round((rate1.ontime * 100) / rate1.observations).toFixed(2);
                //console.log(ontime);
            }


            airlinename = response.appendix.airlines[0].name;
            airlinecontactnumber = response.appendix.airlines[0].phoneNumber;
           // console.log(airlinename);

            departureairportcountry = response.appendix.airports[0].countryName
            departureairportcity = response.appendix.airports[0].city
            departureairport = response.appendix.airports[0].name
            departureairportlat = response.appendix.airports[0].latitude
            departureairportlong = response.appendix.airports[0].longitude
            departureairportcode = response.appendix.airports[0].iata
            //console.log(departureairportcountry);

            arrivalairportcountry = response.appendix.airports[1].countryName
            arrivalairportcity = response.appendix.airports[1].city
            arrivalairport = response.appendix.airports[1].name
            arrivalairportlat = response.appendix.airports[1].latitude
            arrivalairportlong = response.appendix.airports[1].longitude
            arrivalairportcode = response.appendix.airports[1].iata
            //console.log(arrivalairportcountry);

            if (arrivalairportcity != "")
                $(".mymaintable").fadeIn("slow");
            //$(".departureairport").html(title);

            $(".myairlinename").html(airlinename + " - " + flightcode);
            $(".departureairport").html(departureairportcity);
            $(".arrivalairport").html(arrivalairportcity);
            $(".airlinecode").html(airlinecode);
            $(".flightcode").html(flightcode);
            $(".ontime").html(ontime);

        }
        //getmyflightdetails ends
    };
    //mysearchflightfn ends



    $("#flightgetdetailsdata").click(function () {
        $(".mydetailstable").fadeToggle("slow");

        var givenairline = $(".givenairline");
        var li = $("<li>").append(airlinename);
        $("<li>")
                .append(airlinecontactnumber)
                .appendTo(li);

        givenairline.append(li);

        var departurea = $(".departurea");
        var li = $("<li>").append(departureairportcountry);
        $("<li>")
                .append(departureairportcity)
                .appendTo(li);
        $("<li>")
                .append(departureairportcode)
                .appendTo(li);
        $("<li>")
                .append(departureairport)
                .appendTo(li);

        departurea.append(li);

        var arrivala = $(".arrivala");
        var li = $("<li>").append(arrivalairportcountry);
        $("<li>")
                .append(arrivalairportcity)
                .appendTo(li);
        $("<li>")
                .append(arrivalairportcode)
                .appendTo(li);
        $("<li>")
                .append(arrivalairport)
                .appendTo(li);

        arrivala.append(li);
        window.location = '#mydetailstable';
    });

    $("#flightgetcodesdata").click(function () {
        $(".mycodestable").fadeToggle("slow");
        //console.log(iata);
        //$(".cancellation").html(rating);

        $(".cancellation").html(cancellation);
        $(".maxdelay").html(maxdelay);
        $(".mindelay").html(mindelay);
        $(".meandelay").html(meandelay);

        window.location = '#mycodestable';
    });

    $("#flightgetmapdata").click(function () {
        $(".getmapdata").fadeToggle("slow");

        $(".departureairportlat").html(departureairportlat);
        $(".departureairportlong").html(departureairportlong);
        $(".arrivalairportlat").html(arrivalairportlat);
        $(".arrivalairportlong").html(arrivalairportlong);
        //console.log(myflightrating.appendix.airports);
        var directionsdisplay;
        var directionsservice = new google.maps.DirectionsService();
        var map;

        //var airport = myflightrating.appendix.airports;
        var locations = [
            [departureairportcity, departureairportlat, departureairportlong, departureairportcountry],
            [arrivalairportcity, arrivalairportlat, arrivalairportlong, arrivalairportcountry]
        ];


        //console.log(locations);

        var infowindow = new google.maps.InfoWindow();
        var marker, i;

        map = new google.maps.Map(document.getElementById('googlemap'), {
            zoom: 4,
            center: new google.maps.LatLng(departureairportlat, departureairportlong),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                animation: google.maps.Animation.DROP,
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    //to get animation on maps
                    if (marker.getAnimation() != null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    }
                    //to display content on the map city names
                    infowindow.setContent(locations[i][0] + ", " + locations[i][3]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }

        var flightplancoordinates = [
                                        new google.maps.LatLng(departureairportlat, departureairportlong),
                                        new google.maps.LatLng(arrivalairportlat, arrivalairportlong)

        ];

        var flightpath = new google.maps.Polyline({
            path: flightplancoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });


        var flightpathD = new google.maps.Polyline({
            path: flightplancoordinates,
            geodesic: false,
            strokeColor: '#454545',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });

        flightpath.setMap(map);
        flightpathD.setMap(map);


        /*//this code is to get driving,cycling and transit travel modes "FLIGHT" mode not available yet on google API
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map);

        var start = new google.maps.LatLng(airport[0].latitude, airport[0].longitude);
        var end = new google.maps.LatLng(airport[0].latitude, airport[0].longitude);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });*/

    });

    var comments = ['Flight was not bad at all, seats Ok, staff very good. Slight delay, but staff were very efficient at helping us to the connecting flight.',
        'On all my journeys I was either unable to have my choice of menu, because they had run out or the meal quality was extremely poor.',
        'The food was quite poor and head phones were collected 30 minutes before landing. Certainly service levels have declined significantly compared to 2 years ago.'];


    var commentstable = $("#commentstable");
    var ticketHeadersRow = "<thead> <tr>";
    ticketHeadersRow = ticketHeadersRow + "<th><h2>" + "Trip reviews" + "</h2></th> </tr> </thead>";

    $("#commentstable").append(ticketHeadersRow);
    $.each(comments, function (index, value) {
        //console.log(value);
        var tr = "<tr>";
        tr = tr + "<td>" + value + "</td> </tr>";
        $("#commentstable").append(tr);

    });

    $("#addcomment").click(function () {
        $("#commentstable").empty();

        comments.push($("#comment").val());
        //console.log(comments);
        var commentstable = $("#commentstable");
        var ticketHeadersRow = "<thead> <tr>";
        ticketHeadersRow = ticketHeadersRow + "<th><h2 class='colorchange'>" + "Experience" + "</h2></th> </tr> </thead>";

        $("#commentstable").append(ticketHeadersRow);
        $.each(comments, function (index, value) {
            //console.log(value);
            var tr = "<tr>";
            tr = tr + "<td>" + value + "</td> </tr>";
            $("#commentstable").append(tr);

        });
        $("#comment").val('');
    });

});

