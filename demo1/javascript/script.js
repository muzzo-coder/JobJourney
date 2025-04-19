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
firebase.initializeApp(firebaseConfig);

// Get reference to the Get Started button
document.addEventListener("DOMContentLoaded", () => {
    const getStartedBtn = document.getElementById("getStartedBtn");

    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // ✅ User is signed in: Redirect to resume form
                    window.location.href = "Pages/resume-form.html";
                } else {
                    // 🚫 Not signed in: Redirect to sign-in page
                    window.location.href = "Pages/sign.html";
                }
            });
        });
    }

    // Smart Career Companion button click event
    const companionBtn = document.querySelector("#smart-companion a");

    companionBtn.addEventListener("click", () => {
        console.log("Navigating to Smart Career Companion...");
    });

    // Optional scroll animation or smooth scroll to section
    if (window.location.hash === "#smart") {
        document.querySelector("#smart-companion").scrollIntoView({
            behavior: "smooth"
        });
    }
});
