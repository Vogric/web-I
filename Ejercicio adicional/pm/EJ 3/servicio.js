document.addEventListener("DOMContentLoaded", IniciarPagina);

function IniciarPagina(){
    "use strict";
    let reservas = {
        "pedidos" : [
                        {
                        "patente": "WEB765",
                        "cochera": 8,
                        "carpa": 24
                    },
                    {
                        "patente": "URL231",
                        "cochera": 2,
                        "carpa": 30
                    },
        ]
    }
/*---------------start------------------------*/
    let numero = 25;
    EncontrarCochera(numero);
    InsertarPedido();
/*---------------funciones------------------------*/
    function EncontrarCochera(carpa){
        for(let index = 0; index < reservas.pedidos.length; index++){
            if(reservas.pedidos[index].carpa === carpa){
                console.log("la cochera es la " , reservas.pedidos[index].cochera);
            }
        }
    }
    function InsertarPedido(){
        let pedido = {
            "patente": "BDY451",
            "cochera": 9,
            "carpa": 35
        }
        reservas.pedidos.push(pedido);
    }
}