const timer = document.getElementById("timer");
let timeID;

const setTimer = (counter = 15) => {
  // Atualiza o display do timer
  timer.innerHTML = `${counter}`;

  if (counter === 0) {
    // Tempo esgotou, troca jogador e reinicia o timer
    currentPlayer = changePlayer(currentPlayer);
    clearTimeout(timeID);
    counter = 15;
    setTimeout(() => {
      changeTurn();
    }, 1000);
  } else {
    // Continua a contagem regressiva a cada 1 segundo
    timeID = setTimeout(() => {
      setTimer(counter - 1);
    }, 1000);
  }

  return timeID;
};
