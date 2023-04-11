const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/check-login", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert("You have successfully logged in.");
                location.reload();
            } else {
                loginErrorMsg.style.opacity = 1;
                alert("Account not found. Have you signed up yet?");

            }
        }
    };
    xhr.send(JSON.stringify({username, password}));
});

function signupWindow() {
    window.location.href="sign-up.html";
}