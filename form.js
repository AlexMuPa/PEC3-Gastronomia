const $formulario = document.getElementById("formulario");

const paraFormulario = (e) => {
    alert("Recibido. ¡Pronto tendrás correo nuestro!");
    $formulario.innerHTML ='<p> Recibido. ¡Pronto tendrás correo nuestro! </p>';
    e.preventDefault();
}
$formulario.addEventListener('submit', paraFormulario);