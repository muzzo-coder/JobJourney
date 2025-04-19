// javascript/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// 🔁 Replace with your Firebase config
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
const db = getFirestore(app);

export { auth, db };
