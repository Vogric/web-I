document.addEventListener("DOMContentLoaded", iniciarPagina);
//NO FUNCIONA*/
function iniciarPagina(){
    "use strict";
    let boton = document.querySelector("#btn");
    boton.addEventListener("click", function(){
        let div = document.querySelector("#div");
        div.classList.add("change");
        for (let indice= 0; indice < 10; indice++){
            let timer = setTimeout(change(indice), 5000);
            function change(indice){
                document.querySelector(".change").style.background = "#00000" + indice;
                indice++;
                console.log(indice);
            }
        }
    }

    );
}