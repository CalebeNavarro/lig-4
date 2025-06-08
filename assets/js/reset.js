// Referência aos botões da interface
const homePgBtn = document.getElementById("homePgBtn");
const buttonReset = document.getElementById("reset");

// Reinicia todo o estado do jogo para o início
const reset = () => {
  // Limpa todas as células do tabuleiro
  columns.forEach((col) => {
    let colChildArray = Array.from(col.children);
    colChildArray.forEach((row) => (row.innerHTML = ""));
  });

  // Reinicia variáveis do jogo
  playCount = 0;
  currentPlayer = "player1";

  // Redefine a matriz do jogo (tabuleiro vazio)
  gamePlay = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  // Reinicia o cronômetro e o indicador de turno
  clearTimeout(timeID);
  setTimer(15);
  changeTurn();

  // Reativa os eventos de clique nas colunas do tabuleiro
  columns.forEach((current) => {
    current.addEventListener("click", mainGame);
  });
};

// Esconde o pop-up de fim de jogo
const hideEndGamePopUp = () => {
  endGamePopUp.classList.add("hidden");
};

// Retorna para a tela inicial do jogo
const goToHomePg = () => {
  mainPanel.classList.remove("vanish");
  mainPanel.classList.remove("hidden");
};

// Eventos do botão "Reset"
buttonReset.addEventListener("click", reset);
buttonReset.addEventListener("click", hideEndGamePopUp);
buttonReset.addEventListener("mouseenter", playBip);

// Eventos do botão "Home"
homePgBtn.addEventListener("mouseenter", playBip);
homePgBtn.addEventListener("click", reset);
homePgBtn.addEventListener("click", hideEndGamePopUp);
homePgBtn.addEventListener("click", goToHomePg);
