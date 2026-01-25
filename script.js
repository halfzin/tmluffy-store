function comprar(produto, preco) {
  const whatsapp = "5581987083004";

  const mensagem =
    `Olá! Vim pela TM Luffy Store 👒🍎\n\n` +
    `🛒 Produto: ${produto}\n` +
    `💰 Preço: ${preco}\n\n` +
    `Gostaria de realizar a compra.`;

  const link =
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}

function filtrar() {
  let texto = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(texto)
      ? "block"
      : "none";
  });
}
