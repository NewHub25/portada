//Archivos JS
import './tipeo';
//Se incorporan los estilos
import '../css/index.css';
import '../css/menu.css';
import '../css/inicio.css';
//Se incorporan las imágenes './src/assets/images/anillo_del_sur.jpg'
import anillo_del_sur from '../images/anillo_del_sur.jpg';
import arena_conchas from '../images/arena_conchas.jpg';
import bolas_navidad from '../images/bolas_navidad.jpg';
import bote_mar from '../images/bote_mar.jpg';
import caracol from '../images/caracol.jpg';
import flor from '../images/flor.jpg';
import lago_bosque from '../images/lago_bosque.jpg';
import lago_rocas from '../images/lago_rocas.jpg';
import nebulosa_carina from '../images/nebulosa_carina.jpg';
import tortuga_marina from '../images/tortuga_marina.jpg';
import vaso_playa from '../images/vaso_playa.jpg';
import leaves from '../images/leaves.jpg';
import floor_wood from '../images/floor_wood.jpg';
const fondos_importados = [
    anillo_del_sur,
    arena_conchas,
    bolas_navidad,
    bote_mar,
    caracol,
    flor,
    lago_bosque,
    lago_rocas,
    nebulosa_carina,
    tortuga_marina,
    vaso_playa
];

const IMG_FONDO = document.getElementById('img_fondo');
IMG_FONDO.src = fondos_importados[fondos_importados.length - 1];
const NAV_MENU = document.querySelector('[data-use="menu"]');
const NAV_DIV_SPAN = document.querySelectorAll('.nav-div_enlaces > span');

//Cambiar el fondo web con muchas imágenes
let cont = 0;
setInterval( () => {
    if(cont > fondos_importados.length - 1) cont = 0;
    IMG_FONDO.src = fondos_importados[cont];
    cont++;
}, 3000);

//Menu con fondo de madera y hojas
NAV_MENU.style.backgroundImage = `url(${leaves})`;
NAV_DIV_SPAN.forEach(span => span.style.backgroundImage = `url(${floor_wood})`);
