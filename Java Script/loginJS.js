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

function goto () {
    document.getElementById( "loginbtn" ).style.borderStyle = "inset";
    window.location.replace( "home.html" );
    return true;
}







<script type="text/javascript">
        function generateCaptcha() {
            var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
            var i;
            for (i = 0; i < 4; i++) {
                var a = alpha[Math.floor(Math.random() * alpha.length)];
                var b = alpha[Math.floor(Math.random() * alpha.length)];
                var c = alpha[Math.floor(Math.random() * alpha.length)];
                var d = alpha[Math.floor(Math.random() * alpha.length)];
            }
            var code = a + '' + b + '' + '' + c + '' + d;
            document.getElementById("mainCaptcha").value = code
        }
        function CheckValidCaptcha() {
            var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
            var string2 = removeSpaces(document.getElementById('txtInput').value);
            if (string1 == string2) {
                document.getElementById('success').innerHTML = "Form is validated Successfully";
                return true;
            }
            else {
                document.getElementById('error').innerHTML = "Please enter a valid captcha.";
                return false;

            }
        }
        function removeSpaces(string) {
            return string.split(' ').join('');
        }
    </script>
