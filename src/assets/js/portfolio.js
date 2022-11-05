//Se incorporan las imágenes de la carpeta './src/assets/images/portfolio'
import pokedex from '../images/portfolio/pokedex.jpg';
import beautifulScroll from '../images/portfolio/beautifulScroll.jpg';
import juego_pelota from '../images/portfolio/juego_pelota.jpg';
import enlaces from '../images/portfolio/enlaces.jpg';
import smooth from '../images/portfolio/smooth.jpg';
import text_gradient from '../images/portfolio/text_gradient.jpg';
import notification from '../images/portfolio/notification.jpg';
import mutabilidad from '../images/portfolio/mutabilidad.jpg';

const DIV_PORTAFOLIO = document.querySelector('.section_portafolio > div');

const proyectosDatos = [
    {
        src: pokedex,
        alt: 'Aplicación para buscar pokemones',
        detalle: 'Juega viendo qué pokemon es más poderoso',
        url: 'https://programandoconterry.web.app/pokedex/index.html',
    },
    {
        src: beautifulScroll,
        alt: 'Hermoso efecto de aparición',
        detalle: 'Hermoso efecto de aparición y gatos',
        url: 'https://programandoconterry.web.app/beautifulScroll/beautifulScroll.html',
    },
    {
        src: juego_pelota,
        alt: 'Juego para derrivar ladrillos',
        detalle: 'Juego para derrivar ladrillos con una pelota',
        url: 'https://programandoconterry.web.app/juego-pelota/pelota.html',
    },
    {
        src: enlaces,
        alt: 'Enlaces para guardar',
        detalle: 'Aquí puedes guardar tus enlaces favoritos 😎',
        url: 'https://programandoconterry.web.app/test/pegarEnlace.html',
    },
    {
        src: smooth,
        alt: 'Mover la página suavemente',
        detalle: 'Mira el efecto de scroll suave con CSS',
        url: 'https://programandoconterry.web.app/smooth/smoothScroll.html',
    },
    {
        src: text_gradient,
        alt: 'Efecto de texto gradiente',
        detalle: 'Wuah, mira este efecto en el mes de la patria',
        url: 'https://programandoconterry.web.app/test/animationTextGradient.html',
    },
    {
        src: notification,
        alt: 'Notificaciones en la web',
        detalle: 'Ejemplo de notificaciones en la web',
        url: 'https://programandoconterry.web.app/test/Notification.html',
    },
    {
        src: mutabilidad,
        alt: 'Metodos mutables de JavaScript',
        detalle: 'Metodos mutables de JavaScript',
        url: 'https://programandoconterry.web.app/mutabilidad/mutabilidad.html',
    },
];

DIV_PORTAFOLIO.innerHTML = proyectosDatos.map(dato => {
    return `
    <a href="${dato.url}" target="_blank">
        <img src="${dato.src}" alt="${dato.alt}">
        <p>${dato.detalle}</p>
    </a>
    `;
}).join('');
