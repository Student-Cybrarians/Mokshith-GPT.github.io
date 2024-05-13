<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect user information
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Generate OTP
    $otp = mt_rand(100000, 999999); // Generate a 6-digit OTP

    // Send OTP via email
    $to = $email;
    $subject = 'Verification OTP for Signup';
    $message = 'Your OTP for signup is: ' . $otp;
    $headers = 'From: your_email@example.com'; // Change this to your email address
    mail($to, $subject, $message, $headers);

    // Store the OTP in a session
    session_start();
    $_SESSION['otp'] = $otp;
    $_SESSION['email'] = $email;

    // Redirect to OTP verification page
    header("Location: otp_verification.php");
    exit();
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect user information
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Your database connection code
    $host = "sql6.freesqldatabase.com";
    $username = "sql6705993";
    $password = "4RB6CLp2T7";
    $dbname = "sql6705993";

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
        // Insert user data into the database
        $insert_sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";
        if (mysqli_query($conn, $insert_sql)) {
            echo "User registered successfully";
        } else {
            echo "Error: " . $insert_sql . "<br>" . mysqli_error($conn);
        }
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $conn->close();
}
?>
