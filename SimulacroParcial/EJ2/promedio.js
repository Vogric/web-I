document.addEventListener("DOMContentLoaded", InicioPagina);

function InicioPagina(){
    "use strict";
    /*...............variables.....................................*/
    let nota = document.querySelector('#js-input-nota');
    let botonAgregar = document.querySelector('#js-boton-agregar');
    let botonPromedio = document.querySelector('#js-boton-promedio');
    let body = document.querySelector('#js-body');
    let arrNotas = [];
    /*...............eventos.....................................*/
    botonAgregar.addEventListener('click', () => {
        arrNotas.push(nota.value);
        console.log("nota");
        console.log(nota.value);
        console.log("arreglo pusheado");
        console.log(arrNotas);
    }
    );
    botonPromedio.addEventListener('click', () => {
        let promedio = obtenerPromedio();
        let p = document.createElement("p");
            p.innerText = promedio;
            body.appendChild(p);
    }
    );
    /*...............funciones.....................................*/
    function obtenerPromedio(){
        let sumatoriaNotas = 0;
        for(let indice = 0; indice < arrNotas.length; indice++){
            sumatoriaNotas += parseInt(arrNotas[indice]);
        }
        return sumatoriaNotas/arrNotas.length;
    }
}