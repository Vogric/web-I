document.addEventListener("DOMContentLoaded", StartPage);

function StartPage(){
    "use strict";
    let totalP = document.querySelectorAll("p").length;
    let boton1 = document.querySelector("#primer-btn");
    boton1.innerHTML = "El total de parrafo es " + totalP;

    let CantidadItems = document.querySelectorAll("#Lista-menu li").length;
    let boton2 = document.querySelector("#segundo-btn");
    boton2.innerHTML = "El total de Items de la lista es " + CantidadItems;

    let TotalDivs = document.querySelectorAll(".noticia").length;
    let boton3 = document.querySelector("#tercer-btn");
    boton3.innerHTML = "El total de DIV's con la clase noticia son " + TotalDivs;

    let BotonEliminarParrafo = document.querySelector("#boton-borrar");
    BotonEliminarParrafo.addEventListener("click", ()=>{
        document.querySelector("p").remove();
    });
    let paragraphs = document.querySelectorAll("p");
    console.log(paragraphs);
    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener('click', ()=> {
            paragraphs[i].classList.add("NuevaClaseP");
        });
    }     
}
