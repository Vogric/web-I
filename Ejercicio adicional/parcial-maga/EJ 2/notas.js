document.addEventListener("DOMContentLoaded", IniciarPagina);

function IniciarPagina(){
    "use strict";
    /*----------------------variables-------------------- */
    let nombre = document.querySelector('#js-nombre');
    let apellido = document.querySelector('#js-apellido');
    let nota = document.querySelector('#js-nota');
    let button = document.querySelector('#js-btn-cargar');
    let lista = document.querySelector('#js-alumnos');
    let parrafo = document.querySelector('#js-promedio');
    let arr_notas = [];
    /*--------- evento ------------------ */
    
    button.addEventListener('click', ()=>{
        arr_notas.push(nota.value);
        console.log(arr_notas);
        let li = document.createElement("li");
        li.innerHTML = "Alumno: " + nombre.value + " "+ apellido.value + "  Nota: " + nota.value;
        console.log(li);
        lista.appendChild(li);
        let promedio = ObtenerPromedio();
        parrafo.innerHTML = "Promedio: " + promedio;
    }
    );

    /*-------------funciones---------------- */
    function ObtenerPromedio(){
        let sumatoria = 0;
        for(let index = 0; index < arr_notas.length; index++){
            sumatoria += parseInt(arr_notas[index]);
        }
        return sumatoria/arr_notas.length;
    }
    
}