document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";

    let arreglo_notas =  [];

    function calculoDelPromedio(arrNotas){
        let sumatorianotas = 0;
        for (let indice = 0; indice < arrNotas.length; indice++){
            sumatorianotas += parseInt(arrNotas[indice]);
        }
        return(sumatorianotas/arrNotas.length);
    }

    let botonAdd = document.querySelector("#add-nota");
    botonAdd.addEventListener('click', function(){
        let nota = document.querySelector('#input-nota').value;
        arreglo_notas.push(nota);
        console.log(arreglo_notas);
    }
    );

    let botonProm = document.querySelector("#btn-prom");
    botonProm.addEventListener('click', function(){
        /*calcula la nota*/
        let notapromedio = calculoDelPromedio(arreglo_notas);
        /*muestra por pantalla la nota*/
        let muestraprom = document.querySelector("#promedio");
        muestraprom.innerHTML = "el promedio de notas es:" + notapromedio;
      }
    );

}