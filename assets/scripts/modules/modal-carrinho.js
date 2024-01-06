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

  // Classes css

  const classeHidden = "hidden"; // Para mostrar ou ocultar o modal do Carrinho
  const classechecked = "checked"; // Para fazer verificação dos steps - passo a passo da compra

  btnMeuCarrinho.addEventListener("click", abrirModal);

  function abrirModal() {
    const constainsClassOpen =
      menuContainer.classList.contains("open") && toggleMenu.classList.contains("open");

    if (constainsClassOpen) {
      menuContainer.classList.remove("open");
      toggleMenu.classList.remove("open");
    }
    modalContainer.classList.remove(classeHidden);

    fecharModal();
    continuar();
    voltar();
  }

  function fecharModal() {
    btnFechar.addEventListener("click", () => {
      modalContainer.classList.add(classeHidden);
      document.body.style.overflow = "auto";
    });
  }

  function continuar() {
    btnContinuar.addEventListener("click", () => {
      adicionarClasse([produtosContainer, tituloProdutos, step, line, btnContinuar], classeHidden);
      removerClasse([entregaContainer, tituloEntrega, btnVoltar, btnRevisar], classeHidden);
    });
  }

  function voltar() {
    btnVoltar.addEventListener("click", () => {
      adicionarClasse([entregaContainer, tituloEntrega, btnRevisar, btnVoltar], classeHidden);
      removerClasse([produtosContainer, tituloProdutos, step, line, btnContinuar], classeHidden);
    });
  }

  function adicionarClasse(alvos, classe) {
    alvos.forEach((alvo) => {
      alvo.classList.add(classe);
    });
  }
  function removerClasse(alvos, classe) {
    alvos.forEach((alvo) => {
      alvo.classList.remove(classe);
    });
  }

  return {
    fecharModal,
    continuar,
    voltar,
  };
}
