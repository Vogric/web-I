document.addEventListener("DOMContentLoaded", StartPage);

function StartPage(){
    "use strict";
    let equipo = {
        "nombre" : "Barcelona FC" ,
        "puntos" : 98 ,
        "pj" : 35 ,
        "pg" : 32 ,
        "pe" : 2 ,
        "pp" : 1
     }

     console.log(equipo);
     console.log("pj", "pg", "pe", "pp");
     console.log(equipo.pj,equipo.pg,equipo.pe,equipo.pp );

}