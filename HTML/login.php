<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Online Banking Website</title>
    <link href="../CSS/loginCSS.css" rel="stylesheet">
    <script src="../Java Script/loginJS.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body onload="load();">
    <div id="header">
        <h1>Online Banking Website</h1>
        <a href="home.php"><img src="../Images/logo.jpg" alt="Online Banking Website" title="Online Banking Website"></a>
    </div>

    <form method="POST" id="loginForm">
        <fieldset>
            <legend>Login</legend>

            <input type="email" id="email" required placeholder="Enter your Email Address:"><br />
            <p>OR</p>
            <input type="tel" required placeholder="Mobile No:" id="accno"><br />
                <input type="password" id="password"  required  placeholder="Password:" onblur="return validPassword();"><br />
                <input type="password" id="confirmPassword" required placeholder="Confirm Password:"
                    onblur="return cnfrmPass();">
            <p id="result"></p>

            <p><input type="checkbox" name="tnc" id="tnc" required onchange="return validForm();"><span>I agree to the <a
                            href="#">Term and Conditions</a></span></p>



            
            <div class="g-recaptcha" data-sitekey="6Lf8lLgpAAAAAPsxSlfPgsS-WWDbtTyGAkqO53Jm"></div>
            <button type="submit" id="submitButton"S>Login</button>
            <button type="reset" id="resetbtn">Reset</button>
        </fieldset>
    </form>
</body>

</html>