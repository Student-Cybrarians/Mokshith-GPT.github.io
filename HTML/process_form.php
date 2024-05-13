<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the plaintext password from the form data
    $password = $_POST["password"];

    // Hash the password using SHA-256
    $hashedPassword = hash('sha256', $password);

    // Now you can use $hashedPassword in your application
    echo "Hashed Password: " . $hashedPassword;
} else {
    // Handle invalid request method
    echo "Invalid request method.";
}
?>
