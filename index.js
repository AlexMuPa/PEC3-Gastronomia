import moment from 'moment-timezone';

//Para la hora japonesa


const $h3 = document.getElementById("japon");
$h3.innerHTML= "Hora actual en Japón: ";

const $miHora = document.getElementById("horaJapon");
setInterval(() => {
    let horaActual =moment.tz(new Date(), 'Asia/Tokyo').format('HH:mm:ss');
    $miHora.innerHTML = `<p>${horaActual}</p>`;
}, 1000);

//para el formulario
