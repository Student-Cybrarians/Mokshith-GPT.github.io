var captcha = document.getElementById("captcha");
var captchaInput = document.getElementById("captcha-input");

function generateCaptcha() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var captchaText = "";
  for (var i = 0; i < 6; i++) {
    captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  captcha.innerHTML = captchaText;
}

generateCaptcha();

captchaInput.addEventListener("input", function() {
  if (captchaInput.value === captcha.innerHTML) {
    // The CAPTCHA is correct.
  } else {
    // The CAPTCHA is incorrect.
  }
});
