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
    if ( email.length == 0 )
    {
        if ( /[0-9]/.test( accno ) == true && ( accno.length != 16 ) )
        {
            document.getElementById( "result" ).innerHTML = "Account No. must be of 16 numeric characters.";
            wrong();
            return false;
        }
function validPassword () {
    var pass = document.getElementById( "password" ).value;
    if ( pass.length < 6 )
    {
        wrong();
        document.getElementById( "result" ).innerHTML = "Password should contain atleast 6 characters.";
        document.getElementById( "password" ).focus();
        document.getElementById( "password" ).style.border = "2px solid red";
        return false;
    }
    else if ( pass.length >= 6 )
    {
        if ( /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test( pass ) == false )
        {
            wrong();
            document.getElementById( "result" ).innerHTML = "Password should contain Uppercase, lowercase, and numeric charcaters. ";
            return false;
        }
        else
        {
            right();
            document.getElementById( "password" ).style.border = "none";
            return true;
        }
    }
}
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
