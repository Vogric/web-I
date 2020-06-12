document.addEventListener("DOMContentLoaded", StartPage);

function StartPage(){
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
    //........funciones............
    function ObtenerCochera(carpa){
        for(let i = 0; i < reservas.pedidos.length; i++){
            if(reservas.pedidos[i].carpa === carpa){
                console.log("La cochera de la carpa " + carpa + " es la " + reservas.pedidos[i].cochera);
            }
        }
    }
    function AgregarPedido(){
        let pedido = CrearPedido();
        reservas.pedidos.push(pedido);
    }
    function CrearPedido(){
        let item = {
            "patente": "BDY451",
            "cochera": 9,
            "carpa": 35
        }
        return item;
    }
    //...START........
    ObtenerCochera(25);
    AgregarPedido();
}