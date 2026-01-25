function comprar(produto, preco) {
  const conviteDiscord = "https://discord.gg/XbXrbEFf";

  const mensagem =
`Olá! Vim pelo site TM Luffy Store 👒🍎

🛒 Produto: ${produto}
💰 Preço: ${preco}

Aguardo atendimento, obrigado!`;

  alert(
    "Você será redirecionado para nosso Discord.\n\n" +
    "Copie a mensagem abaixo e envie no atendimento:\n\n" +
    mensagem
  );

  window.open(conviteDiscord, "_blank");
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

