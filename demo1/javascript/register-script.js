// register-script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDROKX7RFmE8D9OsXkeP5wAE6a_M3AZM8M",
  authDomain: "jobjourney-c2004.firebaseapp.com",
  projectId: "jobjourney-c2004",
  storageBucket: "jobjourney-c2004.firebasestorage.app",
  messagingSenderId: "320771012154",
  appId: "1:320771012154:web:49d2e36d29c9d9e6cbe703",
  measurementId: "G-6212RFXN3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle dark mode
window.toggleDarkMode = function () {
  document.documentElement.classList.toggle("dark");
};

// Register form logic
const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Registered successfully!");
    window.location.href = "sign.html";
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});
