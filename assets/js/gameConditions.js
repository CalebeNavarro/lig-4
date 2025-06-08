let savePositions = [];

// Função para exibir o popup de fim de jogo
const gameConditions = (gamePlay) => {
  const maxRowCheck = gamePlay.length - 3; // 6 - 3 = 3
  const maxColCheck = gamePlay[0].length - 3; // 7 - 3 = 4

  gamePlay.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const victories = [
        verticalCondition(gamePlay, maxRowCheck, rowIndex, cell, colIndex),
        horizontalCondition(gamePlay, maxColCheck, rowIndex, cell, colIndex),
        diagonalDownRightCondition(
          gamePlay,
          maxColCheck,
          maxRowCheck,
          rowIndex,
          cell,
          colIndex
        ),
        diagonalDownLeftCondition(
          gamePlay,
          maxColCheck,
          maxRowCheck,
          rowIndex,
          cell,
          colIndex
        ),
      ];

      const hasVictory = victories.some((v) => v);

      if (hasVictory) {
        showEndGamePopUp(cell);
        columns.forEach((column) =>
          column.removeEventListener("click", mainGame)
        );
      }
    });
  });
};
