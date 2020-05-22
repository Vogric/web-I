"use strict";

let cambio = document.querySelector('#body');
cambio.addEventListener('click', mostrarDiv);

function mostrarDiv(){
let div = document.querySelector('#div');
div.classList.add('.mostrado');
}

