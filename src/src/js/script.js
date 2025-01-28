// Seleciona todos os itens da lista
const listaPersonagens = document.querySelectorAll(".lista-personagens li");

// Adiciona um evento de clique a cada item
listaPersonagens.forEach((personagem) => {
  personagem.addEventListener("click", () => {
    // Remove a classe 'selecionado' de todos os itens
    listaPersonagens.forEach((item) => item.classList.remove("selecionado"));

    // Adiciona a classe 'selecionado' apenas ao item clicado
    personagem.classList.add("selecionado");

    // Exibe uma mensagem com o nome do item clicado
    const nome = personagem.querySelector(".nome").innerText;
    alert(`Você clicou no item: ${nome}`);
  });
});
