// i18n.js
import i18n from 'i18next';

i18n.init({
  lng: 'es', // Idioma inicial (español)
  resources: {
    es: {
      translation: {
        "accueil": "Inicio",
        "portfolio": "Portafolio",
        "collectif": "Colectivo",
        "quiSuisJe": "¿Quién soy?",
        "contact": "Contacto",
        "welcomeHeader": "Bienvenido a la Clínica Veterinaria",
        "welcomeContent": "Estamos dedicados al cuidado y bienestar de tus mascotas..."
        // Agrega más traducciones según sea necesario
      }
    },
    // Agrega más idiomas aquí según sea necesario
  }
});

export default i18n;
