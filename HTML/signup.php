<?php

// Connect to AWS RDS database  
$host = "online-banking-website.c7u0ukksaqv1.us-east-2.rds.amazonaws.com";
$username = "MokshithGPT1976";
$password = "MokshithGPT";
$dbname = "online-banking-website";

$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}

// Create users table if it doesn't exist
$sql = "CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL
)";

if (mysqli_query($conn, $sql)) {
echo "Table users created successfully";
} else {
echo "Error creating table: " . mysqli_error($conn);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$username = $_POST['username'];
$phone = $_POST['phone'];

// Insert form data into users table
$sql = "INSERT INTO users (name, email, password, username, phone) VALUES ('$name', '$email', '$password', '$username', '$phone')";

if (mysqli_query($conn, $sql)) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close database connection
mysqli_close($conn);

?>

// Embed signup form HTML
<form action="signup.php" method="post">

    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>

    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br><br>

    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone"><br><br>

    <input type="submit" value="Submit">

</form>
