export default function initScrollSuave() {
  const links = document.querySelectorAll("[data-menu='scroll'] li");
  const menuContainer = document.querySelector("#menu");
  const toggleMenu = document.querySelector('[data-toggle="collapse"]');
  const modalContainer = document.querySelector('[data-modal="modal"]');
  const btnContinuar = document.querySelector('[data-modal="btn-continuar"]');
  const produtosContainer = document.querySelector('[data-modal="produtos"]');
  const tituloProdutos = document.querySelector('[data-modal="titulo-produtos"]');
  const step = document.querySelector('[data-modal="step"]');
  const line = document.querySelector('[data-modal="line"]');
  const entregaContainer = document.querySelector('[data-modal="entrega"]');
  const tituloEntrega = document.querySelector('[data-modal="titulo-entrega"]');
  const btnVoltar = document.querySelector('[data-modal="btn-voltar"]');
  const btnRevisar = document.querySelector('[data-modal="btn-revisar"]');
  const btnFechar = document.querySelector('[data-modal="btn-fechar"]');

  const nomeClasse = "hidden";
  if (links) {
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    function handleClick(e) {
      e.preventDefault();

      const constainsClassOpen =
        menuContainer.classList.contains("open") && toggleMenu.classList.contains("open");

      const elementTarget = e.target;
      const containsAttributeModal = elementTarget.hasAttribute("data-modal");
      const target = e.target.getAttribute("href");
      console.log(target);

      if (constainsClassOpen) {
        menuContainer.classList.remove("open");
        toggleMenu.classList.remove("open");
        document.body.style.overflow = "auto";
      }

      // toggleMenu.classList.toggle("open");

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

      function fecharModal() {
        btnFechar.addEventListener("click", () => {
          modalContainer.classList.add(nomeClasse);
          document.body.style.overflow = "auto";
        });
      }

      if (containsAttributeModal) {
        modalContainer.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        continuar();
        voltar();
        fecharModal();
      } else {
        const sections = document.querySelector(target);
        const topSections = sections.getBoundingClientRect().top;

        window.scrollTo({
          top: topSections,
          behavior: "smooth",
        });
      }
    }
  }
}
