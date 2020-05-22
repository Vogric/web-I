let change = document.querySelector('#button');
change.addEventListener('click', ocultarMostrar);

function ocultarMostrar(){
    document.querySelector("#information").classList.toggle("ocultar");
}