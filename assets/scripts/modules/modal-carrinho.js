export default function initModalCarrinho() {
  const modalContainer = document.querySelector('[data-modal="modal"]');

  // Buttons
  const btnMeuCarrinho = document.querySelector('[data-modal="btn-meuCarrinho"]');
  const btnFechar = document.querySelector('[data-modal="btn-fechar"]');
  const btnVoltar = document.querySelector('[data-modal="btn-voltar"]');
  const btnRevisar = document.querySelector('[data-modal="btn-revisar"]');
  const btnContinuar = document.querySelector('[data-modal="btn-continuar"]');
  const toggleMenu = document.querySelector('[data-toggle="collapse"]');

  // containers
  const produtosContainer = document.querySelector('[data-modal="produtos"]');
  const entregaContainer = document.querySelector('[data-modal="entrega"]');
  const menuContainer = document.querySelector("#menu");

  // titulos
  const tituloProdutos = document.querySelector('[data-modal="titulo-produtos"]');
  const tituloEntrega = document.querySelector('[data-modal="titulo-entrega"]');

  // steps

  const step = document.querySelector('[data-modal="step"]');
  const line = document.querySelector('[data-modal="line"]');

  // Classe

  const nomeClasse = "hidden";

  btnMeuCarrinho.addEventListener("click", abrirModal);

  function abrirModal() {
    if (menuContainer.classList.contains("open") && toggleMenu.classList.contains("open")) {
      menuContainer.classList.remove("open");
      toggleMenu.classList.remove("open");
    }
    modalContainer.classList.remove(nomeClasse);

    if ((document.body.style.overflow = "auto")) {
      document.body.style.overflow = nomeClasse;
    }

    fecharModal();
    continuar();
    voltar();
  }

  function fecharModal() {
    btnFechar.addEventListener("click", () => {
      modalContainer.classList.add(nomeClasse);
      document.body.style.overflow = "auto";
    });
  }

  function continuar() {
    btnContinuar.addEventListener("click", () => {
      produtosContainer.classList.add(nomeClasse);
      tituloProdutos.classList.add(nomeClasse);
      step.classList.add("checked");
      line.classList.add("checked");
      entregaContainer.classList.remove(nomeClasse);
      tituloEntrega.classList.remove(nomeClasse);
      btnVoltar.classList.remove(nomeClasse);
      btnRevisar.classList.remove(nomeClasse);
      btnContinuar.classList.add(nomeClasse);
    });
  }

  function voltar() {
    btnVoltar.addEventListener("click", () => {
      produtosContainer.classList.remove(nomeClasse);
      tituloProdutos.classList.remove(nomeClasse);
      step.classList.remove("checked");
      line.classList.remove("checked");
      entregaContainer.classList.add(nomeClasse);
      tituloEntrega.classList.add(nomeClasse);
      btnVoltar.classList.add(nomeClasse);
      btnContinuar.classList.remove(nomeClasse);
      btnRevisar.classList.add(nomeClasse);
    });
  }
}
