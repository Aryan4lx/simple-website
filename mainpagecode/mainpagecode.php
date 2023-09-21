<!DOCTYPE html>
<html>

<head>
    <title>My IT Project</title>
    <link rel="stylesheet" type="text/css" href="mainpagedesign.css">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
</head>

<body>
    <div class="welcome-section">
        <h1 class="welcome-message">something...</h1>
        <h2 class="your-name">made by me</h2>
        <button class="welcome-button" onclick="scrollToSections()">...</button>
    </div>
    <header>
        <div class="header-top">
            <h1 class="logo">...</h1>
            <div class="user-actions">
                <input type="text" id="search-input" placeholder="Search for items">
                <a href="login_system/login.php" id="login-link">login</a>
                <a href="login_system/register.php" id="signup-link">signup</a>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#ai-pictures-section">AI Created Pictures</a></li>
                <li><a href="#books-section">Books</a></li>
                <li><a href="#movies-section">Movies</a></li>
            </ul>
        </nav>
        <?php
        session_start();
        if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
        echo '<div class="welcome-message">Welcome, <span class="username">' . htmlspecialchars($_SESSION['username']) . '</span>!</div>';
    }
        ?>
    </header>
    <section id="ai-pictures-section">
        <h2>AI Created Pictures</h2>
        <div class="card-container" id="picture-cards">
        </div>
    </section>
    <section id="books-section">
        <h2>Books</h2>
        <div class="card-container" id="book-cards">
        </div>
    </section>
    <section id="movies-section">
        <h2>Movies</h2>
        <div class="card-container" id="movie-cards">
        </div>
    </section>
    <footer>
        <p>&copy; 2023 My Project. All rights reserved.</p>
        <div class="contact-info">
            <p>Email: <a href="mailto:mhmdzhr0799@gmail.com">mhmdzhr0799@gmail.com</a></p>
            <p>Telegram: <a href="https://t.me/ARS4lx">@ARS4lx</a></p>
        </div>
    </footer>
    <script src="mainpage.js"></script>
</body>

</html>