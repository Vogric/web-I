let imagen = document.querySelector('#imagen');
imagen.addEventListener('mouseover', magnifyImg);

function magnifyImg(){
    let imagen = document.querySelector('#imagen');
    imagen.classList.toggle('bigger');
}