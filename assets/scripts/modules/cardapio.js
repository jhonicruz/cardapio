export default function initCardapio() {}

const container = document.querySelector("[data-cardapio]");
const btnVerMais = document.querySelector("[data-verMais]");
const botoesCategorias = document.querySelectorAll("[data-categorias] ul li");

botoesCategorias.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    buscarMenu(index);
  });
});

async function buscarMenu(index) {
  const responseMenu = await fetch("/cardapio/menu.json");
  const dadosMenu = await responseMenu.json();
  container.innerHTML = "";

  if (index == 0) {
    dadosMenu[0].burgers.forEach((items) => {
      const idProdutos = items.id;
      const nomeProdutos = items.name;
      const precoProdutos = items.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const imagemProdutos = items.img;

      criarProduto(nomeProdutos, precoProdutos, imagemProdutos);
    });
  } else if (index == 1) {
    dadosMenu[1].pizzas.forEach((items) => {
      const idProdutos = items.id;
      const nomeProdutos = items.name;
      const precoProdutos = items.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const imagemProdutos = items.img;

      criarProduto(nomeProdutos, precoProdutos, imagemProdutos);
    });
  } else if (index == 2) {
    dadosMenu[2].churrasco.forEach((items) => {
      const idProdutos = items.id;
      const nomeProdutos = items.name;
      const precoProdutos = items.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const imagemProdutos = items.img;

      criarProduto(nomeProdutos, precoProdutos, imagemProdutos);
    });
  } else if (index == 3) {
    dadosMenu[3].steaks.forEach((items) => {
      const idProdutos = items.id;
      const nomeProdutos = items.name;
      const precoProdutos = items.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const imagemProdutos = items.img;

      criarProduto(nomeProdutos, precoProdutos, imagemProdutos);
    });
  } else if (index == 4) {
    dadosMenu[4].bebidas.forEach((items) => {
      const idProdutos = items.id;
      const nomeProdutos = items.name;
      const precoProdutos = items.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const imagemProdutos = items.img;

      criarProduto(nomeProdutos, precoProdutos, imagemProdutos);
    });
  } else if (index == 5) {
    dadosMenu[5].sobremesas.forEach((items) => {
      const idProdutos = items.id;
      const nomeProdutos = items.name;
      const precoProdutos = items.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const imagemProdutos = items.img;

      criarProduto(nomeProdutos, precoProdutos, imagemProdutos);
    });
  } else {
    dadosMenu[0].burgers.forEach((items) => {
      const idProdutos = items.id;
      const nomeProdutos = items.name;
      const precoProdutos = items.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const imagemProdutos = items.img;

      criarProduto(nomeProdutos, precoProdutos, imagemProdutos);
    });
  }
}

buscarMenu(0);

function criarProduto(nome, preco, imagem) {
  const template = `
              <div class="cardapio__item shadow-8dp">
              <div class="cardapio__item__image">
                <img
                  src="${imagem}"
                  alt=""
                />
              </div>

              <div class="cardapio__item__content">
                <div class="cardapio__item__content__text">
                  <h3>${nome}</h3>
                  <span>${preco}</span>
                </div>

                <div class="add-to-cart">
                  <div class="add-to-cart__buttons">
                    <span class="add-menos"><i class="fas fa-minus"></i></span>
                    <span class="add-numero-items">0</span>
                    <span class="add-mais"><i class="fas fa-plus"></i></span>
                  </div>

                  <div class="btn-add-box">
                    <span class="btn-add"
                      ><a href="#"><i class="fa fa-shopping-bag"></i></a
                    ></span>
                  </div>
                </div>
              </div>
            </div>
  `;
  const div = document.createElement("div");
  div.innerHTML = template;
  container.appendChild(div);
}
