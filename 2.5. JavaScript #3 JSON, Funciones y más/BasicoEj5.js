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

     let tbody = document.querySelector("#tbody");
     let Boton = document.querySelector("#Boton");
     Boton.addEventListener("click", () => {
         let tr = document.createElement("tr");
         let td1 = document.createElement("td");
         td1.innerHTML = equipo.nombre;
         tr.appendChild(td1);
         let td2 = document.createElement("td");
         td2.innerHTML = equipo.puntos;
         tr.appendChild(td2);
         let td3 = document.createElement("td");
         td3.innerHTML = equipo.pj;
         tr.appendChild(td3);
         let td4 = document.createElement("td");
         td4.innerHTML = equipo.pg;
         tr.appendChild(td4);
         let td5 = document.createElement("td");
         td5.innerHTML = equipo.pe;
         tr.appendChild(td5);
         let td6 = document.createElement("td");
         td6.innerHTML = equipo.pp;
         tr.appendChild(td6);

         tbody.appendChild(tr);
     })

}