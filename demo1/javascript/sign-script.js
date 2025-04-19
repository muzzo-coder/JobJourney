// javascript/sign-script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Sign In
document.getElementById("signin-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Signed in successfully!");
    window.location.href = "resume-form.html";
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});

// Handle Forgot Password
document.getElementById("forgot-password").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (!email) {
    alert("⚠️ Please enter your email first.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("📩 Password reset email sent!");
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});

// Handle Register Link
document.getElementById("register-link").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "register.html"; // Change to your registration page
});
