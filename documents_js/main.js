/*con esta funcion mandamos una alerta para el fonrmulario de contacto*/
function sendDate() {
  event.preventDefault();
  alert("Datos enviados Correctamente");
}

document.getElementById("game1").addEventListener("click", function () {
  window.location.href = "./documents_html/game1.html";
});

document.getElementById("game2").addEventListener("click", function () {
  window.location.href = "./documents_html/game2.html";
});

document.getElementById("quiz").addEventListener("click", function () {
  window.location.href = "./documents_html/quiz.html";
});
