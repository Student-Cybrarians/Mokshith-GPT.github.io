<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
    <title>Login | Online Banking Website</title>
    <link href="../CSS/signupCSS.css" rel="stylesheet">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script src="../Java Script/loginJS.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        
    </head>

    <body onload="load();">
        <div id="header">
            <h1>Online Banking Website</h1>
            <a href="home.php"><img src="..//Images//logo.jpg" alt="Online Banking Website" title="Online Banking Website"></a>
        </div>
        <form  method="POST">
            <fieldset>
                <legend>Sign Up</legend>
                <input type="email" id="email" placeholder="Enter your Email Address:"><br />
                <p>OR</p>
                <input type="tel" placeholder="Mobile No:" id="accno"><br />
               
                <input type="password" id="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required  placeholder="Password:" onblur="return validPassword();"><br />
                <input type="password" id="confirmPassword" placeholder="Confirm Password:"
                    onblur="return cnfrmPass();"> <br />
                <p id="result"></p>
                <p><input type="checkbox" name="tnc" id="tnc" onchange="return validForm();"><span>I agree to the <a
                            href="#">Term and Conditions</a></span></p>
                
                <div class="g-recaptcha" data-sitekey="6Lf8lLgpAAAAAPsxSlfPgsS-WWDbtTyGAkqO53Jm"></div>
                <button type="submit" id="submitButton"S>Login</button>
                <button type="reset" id="resetbtn">Reset</button>
            </fieldset>
        </form>
    </body>

</html>