let button = document.querySelector('#button');
button.addEventListener("click", AddTitle);

function AddTitle(){
    let name = document.querySelector('#name').value;
    let lastname = document.querySelector('#lastname').value;
    document.querySelector('#title').innerHTML = name +"  "+ lastname;
}