function load () {
    wrong();
    document.getElementById( "name" ).focus();
}
function wrong () {
    document.getElementById( "signupbtn" ).disabled = true;
    document.getElementById( "signupbtn" ).style.opacity = "0.5";
    document.getElementById( "tnc" ).disabled = true;
    document.getElementById( "tnc" ).checked = false;

}
function right () {
    document.getElementById( "result" ).innerHTML = "";
}
function validUserName () {
    var username = document.getElementById( "username" ).value;
    if ( /\s/.test( username ) )
    {
        wrong();
        document.getElementById( "result" ).innerHTML = "User name must not contain any space.";
        document.getElementById( "username" ).focus();
        return false;
    }
    else
    {
        right();
        return true;
    }
}

function validPassword() {
    var pass = document.getElementById("password").value;
    if (pass.length < 6) {
        wrong();
        document.getElementById("result").innerHTML = "Password should contain at least 6 characters.";
        document.getElementById("password").focus();
        document.getElementById("password").style.border = "2px solid red";
        return false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(pass)) {
        wrong();
        document.getElementById("result").innerHTML = "Password should contain at least one uppercase letter, one lowercase letter, one number, and one symbol.";
        return false;
    } else {
        right();
        document.getElementById("password").style.border = "none";
        return true;
    }
}


function cnfrmPass () {
    var pass1 = document.getElementById( "password" ).value;
    var pass2 = document.getElementById( "confirmPassword" ).value;
    if ( pass1 != pass2 )
    {
        wrong();
        document.getElementById( "result" ).innerHTML = "Confirm Password must be same as the Password.";
        document.getElementById( "confirmPassword" ).focus();
        document.getElementById( "confirmPassword" ).blur();
        return false;
    }
    else
    {
        right();
        if ( validUserName() && validPassword() )
        {
            document.getElementById( "tnc" ).disabled = false;
            return true;
        }
        else
        {
            document.getElementById( "result" ).innerHTML = "There is something wrong in the form.";
            document.getElementById( "tnc" ).checked = false;
            return false;
        }
    }
}
function validForm () {
    if ( cnfrmPass() )
    {
        if ( document.getElementById( "tnc" ).checked == false )
        {
            document.getElementById( "tnc" ).disabled = false;
            document.getElementById( "signupbtn" ).disabled = true;
            document.getElementById( "signupbtn" ).style.opacity = "0.5";
            document.getElementById( "tnc" ).focus();
            return false;
        }
        else
        {
            document.getElementById( "signupbtn" ).style.opacity = "1";
            document.getElementById( "signupbtn" ).disabled = false;
            return true;
        }
    }
    else
    {
        wrong();
    }
}

function goto() {
    // Redirect to login.html
    window.location.href = "login.html";
}

    // Check if reCAPTCHA is solved
    if (!grecaptcha.getResponse()) {
        alert('Please complete the reCAPTCHA challenge.');
        return false;
    }
