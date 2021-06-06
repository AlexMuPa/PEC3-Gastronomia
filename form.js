const $formulario = document.getElementById("formulario");

const paraFormulario = (e) => {
    alert("Recibido. ¡Pronto tendrás correo nuestro!");
    $formulario.innerHTML ='<p> Recibido. ¡Pronto tendrás correo nuestro! </p>';
    e.preventDefault();
}
$formulario.addEventListener('submit', paraFormulario);

//Se anyaden los videos
const addVideo = (elemento, video, enlace) =>{
    video.src = enlace;
    video.loading="lazy";
    elemento.appendChild(video);
}
const $washoku = document.getElementById("video-washoku");
const $mibu = document.getElementById("video-mibu");
const primerVideo = document.createElement("iframe");
const segundoVideo = document.createElement("iframe");
/*
miVideo.src = "https://www.youtube.com/embed/Xtnwt-Jq93E";
miVideo.loading = "lazy";
$washoku.appendChild(miVideo);
*/
addVideo($washoku, primerVideo, "https://www.youtube.com/embed/Xtnwt-Jq93E");
addVideo($mibu, segundoVideo, "https://www.youtube.com/embed/e2WvHxVqif4");