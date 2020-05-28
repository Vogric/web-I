document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";
    let boton = document.querySelector('#btn');
    boton.addEventListener("click", function(){
        let texto = document.querySelector('#oculto');
        texto.classList.toggle("ocultar");
      }
    
    );
}