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
    //video.srcdoc = "<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Y8Wp3dafaMQ?autoplay=1><img src=https://img.youtube.com/vi/Y8Wp3dafaMQ/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>";
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
    video.loading="lazy";
    //video.srcdoc = "<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Y8Wp3dafaMQ?autoplay=1><img src=https://img.youtube.com/vi/Y8Wp3dafaMQ/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>";
    e.replaceChild(video, elemento);
}
const $washoku = document.getElementById("video-washoku");
const $mibu = document.getElementById("video-mibu");
$facade = document.getElementById("image-washoku");
$washoku.addEventListener("click", (e) =>{
    //const $washoku = document.getElementById("video-washoku");
    $facade = document.getElementById("image-washoku");
    addVideo(e.target, $facade, "https://www.youtube.com/embed/Xtnwt-Jq93E")
})