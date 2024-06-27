import i18n from './i18n'; // Importa la configuración de i18next

const mainContent = document.getElementById('main-content');
let currentPage='accueil'; //pagina inicial

document.addEventListener('DOMContentLoaded', ()=>{
    const buttons = document.querySelectorAll('nav button');
    const languageSelect= document.getElementById('language-select');
    
    // Carga el contenido inicial
    loadPage(currentPage);

     // Cambiar idioma cuando se selecciona otro en el selector
     languageSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
        loadPage(currentPage); // Recargar la página actual con el nuevo idioma
    });

     // Escuchar clics en los botones del menú de navegación
     buttons.forEach(button => {
        button.addEventListener('click', () => {
            currentPage = button.getAttribute('data-page');
            loadPage(currentPage);
        });
    });

})


/*
function loadPage(page) {
    let content = '';
    switch(page) {
    case 'accueil': content = accueilContent; break;
    case 'portfolio': content = portfolioContent; break;
    case 'collectif': content = collectifContent; break;
    case 'quiSuisJe': content = quiSuisJeContent; break;
    case 'contact': content = contactContent; break;
    default: content = accueilContent;
    }
    
    mainContent.innerHTML = content;
} 
*/
const accueilContent = `
    <h1>Bienvenido a la Clínica Veterinaria</h1>
    <p>Estamos dedicados al cuidado y bienestar de tus mascotas...</p>`;

const portfolioContent = `
    <h1>Sobre Nosotros</h1>
    <p>La Clínica Veterinaria ha estado en funcionamiento durante más de 20 años...</p>`;

const collectifContent = `
    <h1>Servicios</h1>
    <p>Ofrecemos una amplia gama de servicios para el cuidado de tus mascotas...</p>`;

const quiSuisJeContent = `
    <h1>Qui Suis-Je</h1>
    <p>Puedes ponerte en contacto con nosotros mediante el siguiente formulario...</p>`;

const contactContent = `
    <h1>Contact</h1>
    <p>Puedes ponerte en contacto con nosotros mediante el siguiente formulario...</p>`;


  

function loadPage(page) {
    const content = i18n.t(page); // Obtener el contenido traducido según la página
    mainContent.innerHTML = `
        <h1>${i18n.t('welcomeHeader')}</h1>
        <p>${i18n.t('welcomeContent')}</p>
        ${content}
    `;
}
