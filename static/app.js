document.addEventListener("DOMContentLoaded", function () {
  const casamento = new Date("2026-04-25T11:30:00");

  const flipDays = document.getElementById("flip-days");
  const flipHours = document.getElementById("flip-hours");
  const flipMinutes = document.getElementById("flip-minutes");
  const flipSeconds = document.getElementById("flip-seconds");

  function atualizarFlip(flipCard, valor) {
    const front = flipCard.querySelector(".front");
    const back = flipCard.querySelector(".back");

    if (front.textContent !== valor) {
      back.textContent = valor;
      flipCard.classList.add("flip");
      setTimeout(() => {
        front.textContent = valor;
        flipCard.classList.remove("flip");
      }, 500);
    }
  }

  function atualizarContador() {
    const agora = new Date();
    const diff = casamento - agora;

    if (diff <= 0) {
      flipDays.querySelector(".front").textContent = "00";
      flipHours.querySelector(".front").textContent = "00";
      flipMinutes.querySelector(".front").textContent = "00";
      flipSeconds.querySelector(".front").textContent = "00";
      return;
    }

    const dias = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const horas = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutos = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
    const segundos = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    atualizarFlip(flipDays, dias);
    atualizarFlip(flipHours, horas);
    atualizarFlip(flipMinutes, minutos);
    atualizarFlip(flipSeconds, segundos);
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
});
