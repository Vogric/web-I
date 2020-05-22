document.querySelector("#btn-prender").addEventListener("click", prender);
document.querySelector("#btn-apagar").addEventListener("click", apagar);

function prender(){
    //cambiar la foto
    document.querySelector("#img-lampara").src = "images/lampara-on.jpg";


    //cambiar fondo de la pagina
    document.querySelector("#fondo").classList.add("prendido");
    document.querySelector("#fondo").classList.remove("apagado");
}

function apagar(){
    //cambiar la foto
    document.querySelector("#img-lampara").src = "images/lampara-off.jpg";

    //cambiar fondo de la pagina
    document.querySelector("#fondo").classList.add("apagado");
}