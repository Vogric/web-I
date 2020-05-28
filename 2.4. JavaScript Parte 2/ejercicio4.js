document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";
    let boton = document.querySelector('#btn');
    let contador = 0;
    boton.addEventListener('click',function(){
        let lista = document.querySelector('#lista');
        if (contador < 10){
            let input = document.querySelector('#item-add').value;
            lista.innerHTML += "<li>" + input + "</li>";
            contador++;
        }
      }
    );
}