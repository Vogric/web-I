document.addEventListener("DOMContentLoaded", InicioPagina);

function InicioPagina(){
    "use strict";
    let objeto = {

        "cursos" : [
     
            {
     
                "sede": "Tandil",
     
                "aprobados": 88,
     
                "desaprobados": 64,
     
                "año": 2019
     
            },
     
            {
     
                "sede": "Rauch",
     
                "aprobados": 19,
     
                "desaprobados": 6,
     
                "año": 2019
     
            },
        ]
     }

/*......................CONSOLA................................*/
    console.log("SEDE - AÑO")
    for(let index = 0; index < objeto.cursos.length; index++){
        console.log(objeto.cursos[index].sede, "-", objeto.cursos[index].año);
    }
}