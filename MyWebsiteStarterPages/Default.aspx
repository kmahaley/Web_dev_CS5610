<%@ Page Language="C#" %>
<script runat="server">
    <%-- This demo page has no server side script --%>
</script>
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset='utf-8' />

    <title>Kartik's Home Page</title>
    <link rel="stylesheet" href="experiments/CSS_Week1/Layout.css" />

</head>

<body >
    
    <div>
    
        <form id="form1" runat="server">
            <div class="headerclass">
                
                <ul class="master_navigation">
                    <li><a href="sitestatistics/" target="_blank" >SiteStatistics</a></li>
                    <li><a href="statistics/" target="_blank" >Statistics</a></li>
                    <li><a href="source/" target="_blank" >Source</a></li>
                    <li><a href="search/" target="_blank" >Search</a></li>
                    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                    <li><a href="textview/" target="_blank">TextView</a></li>
                    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
                    <li><a href="blog/" target="_blank">Blog</a></li>

                </ul>
            </div>
            <div class="westclass">
                    <img src="images/kartik.jpg" class="image_class" title="Kartik" alt="Kartik Mahaley" height="200" width="200" />
            </div>
            <div class="mainclass">
                <h1>Kartik Mahaley</h1>
                <h3>CS 5610, Spring 2015-Web Development</h3>
                <p>Welcome to my website. This website is developed as a part of my curriclum. I'll be trying out different</p><p> technologies taught under this course. Below are the links to my experiments conducted during course study.</p> 
                <p>Website is under construction. Please feel free to visit site pages. Thank you for visiting!</p>

            </div>
            <div class="eastclass">
                <a href="story/index.htm?../experiments/" target="_blank" id="MyExperiments">MyExperiments</a>
            </div>
            <div class="footerclass">Northeastern University &copy; Spring 2015, CS5610 Web Dev class</div>
        </form>
    </div>
</body>
</html>
