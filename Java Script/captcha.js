// Function to enable/disable the submit button based on reCAPTCHA completion
function enableSubmitButton(response) {
  if (response && response !== "") {
    document.getElementById("submitButton").removeAttribute("disabled");
  } else {
    document.getElementById("submitButton").setAttribute("disabled", "disabled");
  }
}

// Callback function executed when reCAPTCHA is solved
function recaptchaCallback(response) {
  enableSubmitButton(response);
}

// Add event listener to reCAPTCHA checkbox
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Check if reCAPTCHA has been solved before allowing form submission
    if (grecaptcha.getResponse() === "") {
      alert("Please complete the reCAPTCHA challenge.");
    } else {
      this.submit(); // Submit the form
    }
  });
});
