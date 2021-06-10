const $formulario = document.getElementById("formulario");

const paraFormulario = (e) => {
    alert("Recibido. ¡Pronto tendrás correo nuestro!");
    $formulario.innerHTML ='<p> Recibido. ¡Pronto tendrás correo nuestro! </p>';
    e.preventDefault();
}
$formulario.addEventListener('submit', paraFormulario);

//Se anyaden los videos
/*
const addVideo = (e, enlace) =>{
    const video = document.createElement("iframe");
    video.src = enlace;
    video.loading="lazy";
    e.appendChild(video);
}


window.addEventListener("load", (e) =>{
    const $washoku = document.getElementById("video-washoku");
    const $mibu = document.getElementById("video-mibu");
    addVideo($washoku, "https://www.youtube.com/embed/Xtnwt-Jq93E")
    addVideo($mibu, "https://www.youtube.com/embed/e2WvHxVqif4")
});
*/


const addVideo = (e, elemento, enlace) =>{
    //document.removeChild(e);
    const video = document.createElement("iframe");
    video.src = enlace;
    console.log(e);
    elemento.replaceChild(video, e.parentElement);
}
const $washoku = document.getElementById("video-washoku");

$facade = document.querySelector(".image-washoku");
$facade2 = document.querySelector(".image-mibu");
$facade.addEventListener("click", (e) =>{
    const $washoku = document.getElementById("video-washoku");

    addVideo(e.target, $washoku, "https://www.youtube.com/embed/Xtnwt-Jq93E")

})
$facade.addEventListener("mouseover", (e) =>{
    const $washoku = document.getElementById("video-washoku");
    addVideo(e.target, $washoku, "https://www.youtube.com/embed/Xtnwt-Jq93E")
})

$facade2.addEventListener("click", (e) =>{
    const $mibu = document.getElementById("video-mibu");
    addVideo(e.target, $mibu, "https://www.youtube.com/embed/e2WvHxVqif4")
})
$facade2.addEventListener("mouseover", (e) =>{
    const $mibu = document.getElementById("video-mibu");
    addVideo(e.target, $mibu, "https://www.youtube.com/embed/e2WvHxVqif4")
})
