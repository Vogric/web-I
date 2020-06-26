document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let btn1 = document.querySelector("#js-btn1");
  let btn2 = document.querySelector("#js-btn2");
  let btn3 = document.querySelector("#js-btn3");
  let btn4 = document.querySelector("#js-btn4");
  let btn5 = document.querySelector("#js-btn5");
  let Promedio = document.querySelector("#js-Promedio");
  let TotalCalificaciones = document.querySelector("#js-TotalCalificaciones");
  let Agradecimiento = document.querySelector("#js-Agradecimiento");

  let Calificaciones = [];

  btn1.addEventListener("click", () => {
    Calificaciones.push(1);
    mostrar(Calificaciones);
  });
  btn2.addEventListener("click", () => {
    Calificaciones.push(2);
    mostrar(Calificaciones);
  });
  btn3.addEventListener("click", () => {
    Calificaciones.push(3);
    mostrar(Calificaciones);
  });
  btn4.addEventListener("click", () => {
    Calificaciones.push(4);
    mostrar(Calificaciones);
  });
  btn5.addEventListener("click", () => {
    Calificaciones.push(5);
    mostrar(Calificaciones);
  });

  function mostrar() {
    let SumatoriaDeCalificaciones = 0;
    for (let index = 0; index < Calificaciones.length; index++) {
      SumatoriaDeCalificaciones += Calificaciones[index];
    }
    console.log(Calificaciones);
    Promedio.innerHTML =
      "El promedio de las calificaciones es: " +
      SumatoriaDeCalificaciones / Calificaciones.length;
    TotalCalificaciones.innerHTML =
      "El total de las calificaciones es: " + Calificaciones.length;
    Agradecimiento.innerHTML = "Muchas gracias por su calificación";
  }
});
