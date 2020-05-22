let tarea = document.querySelector('#btnAgregarTarea');
tarea.addEventListener("click", agregarTarea);

function agregarTarea(){
    event.preventDefault();
    let tareaNueva;
    tareaNueva = document.querySelector('#valorInput').value;
    return document.querySelector('#tareaAgregada').innerHTML += '<li>' + tareaNueva + '</li>'
}