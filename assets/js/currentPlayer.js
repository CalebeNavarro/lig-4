const turnIcon = document.getElementById('turnIcon');

const changeTurn = () => {
    if (currentPlayer === 'player1') {
        turnIcon.classList.remove('turnRight');
        turnIcon.classList.add('turnLeft');
    } else {
        turnIcon.classList.remove('turnLeft');
        turnIcon.classList.add('turnRight');
    }
}

// const gameTableID = document.getElementById("gameTable");
// const showPlayer = document.createElement("span");
// showPlayer.innerText = currentPlayer
// gameTableID.appendChild(showPlayer);

// document.addEventListener("click", () => {
//     showPlayer.innerText = currentPlayer

// currentPlayerName1 = "Naruto"
// currentPlayerName2 = "Sakura"
// let currentPlayerName = ""
// const gameTableID = document.getElementById("gameTable");
// const showPlayer = document.createElement("span")
// showPlayer.innerText = currentPlayerName
// gameTableID.appendChild(showPlayer);
// })

// document.addEventListener("click", () => {
//     if (currentPlayer === "player1") {
//         currentPlayerName = currentPlayerName1
//     }
//     if (currentPlayer === "player2") {
//         currentPlayerName = currentPlayerName2
//     }
//     showPlayer.innerText = currentPlayerName

// })