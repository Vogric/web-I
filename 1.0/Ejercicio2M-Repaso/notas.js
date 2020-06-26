document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let NotasCargadas = [];
  let BotonCargar = document.querySelector("#btn-cargar");
  BotonCargar.addEventListener("click", () => {
    let li = document.createElement("li");
    let Nombre = document.querySelector("#nombre").value;
    let Apellido = document.querySelector("#apellido").value;
    let Nota = document.querySelector("#nota").value;
    li.innerHTML = Nombre + " " + Apellido + " " + Nota;
    let ListaAlumnos = document.querySelector("#ListaAlumnos");
    ListaAlumnos.appendChild(li);
    let ValorPromedioNotas = document.querySelector("#ValorPromedioNotas");
    let SumatoriaDeNotas = 0;
    NotasCargadas.push(Nota);
    for (let index = 0; index < NotasCargadas.length; index++) {
      SumatoriaDeNotas += NotasCargadas[index];
    }
    ValorPromedioNotas.innerHTML = SumatoriaDeNotas / NotasCargadas.length;
  });
});
