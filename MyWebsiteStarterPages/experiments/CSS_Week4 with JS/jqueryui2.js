$(function () {

    
    var h4 = $("h4");
    h4.click(clickme);

    function clickme() {
        console.log("clicked")
        h4.css("color", "red");

    }
    //jquery object on click calls function "addmycontent"
    $("#addcontent").click(addmycontent);

    //my function defination
    function addmycontent()
    {
        var h = $("<h3 contenteditable='true'>My new H3 tage content and click me to edit or drag</h3>");
        h.draggable({ grid: [10, 10] })

         .click(function () {
            console.log("clicked")
            h.css("color", "red");
        })
        $(".appendhere").append(h);
    }

    //Clears all created content
    $("#clearcontent").click(removemycontent);
    function removemycontent()
    {
        $(".appendhere").empty();
    }

    //Saving the newly created paragraphs
    $("#savecontent").click(savemycontent);
    function savemycontent()
    {
        var myp = $("h3");
        var myarray = [];
        myp.each(function (index, item) {
            var a = $(item);
            var pos = a.position();
            var text = a.text();
            console.log(text);
            console.log(pos);
            var aobj = {
                text: text,
                x: pos.left,
                y: pos.top
            };
            myarray.push(aobj);
            //console.log(myarray);
            pStr = JSON.stringify(myarray);
            localStorage.setItem("mypage", pStr);
        })
    }

    $("#loadcontent").click(loadmycontent);
    function loadmycontent()
    {
        //console.log("load");
        var page = localStorage.getItem("mypage");
        page = JSON.parse(page);
        if (page == null)
            return;

        //console.log(page);
        for(var p in page)
        {
            //console.log(p);
            var para = page[p];
            var text = para.text;
            var x= para.x;
            var y = para.y;
            
            console.log(text+x + y);
        }
        
    }

})