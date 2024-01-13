document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        signup();
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        login();
    });
});

function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Replace 'your-api-endpoint/signup' with the actual signup API endpoint
    fetch("http://localhost:6008/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the signup response data
        if (data.error) {
            alert(data.error)
    
          }else{
            // alert(data.message)
            window.location.assign("login.html")
          }
    })
    .catch(error => {
        console.error('Error during signup:', error);
    });
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Replace 'your-api-endpoint/login' with the actual login API endpoint
    fetch("http://localhost:6008/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the login response data
        if (data.error) {
            alert(data.error)
    
          }else{
            window.location.assign("home.html")
          }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
}
