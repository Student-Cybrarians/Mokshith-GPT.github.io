<?php

// Connect to the database
$host = '127.0.0.1';
$username = 'mokshith-gpt';
$password = '';
$dbname = 'mokshith-gpt';

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

// Create users table
$sql = "CREATE TABLE users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
echo "Table users created successfully";
} else {
echo "Error creating table: " . $conn->error;
}

$conn->close();
