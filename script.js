


//////////////////////enviar MENSAJE/////////////////////////

const $tmContactForm = document.querySelector('#tmContactForm');
const $boton = document.querySelector('#btnenviar');

$tmContactForm.addEventListener('submit', btnenviar);

function btnenviar(e){
    e.preventDefault();
    $boton.click();
    alert('Mensaje enviado, muchas gracias!')
}
