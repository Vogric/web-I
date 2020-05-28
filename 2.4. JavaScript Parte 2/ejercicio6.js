document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";
    let arreglo_items =  [];
    let boton = document.querySelector('#btn');
    let contador = 0;

    function existeInput(arreglo, input){
        let indice = 0;
        while ( (indice < arreglo.length) && (arreglo[indice] !== input) ){
            indice++;
        }
        return (indice < arreglo.length);
    }

    boton.addEventListener('click',function(){
        let lista = document.querySelector('#lista');
        let input = document.querySelector('#item-add').value;
        let existe = existeInput(arreglo_items, input);
        if ((contador < 10) && (!existe)){
            lista.innerHTML += "<li>" + input + "</li>";
            arreglo_items.push(input);
            contador++;
            console.log(arreglo_items);
        }
      }
    );
}