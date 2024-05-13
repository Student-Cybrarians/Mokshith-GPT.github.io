
        function load() {
            wrong();
            document.getElementById("email").focus();
        }

        function wrong() {
            document.getElementById("loginbtn").disabled = true;
            document.getElementById("loginbtn").style.opacity = "0.5";
            document.getElementById("accno").focus();
        }

        function validForm() {
            var email = document.getElementById("email").value;
            var accno = document.getElementById("accno").value;
            var pass = document.getElementById("password").value;

            if (email.length == 0) {
                if (/[0-9]/.test(accno) && accno.length == 16) {
                    if (pass.length >= 6) {
                        return true;
                    } else {
                        document.getElementById("result").innerHTML = "Password must contain more than 6 characters.";
                        wrong();
                        return false;
                    }
                } else {
                    document.getElementById("result").innerHTML = "Account No. must be of 16 numeric characters.";
                    wrong();
                    return false;
                }
            } else {
                if (pass.length >= 6) {
                    return true;
                } else {
                    document.getElementById("result").innerHTML = "Password must contain more than 6 characters.";
                    wrong();
                    return false;
                }
            }
        }
    // Check if reCAPTCHA is solved
    if (!grecaptcha.getResponse()) {
        alert('Please complete the reCAPTCHA challenge.');
        return false;
    }
function validateForm() {
    var checkbox = document.getElementById('tnc');
    var tncError = document.getElementById('tncError');

    if (!checkbox.checked) {
        tncError.style.display = 'block';
        return false;
    } else {
        tncError.style.display = 'none';
        return true;
    }
}
