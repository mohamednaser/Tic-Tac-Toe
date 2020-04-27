// Global Tic-tak-toe Variables
let boardArray;
let winner;
let boardArrayDiv = document.getElementById("game-board");
let currentPlayer = "X";

const player = {};

let playerX = player;
let playero = player;

const board = {
  initialize: () => {
    boardArray = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  },

  render: () => {
    for (let x = 0; x <= 2; x++) {
      for (let y = 0; y <= 2; y++) {
        let htmlCeil = `<div class='board-cell cursor-pointer' onclick="game.move(this)" id="${x},${y}"> ${boardArray[x][y]}</div>`;

        boardArrayDiv.innerHTML += htmlCeil;
      }
    }
  },

  reset: () => {
    boardArrayDiv.innerHTML = "";
    board.initialize();
    board.render();
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
  },

  move: (selectedCell) => {
    selectedCell.innerHTML = currentPlayer;
    selectedCell.style.cursor = "not-allowed";
    selectedCell.style.pointerEvents = "none";
    selectedRowColumeArray = selectedCell.id.split(",");

    boardArray[selectedRowColumeArray[0]][
      selectedRowColumeArray[1]
    ] = currentPlayer;
    if (game.checkWin()) {
      // show winner and finish this round
      alert(currentPlayer + "win");
    } else {
      game.switchPlayer();
      console.log(selectedCell.id, "selectedCell details ", boardArray);
    }
  },

  checkWin: () => {
    if (
      (boardArray[0][0] != "" &&
        boardArray[0][0] === boardArray[0][1] &&
        boardArray[0][1] === boardArray[0][2]) ||
      (boardArray[1][0] != "" &&
        boardArray[1][0] === boardArray[1][1] &&
        boardArray[1][1] === boardArray[1][2]) ||
      (boardArray[2][0] != "" &&
        boardArray[2][0] === boardArray[2][1] &&
        boardArray[2][1] === boardArray[2][2]) ||
      (boardArray[0][0] != "" &&
        boardArray[0][0] === boardArray[1][0] &&
        boardArray[1][0] === boardArray[2][0]) ||
      (boardArray[0][1] != "" &&
        boardArray[0][1] === boardArray[1][1] &&
        boardArray[1][1] === boardArray[2][1]) ||
      (boardArray[0][2] != "" &&
        boardArray[0][2] === boardArray[1][2] &&
        boardArray[1][2] === boardArray[2][2]) ||
      (boardArray[0][0] != "" &&
        boardArray[0][0] === boardArray[1][1] &&
        boardArray[1][1] === boardArray[2][2]) ||
      (boardArray[0][2] != "" &&
        boardArray[0][2] === boardArray[1][1] &&
        boardArray[1][1] === boardArray[2][0])
    ) {
      return true;
    }
    return false;
  },

  restart: () => {
    document.getElementById("game-container").className = "d-none";
    document.getElementById("game-players-form").className = "m-auto w-50";
    board.reset();
  },

  playAgain: () => {
    board.reset();
  },

  switchPlayer: () => {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  },
};
