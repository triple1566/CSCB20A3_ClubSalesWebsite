const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Send an AJAX request to the server to check if the username and password exist
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/check-login", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    alert("You have successfully logged in.");
                    location.reload();
                } else {
                    loginErrorMsg.style.opacity = 1;
                    alert("Account not found. Have you signed up yet?");
                    location.reload();
                }
            } else {
                alert("An error occurred while processing your request. Please try again later.");
                location.reload();
            }
        }
    };
    xhr.send(JSON.stringify({username, password}));
});

function signupWindow() {
    window.location.href="sign-up.html";
}
