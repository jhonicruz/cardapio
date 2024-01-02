export default function initFuncionamento() {}

const funcionamento = document.querySelector(".funcionamento");

const funcionamentoTexto = document.querySelector("[data-isopen]");

console.log(funcionamentoTexto);

const agora = new Date();
const horaAtual = agora.getHours();
const diaSemanaAtual = agora.getDay();

const diasAbertos = funcionamento.getAttribute("data-semana").split(",").map(Number);
const horarioAberto = funcionamento.getAttribute("data-horario").split(",").map(Number);

if (diasAbertos.length && horarioAberto.length) {
  const isOpen =
    diasAbertos.includes(diaSemanaAtual) &&
    horaAtual >= horarioAberto[0] &&
    horaAtual < horarioAberto[1];

  if (isOpen) {
    funcionamento.classList.add("open");
    funcionamentoTexto.innerText = "Aberto";
  } else {
    funcionamento.classList.remove("open");
    funcionamentoTexto.innerText = "Fechado";
  }
}
