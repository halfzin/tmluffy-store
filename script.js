function comprar(produto) {
  alert(
    "Produto selecionado: " + produto +
    "\n\nSistema de pagamento ainda não integrado."
  );
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
