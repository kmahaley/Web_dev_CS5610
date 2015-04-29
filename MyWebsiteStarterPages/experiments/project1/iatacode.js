$(function () {
    var splitData = [];
    $.ajax({
        url: 'code.txt',
        dataType: 'text',
        async: false,
        cache: false,
        success: function (data) {
            //console.log(data);
            //splitting the data by commas (i presume that with csv you mean comma seperated values file)
             splitData = data.split("\n");
            //console.log(splitData);
            //looping through the data
             $.each(splitData, function (i, val) {
                 var iata = val.substring(val.indexOf(0), val.indexOf(','));
                 var name = val.substring(val.indexOf(',')+1, val.indexOf(';'));
                 var city = val.substring(val.indexOf(';')+1, val.indexOf('#'));
                 var country = val.substring(val.indexOf('#')+1, val.indexOf('!'));
                 var complete = country+", "+city+", "+ name + ", " + iata;
                 $('#select_id').append("<option value=\"" + complete + "\">" + city + "</option>");

            });

            //current phone number is stored in "pn", appending a new option with value of the current phone number to the multiple select box with id "select_id"
            $("#selecteddata").click(function () {
                console.log($("#select_id").val());
                $("#displayselected").html($("#select_id").val());
            });
            
        }
    });

})