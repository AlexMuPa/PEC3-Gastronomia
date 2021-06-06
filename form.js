const $formulario = document.getElementById("formulario");

const paraFormulario = (e) => {
    alert("Recibido. ¡Pronto tendrás correo nuestro!");
    $formulario.innerHTML ='<p> Recibido. ¡Pronto tendrás correo nuestro! </p>';
    e.preventDefault();
}
$formulario.addEventListener('submit', paraFormulario);

//Se anyaden los videos
const addVideo = (e, enlace) =>{
    const video = document.createElement("iframe");
    video.src = enlace;
    video.loading="lazy";
    e.appendChild(video);
}

/*
const primerVideo = document.createElement("iframe");
const segundoVideo = document.createElement("iframe");

miVideo.src = "https://www.youtube.com/embed/Xtnwt-Jq93E";
miVideo.loading = "lazy";
$washoku.appendChild(miVideo);
*/

window.addEventListener("load", (e) =>{
    const $washoku = document.getElementById("video-washoku");
    const $mibu = document.getElementById("video-mibu");
    addVideo($washoku, "https://www.youtube.com/embed/Xtnwt-Jq93E")
    addVideo($mibu, "https://www.youtube.com/embed/e2WvHxVqif4")
});
$mibu.addEventListener("load", addVideo);
//addVideo($washoku, primerVideo, "https://www.youtube.com/embed/Xtnwt-Jq93E");
//addVideo($mibu, segundoVideo, "https://www.youtube.com/embed/e2WvHxVqif4");