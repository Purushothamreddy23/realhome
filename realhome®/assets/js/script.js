// JavaScript code for sign-up and login forms

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Check if username already exists in local storage
    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    var existingUser = storedUsers.find(user => user.username === newUsername);
    if(existingUser) {
        document.getElementById("signupError").innerHTML = "Username already exists.";
    } else {
        // Add new user to local storage
        var newUser = { username: newUsername, password: newPassword };
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        // Optionally, you can clear the form fields
        document.getElementById("signupForm").reset();

        // Inform user about successful sign-up
        document.getElementById("signupError").innerHTML = "";
        alert("Sign up successful!");
    }
});

// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username exists in local storage and if password matches
    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    var user = storedUsers.find(user => user.username === username && user.password === password);
    if(user) {
        // Login successful
        document.getElementById("loginError").innerHTML = "";
        alert("Login successful!");
        // Optionally, you can redirect the user to another page after login
    } else {
        // Login failed
        document.getElementById("loginError").innerHTML = "Invalid username or password.";
    }
});
