emailjs.init('12ohxHgCGHSKdVDaH');

const btn = document.querySelector('[type="submit"]');

document.querySelector('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';
   const btnStyles = 
   {
    width: '50%',
    fontSize: '1.5em',
    color: '#eee',
    fontWeight: 'bold',
    borderRadius: '7px',
    border: 'none',
    background: 'hsl(201, 100%, 40%)',
    transition: 'transform .5s',
    letterSpacing: '.2em',
   };
   for (const prop in btnStyles) {
    if (Object.hasOwnProperty.call(btnStyles, prop)) {
      btn.style[prop] = btnStyles[prop];
    }
   }

   const serviceID = 'default_service';
   const templateID = 'template_8th903l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
      document.querySelectorAll('.form_nav input').forEach(l => l.value = '');
      document.querySelector('textarea').textContent = '';
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});
