$(function () {
    jQuery.get('getapikey.txt', function (data) {
        //alert(data);
        var myapikey = data;
        //process text file line by line
        $('#div').html(myapikey);
    });

})