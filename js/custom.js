// Global Tic-tak-toe Variables
let boardArray;
let winner;
let playerXWinsCount = 04;
let playerOWinsCount = 04;
let gameBoardDiv = document.getElementById("game-board");

function chooseBoardCell(selectedCell) {
  selectedCell.innerHTML = "X";
  selectedCell.style.cursor = "not-allowed";
  console.log(selectedCell.id, "selectedCell details ");
}

const player = {
  setName: (name) => {
    this.name = name;
  },
  setMarker: (marker) => {
    this.marker = marker;
  },
};

let playerX = player;
let playero = player;

const board = {
  render: () => {
    for (let x = 0; x <= 2; x++) {
      for (let y = 0; y <= 2; y++) {
        let htmlCeil = `<div class='board-cell cursor-pointer' onclick="chooseBoardCell(this)" id="${x}|${y}"> ${boardArray[x][y]}</div>`;

        gameBoardDiv.innerHTML += htmlCeil;
      }
    }
  },
  reset: () => {
    boardArray = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  },
};

const game = {
  start: () => {
    document.getElementById("game-players-form").className = "d-none";
    document.getElementById("game-container").className = "game-container";

    playerX.name = document.getElementById("playerX").value;
    playerO.name = document.getElementById("playerO").value;

    playerX.marker = "X";
    playerO.marker = "Y";

    // Set Players Name
    document.getElementById("playerXName").innerHTML = playerX.name;
    document.getElementById("playerOName").innerHTML = playerO.name;

    board.reset();
    board.render();
  },

  restart: () => {
    document.getElementById("game-container").className = "d-none";
    document.getElementById("game-players-form").className = "m-auto w-50";
    board.reset();
    board.render();
  },
};
