document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("languageSelect");

  // Load translations JSON file
  async function loadTranslations() {
    try {
      const response = await fetch("../json/translations.json"); // Update the path if needed
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Error loading translations:", error);
      return null;
    }
  }

  // Update page content with selected language
  async function updateContent(language) {
    const translations = await loadTranslations();

    if (!translations || !translations[language]) {
      console.warn(`Translations not found for language: ${language}`);
      return;
    }

    const langData = translations[language];

    // Update text elements with translation data
    document.getElementById("heroSubtitle").textContent = langData.heroSubtitle;
    document.getElementById("aboutTitle").textContent = langData.aboutTitle;
    document.getElementById("aboutText").textContent = langData.aboutText;
    document.getElementById("servicesTitle").textContent =
      langData.servicesTitle;

    // Services
    document.getElementById("service1").textContent = langData.services[0];
    document.getElementById("service2").textContent = langData.services[1];
    document.getElementById("service3").textContent = langData.services[2];

    document.getElementById("experienceTitle").textContent =
      langData.experienceTitle;
    document.getElementById("skillsTitle").textContent = langData.skillsTitle;
    document.getElementById("contactTitle").textContent = langData.contactTitle;
  }

  // Listen for language selection changes
  languageSelect.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;
    updateContent(selectedLanguage);
  });

  // Set default language to English on load
  updateContent("en");
});
