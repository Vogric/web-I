document.addEventListener("DOMContentLoaded", StartPage);

function StartPage(){
    "use strict";

    let arregloNotas =  [];

    let botonAdd = document.querySelector("#js-btn-agregar-nota");
    let listaDeNotas = document.querySelector("#js-notas");
    botonAdd.addEventListener('click', () => {
        let nota = document.querySelector('#js-input-nota');
        arregloNotas.push(nota.value);
        let li = document.createElement("li");
        li.innerHTML = nota.value;
        listaDeNotas.appendChild(li);
        console.log(arregloNotas);
    }

    );
    function calculoDelPromedio(arrNotas){
        let sumatoriaNotas = 0;
        for (let indice = 0; indice < arrNotas.length; indice++){
            sumatoriaNotas += parseInt(arrNotas[indice]);
        }
        return(sumatoriaNotas/arrNotas.length);
    }

    let botonProm = document.querySelector("#js-btn-promedio");
    botonProm.addEventListener('click', () => {
        let notaPromedio = calculoDelPromedio(arregloNotas);
        let muestraProm = document.querySelector("#js-promedio");
        muestraProm.innerHTML = "El promedio de las notas ingresadas es:" + notaPromedio;

      }
      
    );
}