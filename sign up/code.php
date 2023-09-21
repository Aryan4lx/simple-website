<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>

<body>
    <?php if (isset($_POST['register'])) { 

$mysqli = new mysqli("localhost", "test", "test", "arslxcyo_login_system"); // change test with user and pass of db

if ($mysqli->connect_error) { die("Connection failed: " . $mysqli->connect_error); } 

$stmt = $mysqli->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)"); $stmt->bind_param("sss", $username, $email, $password); 

$username = $_POST['username']; $email = $_POST['email']; $password = $_POST['password']; 

$password = password_hash($password, PASSWORD_DEFAULT); 

 
if ($stmt->execute()) { echo "New account created successfully!"; } else { echo "Error: " . $stmt->error; } 


$stmt->close(); $mysqli->close(); }
?>
    <form action="register.php" method="post">
        <label for="username">Username:</label>
        <input id="username" name="username" required="" type="text" />
        <label for="email">Email:</label>
        <input id="email" name="email" required="" type="email" />
        <label for="password">Password:</label>
        <input id="password" name="password" required="" type="password" />
        <input name="register" type="submit" value="Register" />
    </form>
</body>

</html>