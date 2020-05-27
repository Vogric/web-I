document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
    "use strict";
    let cuenta = 0;
    let btnVioleta = document.querySelector('.c1');
    btnVioleta.addEventListener("click", function () {
        let ultimoBtn = document.querySelector('#ultimobtn');
        ultimoBtn.innerHTML = "tu ultimo boton fue: el violeta";
        btnVioleta.addEventListener("click", contar());
    })

    let btnVerde = document.querySelector('.c2');
    btnVerde.addEventListener("click", function () {
        let ultimoBtn = document.querySelector('#ultimobtn');
        ultimoBtn.innerHTML = "tu ultimo boton fue: el verde";
        btnVerde.addEventListener("click", contar());
    })

    let btnGris = document.querySelector('.c3');
    btnGris.addEventListener("click", function () {
        let ultimoBtn = document.querySelector('#ultimobtn');
        ultimoBtn.innerHTML = "tu ultimo boton fue: el gris";
        btnGris.addEventListener("click", contar());
    })
    // EJERCICIO 2--------------------------------------------------------
    function contar() {
        cuenta++;
        document.querySelector("#contador").innerHTML=cuenta;
    }

}
