export default function initModalCarrinho() {
  function selecionarElementoDom(elementoDom) {
    return document.querySelector(elementoDom);
  }

  // containers
  const modalContainer = selecionarElementoDom('[data-modal="modal"]');
  const produtosContainer = selecionarElementoDom('[data-modal="produtos"]');
  const entregaContainer = selecionarElementoDom('[data-modal="entrega"]');
  const menuContainer = selecionarElementoDom("#menu");

  // titulos
  const tituloProdutos = selecionarElementoDom('[data-modal="titulo-produtos"]');
  const tituloEntrega = selecionarElementoDom('[data-modal="titulo-entrega"]');

  // steps
  const step = selecionarElementoDom('[data-modal="step"]');
  const line = selecionarElementoDom('[data-modal="line"]');

  // Buttons
  const btnMeuCarrinho = selecionarElementoDom('[data-modal="btn-meuCarrinho"]');
  const btnFechar = selecionarElementoDom('[data-modal="btn-fechar"]');
  const btnVoltar = selecionarElementoDom('[data-modal="btn-voltar"]');
  const btnRevisar = selecionarElementoDom('[data-modal="btn-revisar"]');
  const btnContinuar = selecionarElementoDom('[data-modal="btn-continuar"]');
  const toggleMenu = selecionarElementoDom('[data-toggle="collapse"]');

  // Classes css
  const classeHidden = "hidden"; // Para mostrar ou ocultar o modal do Carrinho
  const classechecked = "checked"; // Para fazer verificação dos steps - passo a passo da compra

  // Eventos Lista

  const eventos = ["click", "touchstart"];

  eventos.forEach((eventoUsuario) => btnMeuCarrinho.addEventListener(eventoUsuario, abrirModal));

  // btnMeuCarrinho.addEventListener("click", abrirModal);

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
    eventos.forEach((eventoUsuario) =>
      btnContinuar.addEventListener(eventoUsuario, () => {
        adicionarClasse([produtosContainer, tituloProdutos, btnContinuar], classeHidden);
        adicionarClasse([step, line], classechecked);

        removerClasse([entregaContainer, tituloEntrega, btnVoltar, btnRevisar], classeHidden);
      })
    );
  }

  function voltar() {
    btnVoltar.addEventListener("click", () => {
      adicionarClasse([entregaContainer, tituloEntrega, btnRevisar, btnVoltar], classeHidden);
      removerClasse([produtosContainer, tituloProdutos, step, line, btnContinuar], classeHidden);
      removerClasse([step, line], classechecked);
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
    selecionarElementoDom,
  };
}
