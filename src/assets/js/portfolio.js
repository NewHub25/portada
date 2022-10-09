//Se incorporan las imágenes de la carpeta './src/assets/images/portfolio'
import enlaces from '../images/portfolio/enlaces.jpg';
import pokedex from '../images/portfolio/pokedex.jpg';
import smooth from '../images/portfolio/smooth.jpg';

const UL_PORTAFOLIO = document.querySelector('.section_portafolio > ul');

const proyectosDatos = [
    {
        src: enlaces,
        alt: 'Enlaces para guardar',
        detalle: 'Aquí puedes guardar tus enlaces favoritos',
        url: 'https://programandoconterry.web.app/test/pegarEnlace.html',
    },
    {
        src: pokedex,
        alt: 'Aplicación para buscar pokemones',
        detalle: 'Juega viendo qué pokemon es más poderoso',
        url: 'https://programandoconterry.web.app/pokedex/index.html',
    },
    {
        src: smooth,
        alt: 'Mover la página suavemente',
        detalle: 'Mira el efecto de scroll suave con CSS',
        url: 'https://programandoconterry.web.app/smooth/smoothScroll.html',
    },
];

UL_PORTAFOLIO.innerHTML = proyectosDatos.map(dato => {
    return `
    <li>
        <img src="${dato.src}" alt="${dato.alt}">
        <p><a href="${dato.url}" target="_blank">${dato.detalle}</a></p>
    </li>
    `;
}).join('');
