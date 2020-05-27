document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", function(){
        let titulos = document.querySelector("#title");
        titulos.classList.toggle("claseModificada");
    }
    );
}