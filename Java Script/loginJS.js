


// Function to load the script
function load() {
    // Add event listeners for form submission and reset
    document.querySelector('form').addEventListener('submit', validateForm);
    document.getElementById('resetbtn').addEventListener('click', resetForm);
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var email = document.getElementById('email').value;
    var accno = document.getElementById('accno').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate email or account number
    if (!email && !accno) {
        alert('Please enter your email address or mobile number.');
        return false;
    }

    // Validate password
    if (!password) {
        alert('Please enter your password.');
        return false;
    }

    // Validate confirm password
    if (!confirmPassword) {
        alert('Please confirm your password.');
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }

    // If all validations pass, submit the form
    this.submit();
}

// Function to reset the form
function resetForm() {
    document.querySelector('form').reset();
}
