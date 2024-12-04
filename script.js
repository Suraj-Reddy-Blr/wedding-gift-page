document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  const loginContainer = document.getElementById("login-container");
  const contentContainer = document.getElementById("content-container");

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
});
