document.addEventListener("DOMContentLoaded", StartPage);

function StartPage(){
    "use strict";
    /*---------------variables--------------------------------*/
    let botonCalificacion1 = document.querySelector('#js-btn-1');
    let botonCalificacion2 = document.querySelector('#js-btn-2');
    let botonCalificacion3 = document.querySelector('#js-btn-3');
    let botonCalificacion4 = document.querySelector('#js-btn-4');
    let botonCalificacion5 = document.querySelector('#js-btn-5');
    let promedio = document.querySelector('#js-promedio');
    let cantCalificaciones = document.querySelector('#js-total-calificaciones');
    let agradecimiento = document.querySelector('#js-agradecimiento');

    let arrayCalificaciones = [];
    /*---------------events--------------------------------*/
    botonCalificacion1.addEventListener('click', ()=>{
        arrayCalificaciones.push(1);
        MostrarEnDom(arrayCalificaciones);
    }
    );
    botonCalificacion2.addEventListener('click', ()=>{
        arrayCalificaciones.push(2);
        MostrarEnDom(arrayCalificaciones);
    }
    );
    botonCalificacion3.addEventListener('click', ()=>{
        arrayCalificaciones.push(3);
        MostrarEnDom(arrayCalificaciones);
    }
    );
    botonCalificacion4.addEventListener('click', ()=>{
        arrayCalificaciones.push(4);
        MostrarEnDom(arrayCalificaciones);
    }
    );
    botonCalificacion5.addEventListener('click', ()=>{
        arrayCalificaciones.push(5);
        MostrarEnDom(arrayCalificaciones);
    }
    );
    /*-----------------function---------------------------*/
    function MostrarEnDom(){
        let sumatoriaTotal = 0;
        for(let i = 0; i < arrayCalificaciones.length; i++){
            sumatoriaTotal += arrayCalificaciones[i];
        }
        console.log(arrayCalificaciones);
        promedio.innerHTML = "El promedio actual es:" + sumatoriaTotal/arrayCalificaciones.length;
        cantCalificaciones.innerHTML = "La cantidad total de notas es: " + arrayCalificaciones.length;
        agradecimiento.innerHTML = "Gracias por la calificación"
    }
}