function comprar(produto, preco) {
  const whatsapp = "5573988666449";

  const mensagem =
    "Olá! Vim pela TM Luffy Store 👒🍎\n\n" +
    "🛒 Produto: " + produto + "\n" +
    "💰 Preço: " + preco + "\n\n" +
    "Gostaria de realizar a compra.";

  const link =
    "https://api.whatsapp.com/send?phone=" +
    whatsapp +
    "&text=" +
    encodeURIComponent(mensagem);

  window.open(link, "_blank");
}

