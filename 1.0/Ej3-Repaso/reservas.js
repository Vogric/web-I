document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let reservas = {
    pedidos: [
      {
        patente: "WEB765",
        cochera: 8,
        carpa: 24,
      },
      {
        patente: "URL231",
        cochera: 2,
        carpa: 30,
      },
    ],
  };
  let carpa = 25;
  EncontrarCochera(carpa);
  InsertarPedido();

  function EncontrarCochera(carpa) {
    for (let index = 0; index < reservas.pedidos.length; index++) {
      if (reservas.pedidos[index].carpa == carpa) {
        console.log(
          "La cochera asociada a la carpa " +
            carpa +
            " es " +
            reservas.pedidos[index].cochera
        );
      }
    }
  }
  function InsertarPedido() {
    if (reservas.pedidos.length <= 20) {
      let pedido = {
        patente: "BDY451",
        cochera: 9,
        carpa: 35,
      };
      reservas.pedidos.push(pedido);
    }
  }
});
