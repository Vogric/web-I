document.addEventListener("DOMContentLoaded", function () {


    let ventas = {

        "info": "ok",

        "tickets": [

            { "id": "8Ea4", "instancia": "semifinal", "precio": 860, "vendida": false },

            { "id": "78F2", "instancia": "semifinal", "precio": 750, "vendida": true },

            { "id": "627B", "instancia": "final", "precio": 2500, "vendida": false }

        ]


    };

    document.getElementById("js-agregar-entrada").addEventListener("click", function (){
        let nuevoid = Math.random() * 5000;
        let instancia = document.getElementById("js-input-instancia").value;
        let precio = document.getElementById("js-input-precio").value;
        console.log(instancia);
        console.log(precio);
        let existeid = false;
        let i = 0;

        while (i < ventas.tickets.length) {
            if (ventas.tickets[i].id == nuevoid) {
                existeid = true;
                i = ventas.tickets.length;
            } else {
                i++;
            }
        }

        console.log(existeid);
        

        if(existeid==false){
            let nodo={
                "id": nuevoid,
                "instancia": instancia,
                "precio": precio,
                "vendida": false
            }
            ventas.tickets.push(nodo);
        }

    });


    let preciosentradas = 0;

    document.getElementById("js-calcular-ganancia-semifinal").addEventListener("click", function () {
        for (let i = 0; i < ventas.tickets.length; i++) {
            if ((ventas.tickets[i].instancia == "semifinal")&&(ventas.tickets[i].vendida==false)) {
                preciosentradas += parseInt(ventas.tickets[i].precio);
            }
        }
        document.getElementById("js-parrafo-ganancia").innerHTML = "Ganancias :" + preciosentradas * 0.05;
        preciosentradas=0;

    });



});