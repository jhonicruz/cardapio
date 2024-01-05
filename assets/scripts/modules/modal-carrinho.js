export default function initModalCarrinho() {}

const modalContainer = document.querySelector('[data-modal="modal"]');

// Buttons
const btnMeuCarrinho = document.querySelector('[data-modal="btn-meuCarrinho"]');
const btnFechar = document.querySelector('[data-modal="btn-fechar"]');
const btnVoltar = document.querySelector('[data-modal="btn-voltar"]');
const btnRevisar = document.querySelector('[data-modal="btn-revisar"]');
const btnContinuar = document.querySelector('[data-modal="btn-continuar"]');

// containers
const produtosContainer = document.querySelector('[data-modal="produtos"]');
const entregaContainer = document.querySelector('[data-modal="entrega"]');

// titulos
const tituloProdutos = document.querySelector('[data-modal="titulo-produtos"]');
const tituloEntrega = document.querySelector('[data-modal="titulo-entrega"]');

// steps

const step = document.querySelector('[data-modal="step"]');
const line = document.querySelector('[data-modal="line"]');

btnMeuCarrinho.addEventListener("click", abrirModal);

function abrirModal(e) {
  e.preventDefault();

  modalContainer.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  fecharModal();
  continuar();
  voltar();
}

function fecharModal() {
  btnFechar.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
    document.body.style.overflow = "auto";
  });
}

function continuar() {
  btnContinuar.addEventListener("click", () => {
    produtosContainer.classList.add("hidden");
    tituloProdutos.classList.add("hidden");
    step.classList.add("checked");
    line.classList.add("checked");
    entregaContainer.classList.remove("hidden");
    tituloEntrega.classList.remove("hidden");
    btnVoltar.classList.remove("hidden");
  });
}

function voltar() {
  btnVoltar.addEventListener("click", () => {
    produtosContainer.classList.remove("hidden");
    tituloProdutos.classList.remove("hidden");
    step.classList.remove("checked");
    line.classList.remove("checked");
    entregaContainer.classList.add("hidden");
    tituloEntrega.classList.add("hidden");
    btnVoltar.classList.add("hidden");
  });
}
