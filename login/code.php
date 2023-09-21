<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>

<body>
    <?php session_start(); if (isset($_POST['login'])) { 

$mysqli = new mysqli("localhost", "test", "test", "arslxcyo_login_system"); // change test with user and pass of db

if ($mysqli->connect_error) { die("Connection failed: " . $mysqli->connect_error); } 

$stmt = $mysqli->prepare("SELECT id, password FROM users WHERE username = ?"); $stmt->bind_param("s", $username); 

$username = $_POST['username']; $password = $_POST['password']; 

$stmt->execute(); $stmt->store_result(); 

if ($stmt->num_rows > 0) { 

$stmt->bind_result($id, $hashed_password); 

$stmt->fetch(); 

if (password_verify($password, $hashed_password)) { 

$_SESSION['loggedin'] = true; $_SESSION['id'] = $id; $_SESSION['username'] = $username; 

header("Location: https://test.com/mainpagecode.php"); exit; } else { echo "Incorrect password!"; } } else { echo "User not found!"; } // use the address of your website

$stmt->close(); $mysqli->close(); }
?>
    <form action="login.php" method="post">
        <label for="username">Username:</label>
        <input id="username" name="username" required="" type="text" />
        <label for="password">Password:</label> <input id="password" name="password" required="" type="password" />
        <input name="login" type="submit" value="Login" />
    </form>
</body>

</html>