const winSound = document.getElementById("winSound");
const drawSound = document.getElementById("drawSound");
const endGameAnimationContainer = document.getElementById(
  "endGameAnimationContainer"
);
const endGameAnimation = document.getElementById("endGameAnimation");

winSound.volume = 0.6;
drawSound.volume = 0.5;

// Animação para empate no jogo
const drawAnimation = () => {
  endGameAnimationContainer.classList.remove("winBg", "vanish", "showUp");
  endGameAnimation.classList.remove("winAnimation");
  endGameAnimation.classList.add("drawAnimation");
  endGameAnimationContainer.classList.add("drawBg", "showUp");

  setTimeout(() => {
    drawSound.play();
  }, 1000);

  setTimeout(() => {
    endGameAnimationContainer.classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    endGameAnimationContainer.classList.add("vanish");
  }, 5000);

  setTimeout(() => {
    endGameAnimationContainer.classList.add("hidden");
  }, 6000);
};

// Animação para vitória no jogo
const winAnimation = () => {
  const winPositions = positions;

  for (let cell = 0; cell < winPositions.length; cell++) {
    let rowPosition = winPositions[cell][0];
    let colPosition = winPositions[cell][1] + 1;
    let cellParent = document.querySelector(
      `.col[data-column="${colPosition}"`
    );
    let winnerCell = cellParent.children[rowPosition];

    setTimeout(() => {
      winnerCell.classList.add("highlight");
    }, 1000);

    setTimeout(() => {
      winnerCell.classList.remove("highlight");
    }, 2000);
  }

  endGameAnimationContainer.classList.remove("drawBg", "vanish", "showUp");
  endGameAnimation.classList.remove("drawAnimation");
  endGameAnimation.classList.add("winAnimation");
  endGameAnimationContainer.classList.add("winBg", "showUp");

  setTimeout(() => {
    winSound.play();
  }, 2000);

  setTimeout(() => {
    endGameAnimationContainer.classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    endGameAnimationContainer.classList.add("vanish");
  }, 5000);

  setTimeout(() => {
    endGameAnimationContainer.classList.add("hidden");
  }, 6000);
};
