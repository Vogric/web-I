'use strict';
let cambio = document.querySelector('#btn');
cambio.addEventListener('click', cambiar);

function cambiar() {
    let tarjeta = document.querySelector('#tarjeta');  
    tarjeta.classList.toggle('div');
    let nombreUser = document.querySelector('#nombre').value;
    let apellidoUser = document.querySelector('#apellido').value;
    document.querySelector('#tnombre-apellido').innerHTML = nombreUser + apellidoUser;
    let profesion = document.querySelector('#profesion').value;
    document.querySelector('#tprofesion').innerHTML = profesion;
    let email = document.querySelector('#email').value;
    document.querySelector('#temail').innerHTML = email;
    let tel = document.querySelector('#tel').value;
    document.querySelector('#ttel').innerHTML = tel;
    let direccion = document.querySelector('#direccion').value;
    document.querySelector('#tdireccion').innerHTML = direccion;
}
