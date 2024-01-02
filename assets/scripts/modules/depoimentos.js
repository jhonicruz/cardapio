export default function initDepoimentos() {}

const depoimentos = document.querySelectorAll("[data-depoimentos='feed']");

const depoimentosBtn = document.querySelectorAll("[data-depoimentos='buttons']");

const events = ["click", "touch"];

depoimentosBtn.forEach((button, index) => {
  events.forEach((userEvent) =>
    button.addEventListener(userEvent, (e) => {
      e.preventDefault();
      depoimentos.forEach((depoimento) => {
        depoimento.classList.add("hidden");
      });

      depoimentos[index].classList.remove("hidden");
    })
  );
});
