async function loadLanguage(lang) {
  // Charge le fichier JSON
  const response = await fetch(`/_languages/${lang}.json`);
  const translations = await response.json();

  // Remplace les textes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[key] || key;
  });

  // Affiche les éléments de la langue choisie et cache les autres
  document.querySelectorAll(".i18n").forEach(el => {
    el.style.display = el.classList.contains(lang) ? "block" : "none";
  });
}

// Détecte la langue du navigateur
const userLang = navigator.language.slice(0, 2);

// Langues supportées
const supported = ["fr", "en"];

// Choisit la langue (fallback = anglais)
const lang = supported.includes(userLang) ? userLang : "en";

// Charge la langue
loadLanguage(lang);

// Mettre en anglais pour les tests
//loadLanguage("en");