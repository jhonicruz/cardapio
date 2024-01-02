export default function initgoToStart() {
  const btn = document.querySelector("[data-gotostart]");
  const events = ["click", "touch"];
  const initPage = 0;

  window.addEventListener("scroll", handleScroll);

  function handleScroll(e) {
    const metadeTela = document.body.scrollHeight / 2;

    const passouDaMetade = window.scrollY > metadeTela;

    if (passouDaMetade) {
      btn.classList.add("show");
      events.forEach((userEvent) =>
        btn.addEventListener(userEvent, (e) => {
          e.preventDefault();
          window.scrollTo({
            top: initPage,
            behavior: "smooth",
          });
        })
      );
    } else {
      btn.classList.remove("show");
    }
  }
}

// events.forEach((userEvent) => btn.addEventListener(userEvent, handleClick));

// function handleClick() {
//   e.preventDefault();
//   console.log(initPage);
//   window.scrollTo({
//     top: initPage,
//     behavior: "smooth",
//   });
// }
// const events = ["touch", "click"];

// if (btn) {
//   events.forEach((userEvent) =>
//     btn.addEventListener(userEvent, (e) => {
//       e.preventDefault();
//       const initPage = 0;

//       const targetScroll =
//         window.screenY > 2000 ? btn.classList.add("show") : btn.classList.remove("show");

//       console.log(targetScroll);

//       // console.log(metadeTela);
//       window.scrollTo({
//         top: initPage,
//         behavior: "smooth",
//       });
//     })
//   );
// }
