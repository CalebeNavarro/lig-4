const elements = {
  rulesBtn: document.getElementById("rulesBtn"),
  audioBtn: document.getElementById("audioBtn"),
  volIcon: document.getElementById("volIcon"),
  historyBtn: document.getElementById("historyBtn"),
  popUp: document.getElementById("popUp"),
  text: document.getElementById("text"),
  exitBtn: document.getElementById("exitBtn"),
  bgm: document.getElementById("bgm"),
  hoverBip: document.getElementById("hoverBip"),
  mainPanel: document.getElementById("mainPanel"),
  chooseNamesBtn: document.getElementById("chooseNamesBtn"),
  startBtn: document.getElementById("startBtn"),
  chooseNames: document.getElementById("chooseNames"),
  selectedNamesBtn: document.getElementById("selectedNamesBtn"),
};

elements.bgm.volume = 0.3;
elements.hoverBip.volume = 0.2;

const isBgmPaused = () => elements.bgm.paused;
const playBip = () => elements.hoverBip.play();

const togglePopUpWithText = (message) => {
  elements.text.innerText = message;
  elements.popUp.classList.toggle("hidden");
};

const playBipOnHover = (element) => {
  element.addEventListener("mouseenter", playBip);
};

// Configura eventos de hover para tocar o bip em vários botões
[
  elements.rulesBtn,
  elements.historyBtn,
  elements.exitBtn,
  elements.audioBtn,
  elements.chooseNamesBtn,
  elements.startBtn,
  elements.selectedNamesBtn,
].forEach(playBipOnHover);

// Eventos click para mostrar o popup com o texto das regras
elements.rulesBtn.addEventListener("click", () => {
  togglePopUpWithText(
    'Lig 4 é um jogo popular lançado pela empresa Milton Bradley Company (que foi adquirida pela Hasbro em 1984) em 1974, com o nome de "Connect Four". Neste jogo, os dois jogadores devem colocar as fichas estrategicamente na base, de forma a formar uma sequência com as 4 fichas da sua cor - seja na horizontal, na vertical ou mesmo na diagonal - ao mesmo tempo em que devem prestar atenção para bloquear as tentativas do oponente fazer o mesmo!'
  );
});

// Eventos click para mostrar o popup com o texto da história
elements.historyBtn.addEventListener("click", () => {
  togglePopUpWithText(
    "Após a Grande Guerra Ninja, a vila de Konoha ficou devastada. Mas, graças ao grande Hokage Howard, foi possível reconstruir a vila em poucos meses. Além disso, sua incrível atuação na Guerra Ninja possibilitou salvar milhares de vidas, seu ninjutsu estilo água: Hsksjdh no Jutsu destruiu inimigos. Os habitantes de Konoha são tão gratos ao Hokage Howard que decidiram renomear sua vila para Howard Village."
  );
});

// Fecha o popup
elements.exitBtn.addEventListener("click", () => {
  elements.popUp.classList.add("hidden");
});

// Controla o som de fundo e troca o ícone de volume
elements.audioBtn.addEventListener("click", () => {
  if (isBgmPaused()) {
    elements.bgm.play();
    elements.volIcon.classList.replace("fa-volume-off", "fa-volume-up");
  } else {
    elements.bgm.pause();
    elements.volIcon.classList.replace("fa-volume-up", "fa-volume-off");
  }
});

// Mostra o painel de escolha de nomes
elements.chooseNamesBtn.addEventListener("click", () => {
  elements.chooseNames.classList.remove("hidden");
});

// Inicia o jogo
elements.startBtn.addEventListener("click", () => {
  shinraTensei();
  elements.mainPanel.classList.add("vanish");
  clearTimeout(timeID);
  setTimer(15);
  setTimeout(() => {
    elements.mainPanel.classList.add("hidden");
  }, 1000);
});

// Esconde o painel de escolha de nomes
elements.selectedNamesBtn.addEventListener("click", () => {
  elements.chooseNames.classList.add("hidden");
});
