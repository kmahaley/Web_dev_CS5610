//My global variables
var srccountryname = "";
var srccountrycode = "";
var srccityname = "";
var srccitycode = "";
var srcairportname = "";

var destcountryname = "";
var destcountrycode = "";
var destcityname = "";
var destcitycode = "";
var destairportname = "";

var myairportsource = "";
var myairportdestination = "";
var myairlinesdata = "";
var myflightslistdata = "";
var data = "";



$(function () {
    $(".mymaintable").hide();
    $(".mydetailstable").hide();
    $(".mycodestable").hide();
    $("#waitingclass").hide();
   
    //console.log("from route angular");
    $("#toairporttitle").keypress(keypressHandler);

    function keypressHandler(event) {
        // console.log("inside keypressHandler");

        if ((event.keyCode == '13') || (event.keyCode == '10')) {
            // console.log("inside keypressHandler if statement");
            
            mysearchroutefn();
        }
    }

    $("#searchrouteairport").click(mysearchroutefn);

    // $("#searchrouteairport").click(function () {
    function mysearchroutefn() {
        //console.log("searchrouteairport function");

        $(".mymaintable").hide();
        $(".mydetailstable").hide();
        $(".mycodestable").hide();
        

        $(".srcairport").empty();
        $(".destairport").empty();
        $("#getairlinesforroute").empty();

        $(".routeairlinename").empty();
        $("#getairlinesflightforroute").empty();
        $(".utcOffsetHours").empty();

        if ($("#fromairporttitle").val() == '' || $("#toairporttitle").val() == '') {
            alert('Input can not be left blank');
            
            $("#fromairporttitle").css({ "box-shadow": "2px 2px 0 red inset" });
            $("#toairporttitle").css({ "box-shadow": "2px 2px 0 red inset" });
            $("#fromairporttitle").focus();
        }
        else {
            $("#fromairporttitle").css({ "box-shadow": "2px 2px 0 #454545 inset" });
            $("#toairporttitle").css({ "box-shadow": "2px 2px 0 #454545 inset" });

            var srcairport = $("#fromairporttitle").val().toUpperCase();
            var destairport = $("#toairporttitle").val().toUpperCase();

            $("#fromairporttitle").val('');
            $("#toairporttitle").val('');

            $("#waitingclass").show();
            //console.log(srcairport);
            $.ajax({
                //url: "http://www.myapifilms.com/imdb?title=" + srcairport + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N",
                url: "https://api.flightstats.com/flex/ratings/rest/v1/jsonp/route/" + srcairport + "/" + destairport + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68",
                dataType: "jsonp",
                success: getmyroutesdetails,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus + "Error: " + errorThrown);
                }

            });
        }

        function getmyroutesdetails(response) {
            //console.log(response)
            $("#waitingclass").hide();
            myairportsource = (response.appendix.airports[0]);
            myairportdestination = (response.appendix.airports[1]);
            myairlinesdata = response.appendix.airlines;
            myflightslistdata = response.ratings;
            //console.log(myflightslistdata);

            srccountryname = myairportsource.countryName;
            srccountrycode = myairportsource.countryCode;
            srccityname = myairportsource.city;
            srccitycode = myairportsource.cityCode;
            srcairportname = myairportsource.name;

            destcountryname = myairportdestination.countryName;
            destcountrycode = myairportdestination.countryCode;
            destcityname = myairportdestination.city;
            destcitycode = myairportdestination.cityCode;
            destairportname = myairportdestination.name;

            $(".destcityname").html(destcityname);
            $(".srccityname").html(srccityname);

            var srcairportul = $(".srcairport");
            var li = $("<li>").append(srccountryname);
            $("<li>")
                    .append(srccountrycode)
                    .appendTo(li);
            $("<li>")
                    .append(srccityname)
                    .appendTo(li);
            $("<li>")
                    .append(srccitycode)
                    .appendTo(li);
            $("<li>")
                    .append(srcairportname)
                    .appendTo(li);

            srcairportul.append(li);


            var destairportul = $(".destairport");
            var li = $("<li>").append(destcountryname);
            $("<li>")
                    .append(destcountrycode)
                    .appendTo(li);
            $("<li>")
                    .append(destcityname)
                    .appendTo(li);
            $("<li>")
                    .append(destcitycode)
                    .appendTo(li);
            $("<li>")
                    .append(destairportname)
                    .appendTo(li);

            destairportul.append(li);

            if (destairportname != "")
                $(".mymaintable").fadeIn("slow");


            

           /* $("#getmyairlinesflight").click(function () {
                console.log("fired");
                $($("#getmyairlinesflight5").parent().parent().children()[1]).html();
            });*/

            //$(".mydetailstable").fadeToggle("slow");
            


        }

        
    };

    $("#getairlines").click(function () {
        $(".mydetailstable").fadeToggle("slow");
        var airlinestable = $("#getairlinesforroute");
        var ticketHeadersRow = "<thead> <tr>";
        ticketHeadersRow = ticketHeadersRow + "<th class='colorchange'>" + "Airline Code" + "</th>";
        ticketHeadersRow = ticketHeadersRow + "<th class='colorchange'>" + "Airline Name" + "</th>";
        ticketHeadersRow = ticketHeadersRow + "<th class='colorchange'>" + "Phone Number" + "</th> </tr> </thead>";
        //ticketHeadersRow = ticketHeadersRow + "<th>" + "Action" + "</th> </tr> </thead>";
        $("#getairlinesforroute").empty();
        $("#getairlinesforroute").append(ticketHeadersRow);

        for (var m in myairlinesdata) {
            data = myairlinesdata[m];

            var tr = "<tr>";
            tr = tr + "<td class='westtd'>" + data.iata + "</td>";
            tr = tr + "<td class='westtd'>" + data.name + "</td>";
            tr = tr + "<td class='westtd'>" + (data.phoneNumber ? data.phoneNumber : "No number") + "</td>";
            //tr = tr + "<td class='westtd'><button id='getmyairlinesflight"+m+"*"+data.iata+"')'>Flights</button></td> </tr> ";

            $("#getairlinesforroute").append(tr);
        }

    });
    

    $("#getflights").click(function () {
        $(".mycodestable").fadeToggle("slow");
        var flightsstable = $("#getairlinesflightforroute");
        var ticketHeadersRow = "<thead> <tr>";
        ticketHeadersRow = ticketHeadersRow + "<th class='colorchange'>" + "Airline Code" + "</th>";
        ticketHeadersRow = ticketHeadersRow + "<th class='colorchange'>" + "Flight Number" + "</th>";
        ticketHeadersRow = ticketHeadersRow + "<th class='colorchange'>" + "On Time Performance" + "</th>";
        ticketHeadersRow = ticketHeadersRow + "<th class='colorchange'>" + "Mean delay" + "</th> </tr> </thead>";
        //ticketHeadersRow = ticketHeadersRow + "<th>" + "Action" + "</th> </tr> </thead>";
        $("#getairlinesflightforroute").empty();
        $("#getairlinesflightforroute").append(ticketHeadersRow);

        for (var m in myflightslistdata) {
            var flight = myflightslistdata[m];

            var tr = "<tr>";
            tr = tr + "<td class='westtd'>" + flight.airlineFsCode + "</td>";
            tr = tr + "<td class='westtd'>" + flight.flightNumber + "</td>";
            tr = tr + "<td class='westtd'>" + Math.round(flight.ontimePercent * 100).toFixed(2); + "</td>";
            tr = tr + "<td class='westtd'>" + (flight.delayMean ? flight.delayMean : "100% Ontime") + "</td>";
            //tr = tr + "<td class='westtd'><button id='getmyairlinesflight"+m+"*"+data.iata+"')'>Flights</button></td> </tr> ";
            
            $("#getairlinesflightforroute").append(tr);
        }

    });

});

