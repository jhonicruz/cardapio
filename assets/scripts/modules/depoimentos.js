export default function initDepoimentos() {}

const depoimentos = document.querySelectorAll("[data-depoimentos='feed']");

const depoimentosBtn = document.querySelectorAll("[data-depoimentos='buttons']");

depoimentosBtn.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    depoimentos.forEach((depoimento) => {
      depoimento.classList.add("hidden");
    });

    depoimentos[index].classList.remove("hidden");
  });
});
