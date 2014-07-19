<script src="/costaRicaIsrael/js/nav_bar.js"></script>
<div id="main_header">
    <div id="container_upper">
        <div id="left_box_logo">
            <img id="logo" src="img/logo.png" alt="CR_IL_logo" width="90" height="45">
        </div>
        <div id="right_box_text">
            <div id="company_he" dir="rtl"> אגודת ידידות קוסטה-ריקה ישראל </div>
            <div id="company_en" dir="rtl"> Costa-Rica Israel Friendship Association </div>
        </div>
    </div>
    <nav>
        <ul>
            <?php
                if (isset($_SESSION['username'])) {
                    echo "<li><strong>Hello ". $_SESSION['username']."!</strong></li>";
            ?>
                <li>
                    <a href="add_member.php" lang="en">Add Member</a>
                </li>
                <li>
                    <a href="panel.php?addevent" lang="en">Add Event</a>
                </li>
                <li>
                    <a href="panel.php?addmeeting" lang="en">Add Meeting</a>
                </li>
                <li>
                    <a href="utils/logout.php" lang="en">Logout</a>
                </li>
                <li id="language">
                    <a href="#" onclick="setLanguage('en')"> English </a> /
                    <a href="#" onclick="setLanguage('es')">Español</a>
                </li>
            <?php
                } else {
                    echo    '<li><a href="index.php" lang="en">Home</a></li>'.
                            '<li><a href="login.php" lang="en">Login</a></li>';
                }
            ?>
        </ul>
    </nav>
</div>