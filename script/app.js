 const mainContent = document.getElementById('main-content');
let currentPage = 'accueil'; // Página inicial
       
       const buttons = document.querySelectorAll('nav button');
       const languageSelect = document.getElementById('language-select');

document.addEventListener('DOMContentLoaded', () => {
    // Configuración de i18next
    i18next.use(i18nextBrowserLanguageDetector).init({
        fallbackLng: 'es',
        resources: {
            fr: {
                translation: {
                    "accueil": "Accueil",
                    "portfolio": "Portefeuille",
                    "collectif": "Collectif",
                    "quiSuisJe": "Qui suis-je ?",
                    "contact": "Contacter",
                    "welcomeHeader": "Bienvenue à la Clinique Vétérinaire",
                    "welcomeContent": "Nous nous engageons à prendre soin et au bien-être de vos animaux...",
                    "accueilContent": "<h1>Bienvenue à la Clinique Vétérinaire</h1><p>Nous nous engageons à prendre soin et au bien-être de vos animaux...</p>",
                    "portfolioContent": "<h1>À propos de nous</h1><p>La Clinique Vétérinaire existe depuis plus de 20 ans...</p>",
                    "collectifContent": "<h1>Services</h1><p>Nous vous proposons une large gamme de services pour les soins de vos animaux...</p>",
                    "quiSuisJeContent": "<h1>Qui suis-je ?</h1><p>Vous pouvez nous contacter via le formulaire suivant...</p>",
                    "contactContent": "<h1>Contacter</h1><p>Vous pouvez nous contacter via le formulaire suivant...</p>"
                }
            },
            en: {
                translation: {
                    "accueil": "Home",
                    "portfolio": "Portfolio",
                    "collectif": "Collective",
                    "quiSuisJe": "Who am I?",
                    "contact": "Contact",
                    "welcomeHeader": "Welcome to the Veterinary Clinic",
                    "welcomeContent": "We are dedicated to the care and well-being of your pets...",
                    "accueilContent": "<h1>Welcome to the Veterinary Clinic</h1><p>We are dedicated to the care and well-being of your pets...</p>",
                    "portfolioContent": "<h1>About Us</h1><p>The Veterinary Clinic has been operating for over 20 years...</p>",
                    "collectifContent": "<h1>Services</h1><p>We offer a wide range of services for the care of your pets...</p>",
                    "quiSuisJeContent": "<h1>Who am I?</h1><p>You can contact us through the following form...</p>",
                    "contactContent": "<h1>Contact</h1><p>You can contact us through the following form...</p>"
                }
            },
            es: {
                translation: {
                    "accueil": "Inicio",
                    "portfolio": "Portafolio",
                    "collectif": "Colectivo",
                    "quiSuisJe": "¿Quién soy?",
                    "contact": "Contacto",
                    "welcomeHeader": "Bienvenido a la Clínica Veterinaria",
                    "welcomeContent": "Estamos dedicados al cuidado y bienestar de tus mascotas...",
                    "accueilContent": "<h1>Bienvenido a la Clínica Veterinaria</h1><p>Estamos dedicados al cuidado y bienestar de tus mascotas...</p>",
                    "portfolioContent": "<h1>Sobre Nosotros</h1><p>La Clínica Veterinaria ha estado en funcionamiento durante más de 20 años...</p>",
                    "collectifContent": "<h1>Servicios</h1><p>Ofrecemos una amplia gama de servicios para el cuidado de tus mascotas...</p>",
                    "quiSuisJeContent": "<h1>¿Quién soy?</h1><p>Puedes ponerte en contacto con nosotros mediante el siguiente formulario...</p>",
                    "contactContent": "<h1>Contacto</h1><p>Puedes ponerte en contacto con nosotros mediante el siguiente formulario...</p>"
                }
            }
        }
    }, function(err, t) {
        if (err) return console.error(err);
        loadPage(currentPage); // Actualiza el contenido después de la inicialización
    });


    // Cargar contenido inicial
    loadPage(currentPage);

    // Cambiar idioma cuando se selecciona otro en el selector
    languageSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        i18next.changeLanguage(selectedLang, () => {
            loadPage(currentPage); // Recargar la página actual con el nuevo idioma
        });
    });

    // Escuchar clics en los botones del menú de navegación
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            currentPage = button.getAttribute('data-page');
            loadPage(currentPage);
        });
    });

    function loadPage(page) {
        mainContent.innerHTML = i18next.t(page + "Content");     
    }
});
