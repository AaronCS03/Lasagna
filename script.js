
const TIEMPO_HORNO = 40;

let capas = prompt("¿Cuántas capas tendrá la lasaña?");
let tiempoEnHorno = prompt("¿Cuántos minutos lleva en el horno?");


if (
  capas === "" || tiempoEnHorno === "" ||
  capas === null || tiempoEnHorno === null ||
  isNaN(capas) || isNaN(tiempoEnHorno) ||
  capas < 0 || tiempoEnHorno < 0
) {
  document.getElementById("restoHorno").innerHTML =
    "Error: Debes ingresar valores válidos (no negativos).";
  document.getElementById("prepTotal").innerHTML = "";
  document.getElementById("trabajoTotal").innerHTML = "";
} else {

  capas = Number(capas);
  tiempoEnHorno = Number(tiempoEnHorno);

  let tiempoPreparacion = capas * 2;


  let tiempoRestante = TIEMPO_HORNO - tiempoEnHorno;
  if (tiempoRestante < 0) tiempoRestante = 0;

  let tiempoTrabajo = tiempoPreparacion + tiempoEnHorno;


  document.getElementById("restoHorno").innerHTML =
    "⏳ Tiempo restante en el horno: <b>" + tiempoRestante + " minutos</b>";

  document.getElementById("prepTotal").innerHTML =
    "🍝 Tiempo total de preparación: <b>" + tiempoPreparacion + " minutos</b>";

  document.getElementById("trabajoTotal").innerHTML =
    "🧑‍🍳 Tiempo total de trabajo: <b>" + tiempoTrabajo + " minutos</b>";
}
