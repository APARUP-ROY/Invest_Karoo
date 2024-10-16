import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMr45DwPa3utl8PCFMb12lvP4HVUdWMGg",
    authDomain: "apply-karoo.firebaseapp.com",
    projectId: "apply-karoo",
    storageBucket: "apply-karoo.appspot.com",
    messagingSenderId: "485444692550",
    appId: "1:485444692550:web:0f0ee91b93ab7d9d597847",
    measurementId: "G-G80D4QX87P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-up function
async function signUp() {
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signup successful:', userCredential);
        alert('Signup successful!');
        window.location.href = "dashboard.html"; // Redirect to the dashboard on success
    } catch (error) {
        console.error('Error during sign-up:', error.message);
        alert(`Error: ${error.message}`);
    }
}

// Login function
async function login() {
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Login successful:', userCredential);
        alert('Login successful!');
        window.location.href = "dashboard.html"; // Redirect to the dashboard on success
    } catch (error) {
        console.error('Error during login:', error.message);
        alert(`Error: ${error.message}`);
    }
}

// Event listeners for buttons
const signupBtn = document.getElementById('signup-btn');
if (signupBtn) {
    signupBtn.addEventListener('click', (event) => {
        event.preventDefault();
        signUp();
    });
}

const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        login();
    });
}
