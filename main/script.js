///////////////////////
///// TRANSLATION /////
///////////////////////

// Function to load the language file and update text based on it
async function loadLanguage(lang) {
  // Loads the JSON file
  const response = await fetch(`/_languages/${lang}.json`);
  const translations = await response.json();

  // Replace text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[key] || key;
  });

  // Show elements with the correct language class and hide others
  document.querySelectorAll(".i18n").forEach(el => {
    el.style.display = el.classList.contains(lang) ? "block" : "none";
  });
}

// Detect the browser's language
const userLang = navigator.language.slice(0, 2);

// Supported languages
const supported = ["fr", "en"];

// Choose the language (fallback = English)
const lang = supported.includes(userLang) ? userLang : "en";

// Load the language
loadLanguage(lang);

// Set to English for testing
//loadLanguage("en");

////////////////////////////////////
///// LOADING OTHER HTML FILES /////
////////////////////////////////////

// Function to load an HTML file
function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

// Load the required HTML files
loadHTML("fontsapi", "_fontsapi.html");