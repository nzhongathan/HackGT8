//Adapted from https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "AshleyHarper32" && password === "hackgt8") {
        alert("You have successfully logged in.");
        window.location.assign('home.html');
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

