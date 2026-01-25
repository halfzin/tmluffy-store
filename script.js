function comprar(produto) {
  const discordID = "481601911515119627";
  const mensagem = `Olá! Vim pelo site TM Luffy Store e quero comprar: ${produto}`;

  const link = `https://discord.com/users/${discordID}?message=${encodeURIComponent(mensagem)}`;

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
