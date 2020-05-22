document.querySelector('#btn-prender').addEventListener('click', prender);
document.querySelector('#btn-apagar').addEventListener('click', apagar);

function prender() {
    document.querySelector('#img-lampara').src = "images/lampara-on.jpg";
    document.querySelector('#fondo').classList.add('prendido');


}

function apagar() {
    document.querySelector('#img-lampara').src = "images/lampara-off.jpg";
    // document.querySelector('#fondo').classList.add('apagado');
}
