document.getElementById("game-form").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    document.getElementById("game-form").className = "d-none";
  },
  false
);

function startGame() {}

function chooseBoardCell(selectedCell) {
  selectedCell.innerHTML = "X";
  console.log(selectedCell.id, "selectedCell details ");
}
