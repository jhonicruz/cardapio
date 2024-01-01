export default function initMenuHamburguer() {}

const btnMenu = document.querySelector('[data-toggle="collapse"]');
const hamburguer = document.querySelector('[data-toggle="hamburguer"]');

console.log(btnMenu);
console.log(hamburguer);

const events = ["click", "touch"];

events.forEach((userEvents) => btnMenu.addEventListener(userEvents, handleClick));

function handleClick(e) {
  e.preventDefault();
  this.classList.toggle("open");

  const hasClass = this.classList.contains("open");

  if (hasClass) {
    this.setAttribute("aria-label", "Fechar Menu");
    this.setAttribute("aria-expanded", hasClass);
  } else {
    this.setAttribute("aria-label", "Abrir Menu");
  }
}
