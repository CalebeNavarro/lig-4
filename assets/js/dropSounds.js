const shurikenSound = document.getElementById("shurikenSound");
const kunaiSound = document.getElementById("kunaiSound");

const dropSounds = {
  player1: shurikenSound,
  player2: kunaiSound,
};

// Define o volume para os sons
Object.values(dropSounds).forEach((audio) => {
  audio.volume = 0.8;
});

const playSound = (audio) => audio.play();
