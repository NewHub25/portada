const form = document.querySelector('form');

const a = document.createElement('a');
const SUBMIT = document.querySelector('input[type="submit"]');

// a.href = `mailto:${form.correo}?subject=Gracias&body=${form.sugerencia}`;
// function enviarCorreo() {
//     a.click();
// }
SUBMIT.addEventListener('click', e => {
    e.preventDefault();
});
