const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
        alert("Account not found. Have you signed up yet?");
        location.reload()
    }
})

function signupWindow() {
    window.location.href="sign-up.html";
}



function signedInButton () {
    /*const signupForm = document.getElementById("singup-form");
    const new_user = signupForm.new_user.value;
    const new_pass = signupForm.new_pass.value;
    if (new_user === "user" && password === "web_dev") {
        alert("This account already exists. Try logging in.");
    }
    else {
        alert("Welcome" + new_user + "! You are now officially a customer of UTSC KEats ")
    }*/
    alert("Welcome!");
    window.location.href="index.html";
}
