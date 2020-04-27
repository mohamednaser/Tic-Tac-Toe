// Start Game
document.getElementById("start-game").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    document.getElementById("game-players-form").className = "d-none";
    document.getElementById("game-container").className = "game-container";
  },
  false
);

// Retart Game
document.getElementById("finish-game").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    document.getElementById("game-players-form").className = "m-auto w-50";
    document.getElementById("game-container").className = "d-none";
  },
  false
);
function startGame() {}

function chooseBoardCell(selectedCell) {
  selectedCell.innerHTML = "X";
  selectedCell.style.cursor = "not-allowed";
  console.log(selectedCell.id, "selectedCell details ");
}
