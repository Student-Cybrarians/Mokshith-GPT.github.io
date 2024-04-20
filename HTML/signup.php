<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign Up | Online Banking Website</title>
        <link href="../CSS/signupCSS.css" rel="stylesheet">
        <script src="../Java Script/signupJS.js"></script>
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
                <input type="text" id="name" placeholder="Enter your Name:"><br />
                <input type="text" id="username" placeholder="Enter valid Username:"
                    onblur="return validUserName();"><br />
                <input type="email" id="email" placeholder="Enter your Email Address:"><br />

                <div id="phoneNumber" contenteditable="true" onkeypress="return isNumeric(event)">Enter phone number</div>

                
                <input type="password" id="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required  placeholder="Password:" onblur="return validPassword();"><br />
                <input type="password" id="confirmPassword" placeholder="Confirm Password:"
                    onblur="return cnfrmPass();">
                    
                    
                    <br />
                <p id="result"></p>
                <p><input type="checkbox" name="tnc" id="tnc" onchange="return validForm();"><span>I agree to the <a
                            href="#">Term and Conditions</a></span></p>
                <div class="g-recaptcha" data-sitekey="6Lf8lLgpAAAAAPsxSlfPgsS-WWDbtTyGAkqO53Jm"></div>

                <button type="button" id="signupbtn" value="0" onclick=goto();>Sign Up</button>
                <button type="reset" id="resetbtn">Reset

                </button>
            </fieldset>
        </form>
    </body>

</html>