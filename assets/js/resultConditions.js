// Verifica se há uma sequência horizontal de 4 peças iguais
const horizontalCondition = (gamePlay, edgeX, indexRow, cell, indexCol) => {
  if (cell !== 0) {
    if (indexCol < edgeX) {
      let countWinHorizontal = 0;
      let position = [];
      let sameBall = 3; // número de peças além da atual
      savePositions = [[indexRow, indexCol]]; // guarda a posição inicial

      for (let i = 1; i <= sameBall; i++) {
        position = [];

        if (cell === gamePlay[indexRow][indexCol + i]) {
          countWinHorizontal++;
          position.push(indexRow);
          position.push(indexCol + i);
        }

        savePositions.push(position);
      }

      if (countWinHorizontal === sameBall) {
        positions = savePositions; // salva posições vencedoras
        return true;
      }
    }
  }

  return false;
};

// Verifica se há uma sequência vertical de 4 peças iguais
const verticalCondition = (gamePlay, edgeY, indexRow, cell, indexCol) => {
  if (cell !== 0) {
    if (indexRow < edgeY) {
      let countWinVertical = 0;
      savePositions = [[indexRow, indexCol]];
      let position = [];
      let sameBall = 3;

      for (let i = 1; i <= sameBall; i++) {
        position = [];

        if (cell === gamePlay[indexRow + i][indexCol]) {
          countWinVertical++;
          position.push(indexRow + i);
          position.push(indexCol);
        }

        savePositions.push(position);
      }

      if (countWinVertical === sameBall) {
        positions = savePositions;
        return true;
      }
    }
  }

  return false;
};

// Verifica se há uma sequência diagonal descendente para a direita (↘)
const diagonalDownRightCondition = (
  gamePlay,
  edgeX,
  edgeY,
  indexRow,
  cell,
  indexCol
) => {
  if (cell !== 0) {
    if (indexRow < edgeY && indexCol < edgeX) {
      let countWinDiagonalDownRight = 0;
      savePositions = [[indexRow, indexCol]];
      let position = [];
      let sameBall = 3;

      for (let i = 1; i <= sameBall; i++) {
        position = [];

        if (cell === gamePlay[indexRow + i][indexCol + i]) {
          countWinDiagonalDownRight++;
          position.push(indexRow + i);
          position.push(indexCol + i);
        }

        savePositions.push(position);
      }

      if (countWinDiagonalDownRight === sameBall) {
        positions = savePositions;
        return true;
      }
    }
  }

  return false;
};

// Verifica se há uma sequência diagonal descendente para a esquerda (↙)
const diagonalDownLeftCondition = (
  gamePlay,
  edgeX,
  edgeY,
  indexRow,
  cell,
  indexCol
) => {
  if (cell !== 0) {
    if (indexRow >= edgeY && indexRow < gamePlay.length && indexCol < edgeX) {
      let countDiagonalDownLeft = 0;
      savePositions = [[indexRow, indexCol]];
      let position = [];
      let sameBall = 3;

      for (let i = 1; i <= sameBall; i++) {
        position = [];

        if (cell === gamePlay[indexRow - i][indexCol + i]) {
          countDiagonalDownLeft++;
          position.push(indexRow - i);
          position.push(indexCol + i);
        }

        savePositions.push(position);
      }

      if (countDiagonalDownLeft === sameBall) {
        positions = savePositions;
        return true;
      }
    }
  }

  return false;
};

// Referência aos elementos da tela usados no fim do jogo
const howard = document.getElementById("howard");
const result = document.getElementById("result");
const winner = document.getElementById("winner");

// Verifica se o jogo empatou (quando todas as 42 jogadas foram feitas)
const gameDraw = (playCount) => {
  if (playCount === 41) {
    endGamePopUpDraw(); // dispara fim de jogo empatado
  } else {
    playCount++;
  }

  return playCount;
};

// Exibe o popup de empate com imagem e animação
const endGamePopUpDraw = () => {
  endGamePopUp.classList.remove("showUp"); // garante que reinicie a animação
  winner.innerText = "";
  howard.src = "../assets/img/happyHoward.png";
  result.innerText = "Derrotados pelo Hokage Howard! Mwahaha";
  drawAnimation(); // animação customizada
  endGamePopUp.classList.add("showUp");
  setTimeout(() => {
    endGamePopUp.classList.remove("hidden"); // mostra novamente após 5s
  }, 5000);
};
