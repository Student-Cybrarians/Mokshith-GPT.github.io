# Mokshith-GPT.github.io
By Cybrarians


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page with reCAPTCHA</title>
    <!-- Add the reCAPTCHA API script -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <style>
        /* Add your custom CSS styles here */
        /* For example: */
        .recaptcha-container {
            margin: 20px auto;
            max-width: 300px;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <!-- Add your other HTML content here -->

    <!-- Add the reCAPTCHA widget -->
    <div class="recaptcha-container">
        <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
    </div>

    <!-- Add your other JavaScript code here -->
    <script>
        // Validate reCAPTCHA response on form submission
        function validateForm() {
            var response = grecaptcha.getResponse();
            if (response.length === 0) {
                alert("Please complete the reCAPTCHA!");
                return false;
            }
            // Additional form validation logic goes here
            // ...
            return true;
        }
    </script>
</body>
</html>
