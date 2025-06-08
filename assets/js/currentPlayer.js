const turnIcon = document.getElementById("turnIcon");

/**
 * Atualiza o ícone de turno para indicar o jogador atual.
 * Alterna entre as classes CSS "turnRight" e "turnLeft" conforme o jogador.
 */
const changeTurn = () => {
  let removeClass;
  let addClass;

  if (currentPlayer === "player1") {
    removeClass = "turnRight";
    addClass = "turnLeft";
  } else {
    removeClass = "turnLeft";
    addClass = "turnRight";
  }

  turnIcon.classList.remove(removeClass);
  turnIcon.classList.add(addClass);
};
