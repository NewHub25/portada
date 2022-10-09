//Librerias
import Typed from 'typed.js';

//Animancion de tipeo
const typed = new Typed('.typed', {
    strings: [
        'desarrollador web',
        'diseñador de páginas',
        'creador online web',
    ].map(item => `<i class="section-span_i">${item}</i>`),
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false, //Alterar el orden en que se escriben las palabras
    backDelay: 1500,
    loop: true, //Repetir el array de strings
    loopCount: false, //false = infinite
    showCursor: true, //Mostrar cursor palpitante
    cursorChar: '|',
    contentType: 'html', //html o null para texto sin formato
});