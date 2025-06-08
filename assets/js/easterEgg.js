const painSound = document.getElementById("painSound");
const painContainer = document.getElementById("painContainer");
const painVideo = document.getElementById("painVideo");

//  Verifica se algum dos jogadores tem o nome "pain".
const isPainHere = () => {
  const playersName = getPlayersName();

  if (
    playersName[1].toLowerCase() === "pain" ||
    playersName[2].toLowerCase() === "pain"
  ) {
    return true;
  }

  return false;
};

const shinraTensei = () => {
  painContainer.classList.remove("painBg");

  if (isPainHere()) {
    bgm.pause();

    painContainer.classList.remove("hidden");
    painVideo.play();

    setTimeout(() => {
      painSound.play();
    }, 10000);

    setTimeout(() => {
      painVideo.classList.add("hidden");
      painContainer.classList.add("painBg");
    }, 10500);
  }
};
