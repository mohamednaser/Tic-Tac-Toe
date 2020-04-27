// Global Tic-tak-toe Variables
let playerx;
let playero;
let boardArray = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let winner;
let playerxWinsCount = 04;
let playeryWinsCount = 04;
let gameBoardDiv = document.getElementById("game-board");

function chooseBoardCell(selectedCell) {
  selectedCell.innerHTML = "X";
  selectedCell.style.cursor = "not-allowed";
  console.log(selectedCell.id, "selectedCell details ");
}

const player = (name, marker) => {};

const board = {
  render: () => {
    for (let x = 0; x <= 2; x++) {
      for (let y = 0; y <= 2; y++) {
        let htmlCeil = `<div class='board-cell cursor-pointer' onclick="chooseBoardCell(this)" id="${x}|${y}"> ${boardArray[x][y]}</div>`;

        gameBoardDiv.innerHTML += htmlCeil;
      }
    }
  },
};

const game = {
  startGame: () => {
    board.render();
  },
};

// Start Game
document.getElementById("start-game").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    document.getElementById("game-players-form").className = "d-none";
    document.getElementById("game-container").className = "game-container";

    // start game logic
    game.startGame();
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
  falses
);
