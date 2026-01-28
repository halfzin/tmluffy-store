function comprar(produto, preco) {
  const whatsapp = "5573988666449";

  const mensagem =
    "Olá! Vim pela TM Luffy Store 👒🍎\n\n" +
    "🛒 Produto: " + produto + "\n" +
    "💰 Preço: " + preco + "\n\n" +
    "Gostaria de realizar a compra.";

  const link =
    "https://wa.me/" +
    whatsapp +
    "?text=" +
    encodeURIComponent(mensagem);

  window.open(link, "_blank");
}

// 🔍 FUNÇÃO DE BUSCA DO CATÁLOGO
function filtrar() {
  const input = document.getElementById("search");
  const filtro = input.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const nomeProduto = card.querySelector("h3").innerText.toLowerCase();

    if (nomeProduto.includes(filtro)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
