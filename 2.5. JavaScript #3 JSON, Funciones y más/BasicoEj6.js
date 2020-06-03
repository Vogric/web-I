document.addEventListener("DOMContentLoaded", StartPage);

function StartPage(){
    "use strict";
    let tabla = [
        {
        "nombre" : "Barcelona FC" ,
        "puntos" : 98 ,
        "pj" : 35 ,
        "pg" : 32 ,
        "pe" : 2 ,
        "pp" : 1
        },
        {
        "nombre" : "Atlético de Madrid" ,
        "puntos" : 74 ,
        "pj" : 35 ,
        "pg" : 22 ,
        "pe" : 8 ,
        "pp" : 5 ,
        },
        {
        "nombre" : "Equipo 3" ,
        "puntos" : 72 ,
        "pj" : 35 ,
        "pg" : 22 ,
        "pe" : 8 ,
        "pp" : 5 ,
        },
        {
        "nombre" : "Equipo 4" ,
        "puntos" : 14 ,
        "pj" : 35 ,
        "pg" : 22 ,
        "pe" : 8 ,
        "pp" : 5 ,
        },
        {
        "nombre" : "Equipo 5" ,
        "puntos" : 71 ,
        "pj" : 35 ,
        "pg" : 22 ,
        "pe" : 8 ,
        "pp" : 5 ,
        }
        ];
        console.log(tabla);
        console.log("Estadisticas primer equipo");
        console.log(tabla[0].nombre, "Puntos", tabla[0].puntos, "PJ", tabla[0].pj, "PG", tabla[0].pg, "PE", tabla[0].pe, "PP", tabla[0].pp );
        console.log("Cantidad de equipos de la tabla");
        console.log(tabla.length);
        console.log("Diferencia de puntos entre el primer y segundo equipo");
        console.log(tabla[0].puntos - tabla[1].puntos);

}