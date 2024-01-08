export default function initDepoimentos() {}

const depoimentos = document.querySelectorAll("[data-depoimentos='feed']");

const depoimentosBtn = document.querySelectorAll("[data-depoimentos='buttons']");

const events = ["click", "touch"];

depoimentosBtn[0].classList.add("ativo");
depoimentos[0].classList.remove("hidden");

function mostrarDepoimento(index) {
  depoimentos.forEach((depoimento) => depoimento.classList.add("hidden"));
  depoimentos[index].classList.remove("hidden");
  depoimentosBtn.forEach((btn) => btn.classList.remove("ativo"));
  depoimentosBtn[index].classList.add("ativo");
}

depoimentosBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarDepoimento(index);
  });
});
