const endGamePopUp = document.getElementById("endGamePopUp");

const showEndGamePopUp = (cell) => {
  const playersName = getPlayersName();

  // Atualiza mensagem e imagem do Howard para fim de jogo
  result.innerText = "venceu e deixou a vila!";
  howard.src = "../assets/img/sadHoward.png";

  // Define o nome do vencedor
  if (cell === 1) {
    winner.innerText = `${playersName[1]} `;
  } else {
    winner.innerText = `${playersName[2]} `;
  }

  // Controla animação do popup
  endGamePopUp.classList.remove("showUp");
  winAnimation();
  endGamePopUp.classList.add("showUp");

  // Após 5 segundos, remove a classe 'hidden' para exibir o popup
  setTimeout(() => {
    endGamePopUp.classList.remove("hidden");
  }, 5000);
};
