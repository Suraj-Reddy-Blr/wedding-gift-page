document.addEventListener("DOMContentLoaded", () => {
  // Browser Detection
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if (!isChrome) {
    alert("For the best experience, please open this page in Google Chrome.");
  }

  // Login Form Handling
  const loginForm = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  const loginContainer = document.getElementById("login-container");
  const contentContainer = document.getElementById("content-container");
  const giftImage = document.getElementById("gift-image");
  const voucherCode = document.getElementById("voucher-code");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = passwordInput.value;

    if (password === "kumkhush") {
      loginContainer.style.display = "none";
      contentContainer.style.display = "block";
    } else {
      errorMessage.style.display = "block";
      passwordInput.value = ""; // Clear the input field
    }
  });

  giftImage.addEventListener("click", () => {
    voucherCode.style.display = "block";
    giftImage.style.display = "none";
  });
});
