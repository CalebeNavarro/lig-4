const ROWS = 6;
const COLS = 7;

// Função para criar o tabuleiro do jogo dinamicamente
function createGameBoard() {
  const gameTable = document.getElementById("gameTable");
  gameTable.innerHTML = "";

  for (let col = 1; col <= COLS; col++) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
    colDiv.dataset.column = col;

    for (let row = 1; row <= ROWS; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      rowDiv.dataset.row = row;
      colDiv.appendChild(rowDiv);
    }

    gameTable.appendChild(colDiv);
  }
}

createGameBoard();
