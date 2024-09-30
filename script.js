// Existing Typed.js initialization
var typed = new Typed('.loop', {
  strings : ["Blockchain Lover", "Full Stack Developer"],
  typeSpeed: 150,
  backSpeed:150,
  loop: true
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Language Switching Functionality
const languageSelect = document.getElementById('language-select');
const translations = {
    en: {
        greeting: "Hi, It's Me.",
        name: "Muhammad Saad",
        developerType: "And I'm Full Stack Developer",
        passion: "Passion: Artificial Intelligence",
        description: "I am a student currently studying at ITU University...",
        // Add other text translations here
    },
    ur: {
        greeting: "سلام، یہ میں ہوں",
        name: "محمد سعد",
        developerType: "اور میں فل اسٹیک ڈیولپر ہوں",
        passion: "شوق: مصنوعی ذہانت",
        description: "میں آئی ٹی یو یونیورسٹی میں پڑھ رہا ہوں...",
        // Add other text translations here
    }
};

// Function to update text based on language
function updateLanguage(language) {
    document.querySelector('h3').textContent = translations[language].greeting;
    document.querySelector('h1').textContent = translations[language].name;
    document.querySelector('h2').textContent = translations[language].developerType;
    document.querySelector('h3').textContent = translations[language].passion;
    document.querySelector('p').textContent = translations[language].description;
    // Update other elements similarly
}

// Listen for language change
languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});
