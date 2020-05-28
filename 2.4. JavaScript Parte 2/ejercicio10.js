document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";
    let btnAgregarComentario = document.querySelector('#agregarComentario');
    btnAgregarComentario.addEventListener('click', function(){
        let nombreyApellido = document.querySelector('#nombreYApellido').value;
        let comentario = document.querySelector('#comentario').value;
        let node = document.createElement('p');
        let textnode = document.createTextNode("");
        document.querySelector('#comentarios').appendChild(node);
        
    }
    );
}