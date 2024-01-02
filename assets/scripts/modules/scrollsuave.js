export default function initScrollSuave() {
  const links = document.querySelectorAll("[data-menu='scroll'] li");

  if (links) {
    links.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(e) {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      const sections = document.querySelector(target);
      const topSections = sections.getBoundingClientRect().top;

      window.scrollTo({
        top: topSections,
        behavior: "smooth",
      });
    }
  }
}
