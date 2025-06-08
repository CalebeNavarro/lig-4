// Seleciona todas as colunas do jogo
const columns = document.querySelectorAll(".col");

// Armazena posições de sequência vencedora (global)
let positions = [];

// Estado atual do jogo
let currentPlayer = "player1";
let playCount = 0;
let gamePlay = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

// Verifica se a coluna possui espaço para inserir bola
const isColNotFull = (colNode) =>
  colNode.firstElementChild.childElementCount === 0;

// Cria elemento visual da bola do jogador atual
const makeBall = (player) => {
  const ball = document.createElement("div");
  ball.classList.add("ball", player);
  return ball;
};

// Insere bola na primeira célula vazia da coluna e retorna a posição da linha
const insertBallRowPosition = (colCells, player) => {
  let rowPosition = 0;
  const ball = makeBall(player);
  playSound(dropSounds[player]); // toca som da jogada

  colCells.forEach((cell, index) => {
    if (cell.childElementCount === 0) {
      cell.appendChild(ball);
      rowPosition = index;
    }
  });

  return rowPosition;
};

// Atualiza a matriz do jogo com a jogada atual
const updateGamePlay = (gamePlayMatrix, player, rowPos, colPos) => {
  const colIndex = colPos - 1;

  gamePlayMatrix[rowPos][colIndex] = player === "player1" ? 1 : 2;

  return gamePlayMatrix;
};

// Alterna o jogador atual
const changePlayer = (player) => {
  return player === "player1" ? "player2" : "player1";
};

// Função principal disparada ao clicar em uma coluna
const mainGame = (event) => {
  const col = event.currentTarget;
  const colCellsArray = Array.from(col.children);
  const colPosition = Number(col.dataset.column);

  if (isColNotFull(col)) {
    const rowPosition = insertBallRowPosition(colCellsArray, currentPlayer);
    gamePlay = updateGamePlay(
      gamePlay,
      currentPlayer,
      rowPosition,
      colPosition
    );

    gameConditions(gamePlay); // Verifica condições de vitória
    playCount = gameDraw(playCount); // Verifica empate
    currentPlayer = changePlayer(currentPlayer); // Troca jogador

    clearTimeout(timeID);
    setTimer(15); // Reseta timer

    setTimeout(() => {
      changeTurn(); // Lógica de mudança de turno (visual ou outra)
    }, 1000);
  }
};

// Adiciona evento de clique em todas as colunas
columns.forEach((column) => {
  column.addEventListener("click", mainGame);
});
