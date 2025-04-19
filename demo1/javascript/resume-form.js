document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm");
  const inputs = form.querySelectorAll("input, textarea");
  const progressBar = document.getElementById("progressBar");

  // Function to calculate and update progress
  const updateProgress = () => {
    const total = inputs.length;
    let filled = 0;

    inputs.forEach(input => {
      if (input.value.trim() !== "") filled++;
    });

    const percentage = Math.round((filled / total) * 100);
    progressBar.style.width = `${percentage}%`;

    // Optional: Change color based on progress
    if (percentage < 50) {
      progressBar.classList.replace("bg-green-500", "bg-blue-600");
    } else if (percentage < 80) {
      progressBar.classList.replace("bg-blue-600", "bg-yellow-500");
    } else {
      progressBar.classList.replace("bg-yellow-500", "bg-green-500");
    }
  };

  // Event listeners for real-time updates
  inputs.forEach(input => {
    input.addEventListener("input", updateProgress);
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // You can send form data to localStorage, Firebase, etc.
    const formData = {};
    inputs.forEach(input => {
      formData[input.name] = input.value;
    });

    // Save to localStorage (for use in resume-preview.html)
    localStorage.setItem("resumeData", JSON.stringify(formData));

    // Redirect to preview page
    window.location.href = "resume-preview.html";
  });

  // Initial call
  updateProgress();
});
