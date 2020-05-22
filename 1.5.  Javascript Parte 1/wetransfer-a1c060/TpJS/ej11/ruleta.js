'use strict';

let boton = document.querySelector('#jugar');
boton.addEventListener('click', jugada);

function jugada () {
    let numRuleta = Math.floor((Math.random() * 36));
    document.querySelector('#resultado').innerHTML = numRuleta;
    let numeroJugador = document.querySelector('#numero').value;
    if ( numRuleta === numeroJugador) {
        document.querySelector('#gano-o-perdio').innerHTML = "¡GANASTE!";
    }
    else {
        document.querySelector('#gano-o-perdio').innerHTML =   "LA CASA HA GANADO, VUELVA A INTENTARLO!";
    }
}
