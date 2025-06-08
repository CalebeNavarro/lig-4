const p1nameInput = document.getElementById("p1nameInput");
const p2nameInput = document.getElementById("p2nameInput");
const p1nameDisplay = document.getElementById("p1name");
const p2nameDisplay = document.getElementById("p2name");

// Essa função coleta os nomes dos jogadores nos inputs e mostra na tela.
const getPlayersName = () => {
  const player1Name = p1nameInput.value.trim();
  const player2Name = p2nameInput.value.trim();
  const playersName = [""];

  if (player1Name !== "") {
    p1nameDisplay.innerText = player1Name;
    playersName.push(player1Name);
  } else {
    playersName.push("Naruto");
  }

  if (player2Name !== "") {
    p2nameDisplay.innerText = player2Name;
    playersName.push(player2Name);
  } else {
    playersName.push("Sasuke");
  }

  return playersName;
};

// Quando o botão é clicado, a função é chamada para atualizar os nomes exibidos.
selectedNamesBtn.addEventListener("click", getPlayersName);
