document.addEventListener("DOMContentLoaded", () => {
  const resumeData = JSON.parse(localStorage.getItem("resumeData")) || {};

  const renderTemplates = {
    classic: () => `
      <div class="p-6 bg-white rounded-lg shadow">
        <h1 class="text-4xl font-bold text-blue-700 mb-2">${resumeData.name}</h1>
        <p class="text-gray-600 mb-4">${resumeData.email} | ${resumeData.phone} | <a href="${resumeData.linkedin}" class="text-blue-500">LinkedIn</a></p>
        <section class="mb-4"><h2 class="text-xl font-semibold">Skills</h2><p>${resumeData.skills}</p></section>
        <section class="mb-4"><h2 class="text-xl font-semibold">Experience</h2><p>${resumeData.experience}</p></section>
        <section><h2 class="text-xl font-semibold">Education</h2><p>${resumeData.education}</p></section>
      </div>
    `,

    modern: () => `
      <div class="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow p-6">
        <aside class="w-full md:w-1/3 bg-gray-100 p-4 rounded">
          <h2 class="text-lg font-bold mb-2">${resumeData.name}</h2>
          <p>${resumeData.email}<br>${resumeData.phone}</p>
          <a href="${resumeData.linkedin}" class="text-blue-500">LinkedIn</a>
          <hr class="my-3"/>
          <h3 class="font-semibold">Skills</h3>
          <p>${resumeData.skills}</p>
        </aside>
        <main class="w-full md:w-2/3">
          <section class="mb-4"><h3 class="text-lg font-semibold">Experience</h3><p>${resumeData.experience}</p></section>
          <section><h3 class="text-lg font-semibold">Education</h3><p>${resumeData.education}</p></section>
        </main>
      </div>
    `,

    elegant: () => `
      <div class="bg-gray-50 p-6 rounded shadow">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-serif font-bold">${resumeData.name}</h1>
          <p class="text-gray-600">${resumeData.email} | ${resumeData.phone}</p>
          <a href="${resumeData.linkedin}" class="text-blue-600">LinkedIn</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-lg">Skills</h3>
            <p>${resumeData.skills}</p>
            <h3 class="font-semibold text-lg mt-4">Education</h3>
            <p>${resumeData.education}</p>
          </div>
          <div>
            <h3 class="font-semibold text-lg">Experience</h3>
            <p>${resumeData.experience}</p>
          </div>
        </div>
      </div>
    `,
  };

  const renderSelectedTemplate = (type) => {
    document.getElementById("resumeContainer").innerHTML = renderTemplates[type]();
    localStorage.setItem("selectedTemplate", type);
  };

  const selector = document.getElementById("templateSelect");
  const savedTemplate = localStorage.getItem("selectedTemplate") || "classic";
  selector.value = savedTemplate;
  renderSelectedTemplate(savedTemplate);

  selector.addEventListener("change", () => {
    renderSelectedTemplate(selector.value);
  });
});
