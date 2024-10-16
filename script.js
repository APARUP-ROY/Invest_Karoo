// script.js

// Function to handle user registration
document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (signupBtn) {
        signupBtn.addEventListener('click', async () => {
            const email = document.getElementById('email-signup').value;
            const password = document.getElementById('password-signup').value;

            // Simulate a signup process
            console.log('User signed up with email:', email);
            alert('Signup successful! Please login.');
            window.location.href = 'login.html';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            const email = document.getElementById('email-login').value;
            const password = document.getElementById('password-login').value;

            // Simulate a login process
            console.log('User logged in with email:', email);
            alert('Login successful!');
            localStorage.setItem('userEmail', email); // Store the user email in local storage
            window.location.href = 'dashboard.html';
        });
    }

    // Function to display user email on the dashboard
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('user-email').innerHTML = `Logged in as: <strong>${userEmail}</strong>`;
    } else {
        // If no user is logged in, redirect to login
        window.location.href = 'login.html';
    }

    // Logout function
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userEmail');
            window.location.href = 'login.html';
        });
    }
});
