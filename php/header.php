<!-- i have never used PHP before so dont make fun of me too much -->

<?php
<div id="taskbarDiv">
    <h1 id="pageTitle" class="defaultFont"></h1>  <!-- Page Title -->
    <ul id="taskbarItem" class="listHideDots" style="padding: 0">
        <li>
            <button id="homeButton" class="defaultFont rotateHover defaultButton" 
                onmouseover="JavaScript: startButtonRotation(document.getElementById('homeButton'));"
                onmouseout="JavaScript: stopButtonRotation(document.getElementById('homeButton'));"
                onclick="JavaScript: loadNewPage('index.html');">
            home</button> <!-- Home Button -->
        </li>

        <li>
            <button id="videogamingButton" class="defaultFont rotateHover defaultButton" 
                onmouseover="JavaScript: startButtonRotation(document.getElementById('videogamingButton'));"
                onmouseout="JavaScript: stopButtonRotation(document.getElementById('videogamingButton'));"
                onclick="JavaScript: loadNewPage('videogaming.html');">
            videogames</button> <!-- Videogames Button -->
        </li>

        <li>
            <button id="hackerTypeButton" class="defaultFont rotateHover defaultButton"
                onmouseover="JavaScript: startButtonRotation(document.getElementById('hackerTypeButton'));"
                onmouseout="JavaScript: stopButtonRotation(document.getElementById('hackerTypeButton'));"
                onclick="JavaScript: loadNewPage('codeTyping.html');">
            web games</button> <!-- Web games Button -->
        </li>

        <li>
            <button id="miscButton" class="defaultFont rotateHover defaultButton"
                onmouseover="JavaScript: startButtonRotation(document.getElementById('miscButton'));"
                onmouseout="JavaScript: stopButtonRotation(document.getElementById('miscButton'));"
                onclick="JavaScript: loadNewPage('misc.html');">
            misc</button> <!-- Misc Button -->
        </li>

        <li>
            <button id="aboutButton" class="defaultFont rotateHover defaultButton"
                onmouseover="JavaScript: startButtonRotation(document.getElementById('aboutButton'));"
                onmouseout="JavaScript: stopButtonRotation(document.getElementById('aboutButton'));"
                onclick="JavaScript: loadNewPage('about.html');">
            about</button> <!-- About Button -->
        </li>
    </ul>
</div>
?>