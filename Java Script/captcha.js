import captcha from './captcha.js';

// Generate captcha code
const captchaCode = captcha.generate();

// Render captcha in login.html
document.getElementById('captcha').innerHTML = `
  <img src="${captchaCode.dataUri}" alt="Captcha" />
  <input type="text" id="captchaInput" />
`;

// Verify captcha code on submit
const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.getElementById('captchaInput').value;
    if (input !== captchaCode.text) {
        alert('Incorrect captcha');
        return;
    }

    form.submit();
});
