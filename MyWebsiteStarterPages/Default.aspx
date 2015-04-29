<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset='utf-8' />
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <link rel="shortcut icon" href="images/kartik.jpg" type="image/jpg">
    <title>Kartik's Home Page</title>
    <link rel="stylesheet" href="experiments/CSS_Week1/Layout.css" />
    <script src="experiments/CSS_Week1/Layout.js"></script>
</head>

<body>

    <div>

        <form id="form1" runat="server">

            <div class="headerclass">

                <ul class="master_navigation">
                    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                    <li><a href="statistics/" target="_blank">Statistics</a></li>
                    <li><a href="source/" target="_blank">Source</a></li>
                    <li><a href="search/" target="_blank">Search</a></li>
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
                <h3>CS 5610, Spring 2015-Web Development, Northeastern University</h3>
                <p>
                    I am a candiadate for Masters in Computer Science at Northeastern University, Boston. I did my undergraduation 
                from University of Mumbai, India. Welcome to my website. This website is developed as a part of my curriclum. I'll be trying out different
                technologies taught under this course like HTML, CSS, JQuery, Angularjs, Nodejs and Mongo DB. Feel free to visit site pages, 
                please find links to my experiments and project. 
                </p>
                <p>My Experiments link have all the trials and experiments which later on combined to my project.
                   I have developed a project on travel site called "SkyNet" where travellers can search their favorite holiday 
                   destination and check airlines/flights which are available and rated best to enhance holiday and travel experience. 
                   Please feel free to hover on different links. Thank you for visiting!</p>
            </div>
            <div class="eastclass">
                <a href="story/index.htm?../experiments/" target="_blank" class="MyExperiments">MyExperiments</a><br />
                <a href="experiments/projectinjquery/indexpage.html" target="_blank" class="MyExperiments">Project</a><br />
                <a href="story/index.htm?../experiments/projectinjquery/documentation/" target="_blank" class="MyExperiments">Documentation</a><br />
                <div>
                    <b>Contact:</b>
                    <nav>
                        <a href="https://www.facebook.com/" target="_blank">
                            <img class="contact" src="https://www.autismnj.org/image/icons/Facebook-Icon-4.png" alt="Facebook" />
                        </a>
                        <a href="https://plus.google.com/u/0/" target="_blank">
                            <img class="contact" src="http://4.bp.blogspot.com/-Jz_cRKndTSo/Ubj4KGkMFJI/AAAAAAAALMA/IL_EQ3igxvc/s400/G+.png" alt="Google+" />
                        </a>
                        <a href="https://www.linkedin.com/hp/?dnr=RDEhXXdPLf4jp_lZ4hZAPv4rLzXjp6PEX8a" target="_blank">
                            <img class="contact" src="http://www.bsigroup.com/LocalFiles/pt-BR/images/icon-linkedin.png" alt="Linkedin" />
                        </a>
                        
                    </nav>
                </div>
            </div>

            <div class="current">
                <div class="northeasternclass">
                    <img src="http://www.graduateguide.com/images/544/Northeastern_University_3.jpg" alt="Northeastern University" id="northeastern" /></div>
            </div>

            <div class="footerhead">
                <div class="footerclass">

                    <h3>Northeastern University &copy; Spring 2015, CS5610 Web Dev class</h3>

                </div>
            </div>
        </form>
    </div>
</body>
</html>
