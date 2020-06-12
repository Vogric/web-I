/*La empresa “Fixture SA” quiere implementar un servicio para que sus usuarios vendan las entradas a la fase
final del mundial que ya no van a utilizar. Por este servicio la empresa cobrará un 5% de comisión por cada entrada vendida. 
La información de los tickets vendidos la tiene guardada en un objeto JSON de la siguiente forma:

let ventas = {

  "info": "ok"

  "tickets": [

 {“id”: “8Ea4”, "instancia": "semifinal", "precio": 860, "vendida": false},  

 {“id”: “78F2”, "instancia": "semifinal", "precio": 750, "vendida": true},

 {“id”: “627B”, "instancia": "final", "precio": 2500, "vendida": false} 

  ]

}


Escriba el código JS para:

1.Insertar una entrada {"instancia": "final", "precio": 3800}

2.Calcular las ganancias de la empresa si se vendieran todas las entradas de la instancia “semifinal”.

Aclaración: el objeto JSON es de ejemplo, no suponga que las posiciones de los arreglos o los valores de los 
datos se respetan. Debe funcionar con cualquier objeto de este tipo.
Entrega: Se puede subir un archivo comprimido o poner dentro del texto el código delimitando
claramente cada una de las partes.*/


document.addEventListener("DOMContentLoaded", InicioPagina);

function InicioPagina(){
    "use strict";
    /*****************************JSON************************************************ */
    let ventas = {

        "info": "ok",
      
        "tickets": [
      
            {"id": "8Ea4", "instancia": "semifinal", "precio": 860, "vendida": false},  
      
            {"id": "78F2", "instancia": "semifinal", "precio": 750, "vendida": true},
      
            {"id": "627B", "instancia": "final", "precio": 2500, "vendida": false} 
      
        ]
      
      }
    /*****************************INICIO************************************************ */
    InsertarEntrada();
    CalcularGanancias();

    /*****************************FUNCIONES GENERALES***************************************** */
    function InsertarEntrada(){
        let NuevoTicket = CrearTicket();
        ventas.tickets.push(NuevoTicket);
        console.log(ventas);
        console.log(tickets);
    }
    function CalcularGanancias(){
        let ganancia = 0;
        for()//RECORRER TODO EL ARREGLO ventas.tickets
            if ( (ventas.tickets[index].instancia === "semifinal") && (ventas.tickets[index].vendida //* == true*/)){
            ganancia =+ 5%;
        }
    }


    /*****************************FUNCIONES ADICIONALES***************************************** */
    function CrearTicket(){
        let ticket = {
            "id": Math.floor((Math.random() * 1000000)),
            "instancia": "final",
            "precio": 3800,
            "vendida": false
        }
        return(ticket);
    }
}