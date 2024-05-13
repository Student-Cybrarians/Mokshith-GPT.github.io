function load () {
    wrong();
    document.getElementById( "accno" ).value = "";
    document.getElementById( "email" ).value = "";
}
function retEmail () {
    return document.getElementById( "email" ).value;
}
function wrong () {
    document.getElementById( "loginbtn" ).disabled = true;
    document.getElementById( "accno" ).focus();
    document.getElementById( "loginbtn" ).style.opacity = "0.5";
}
function validForm () {
    var email = document.getElementById( "email" ).value;
    var accno = document.getElementById( "accno" ).value;
    var pass = document.getElementById( "password" ).value;
    if ( email.length == 0 )
    {
        if ( /[0-9]/.test( accno ) == true && ( accno.length != 16 ) )
        {
            document.getElementById( "result" ).innerHTML = "Account No. must be of 16 numeric characters.";
            wrong();
            return false;
        }
        else
        {
            if ( pass.length < 6 )
            {
                document.getElementById( "result" ).innerHTML = "Password must contain more than 6 charcaters.";
                wrong();
                return false;
            }
            else if ( pass.length >= 6 )
            {
                document.getElementById( "loginbtn" ).disabled = false;
                document.getElementById( "result" ).innerHTML = "";
                document.getElementById( "loginbtn" ).style.opacity = "1";
                return true;
            }
        }
    }
    else
    {
        if ( pass.length < 6 )
        {
            document.getElementById( "result" ).innerHTML = "Password must contain more than 6 charcaters.";
            wrong();
            return false;
        }
        else if ( pass.length >= 6 )
        {
            document.getElementById( "loginbtn" ).disabled = false;
            document.getElementById( "result" ).innerHTML = "";
            document.getElementById( "loginbtn" ).style.opacity = "1";
            return true;
        }
    }
}
    // Check if reCAPTCHA is solved
    if (!grecaptcha.getResponse()) {
        alert('Please complete the reCAPTCHA challenge.');
        return false;
    }
function goto () {
    document.getElementById( "loginbtn" ).style.borderStyle = "inset";
    window.location.replace( "home.html" );
    return true;
}


const form = document.getElementById("otpForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const otpCode = document.getElementById("otpCode").value;
  if (otpCode.length === 6 && /^\d+$/.test(otpCode)) {
    alert("OTP code is valid");
    // Here you can add your own code to send the OTP code to the server for validation.
  } else {
    alert("OTP code is invalid");
  }
});
