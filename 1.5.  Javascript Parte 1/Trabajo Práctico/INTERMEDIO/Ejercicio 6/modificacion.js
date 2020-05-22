let button = document.querySelector('#button');
button.addEventListener("click", Change);

function Change(){
    document.querySelector('#div').classList.add('cambio');
    document.querySelector('#div').classList.remove('div');
}