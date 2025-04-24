document.addEventListener("DOMContentLoaded", () => {
  const resumeScore = 68;
  const skillGaps = ["React", "SQL", "AWS"];
  const topSkills = ["JavaScript", "HTML", "CSS"];

  // Resume score and skill gaps
  document.getElementById("resume-score").textContent = `${resumeScore}/100`;
  document.getElementById("skill-gaps").textContent = skillGaps.join(", ");

  // Job suggestions
  const jobSuggestions = [
    { title: "Frontend Developer", company: "VirtuNexa", link: "#" },
    { title: "Junior Web Developer", company: "TechNova", link: "#" },
  ];
  const jobList = document.getElementById("job-suggestions");
  jobList.innerHTML = "";
  jobSuggestions.forEach(job => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.title}</strong> at ${job.company} - <a href="${job.link}" class="text-blue-500">Apply</a>`;
    jobList.appendChild(li);
  });

  // Course suggestions
  const courses = skillGaps.map(skill => ({
    title: `Learn ${skill} - Beginner Course`,
    link: "https://www.udemy.com",
  }));
  const courseList = document.getElementById("course-suggestions");
  courseList.innerHTML = "";
  courses.forEach(course => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${course.link}" target="_blank">${course.title}</a>`;
    courseList.appendChild(li);
  });

  // Career path guidance
  document.getElementById("career-path").textContent =
    "You’re suited for Frontend Development. Focus on React and Responsive Design.";
});
