function comprar(produto, preco) {
  const whatsapp = "5573988666449";

  const mensagem =
    "Olá! Vim pela TM Luffy Store 👒🍎\n\n" +
    "🛒 Produto: " + produto + "\n" +
    "💰 Preço: " + preco + "\n\n" +
    "Gostaria de realizar a compra.";

  window.open(
    "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(mensagem),
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search");
  const cards = document.querySelectorAll(".card");

  input.addEventListener("input", () => {
    const filtro = input.value.toLowerCase();

    cards.forEach(card => {
      const texto = card.innerText.toLowerCase();
      card.style.display = texto.includes(filtro) ? "" : "none";
    });
  });
});
