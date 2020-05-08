let boardArray;
const boardArrayDiv = document.getElementById('game-board');
const winnerDiv = document.getElementById('sucess-message');
const errorsDiv = document.getElementById('player-form-errors');

let currentPlayer = 'X';
let moveCount = 0;

const player = (name, mark, winscount) => ({
  name,
  mark,
  winscount,
});

const playerX = player('', 'X', 0);
const playerO = player('', 'O', 0);

const board = {
  initialize: () => {
    boardArray = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  },

  render: () => {
    for (let x = 0; x <= 2; x += 1) {
      for (let y = 0; y <= 2; y += 1) {
        const htmlCeil = `<div class='board-cell cursor-pointer' onclick="game.move(this)" id="${x},${y}"> ${boardArray[x][y]}</div>`;
        boardArrayDiv.innerHTML += htmlCeil;
      }
    }
  },

  reset: () => {
    boardArrayDiv.innerHTML = '';
    winnerDiv.innerHTML = '';

    board.initialize();
    board.render();
  },
};

const game = {
  start: () => {
    errorsDiv.innerHTML = '';
    playerX.name = document.getElementById('playerX').value;
    playerO.name = document.getElementById('playerO').value;

    if (!playerX.name) {
      errorsDiv.innerHTML = 'enter a valid name for first player';
      errorsDiv.className = 'alert alert-danger';
      return false;
    }
    if (!playerO.name) {
      errorsDiv.innerHTML = 'enter a valid name for second player';
      errorsDiv.className = 'alert alert-danger';
      return false;
    }
    document.getElementById('game-players-form').className = 'd-none';
    document.getElementById('game-container').className = 'game-container';

    document.getElementById('playerXName').innerHTML = playerX.name;
    document.getElementById('playerOName').innerHTML = playerO.name;

    board.reset();
    return true;
  },
  move: (selectedCell) => {
    selectedCell.innerHTML = currentPlayer;
    selectedCell.style.cursor = 'not-allowed';
    selectedCell.style.pointerEvents = 'none';
    const selectedRowColumeArray = selectedCell.id.split(',');
    boardArray[selectedRowColumeArray[0]][
      selectedRowColumeArray[1]
    ] = currentPlayer;
    moveCount += 1;
    if (game.checkWin()) {
      if (currentPlayer === 'X') {
        winnerDiv.innerHTML = `${playerX.name} win ! `;
      } else {
        winnerDiv.innerHTML = `${playerO.name} win ! `;
      }
      game.setWinner(currentPlayer);
    } else {
      if (moveCount === 9) {
        winnerDiv.innerHTML = ' Draw Game ';
      }
      game.switchPlayer();
    }
  },

  setWinner: (winner) => {
    moveCount = 0;
    if (winner === 'X') {
      playerX.winscount += 1;
      document.getElementById('playerXWinsCount').innerHTML = playerX.winscount;
    } else {
      playerO.winscount += 1;
      document.getElementById('playerYWinsCount').innerHTML = playerO.winscount;
    }
  },

  checkWin: () => {
    if (
      (boardArray[0][0] !== '' && boardArray[0][0] === boardArray[0][1]
      && boardArray[0][1] === boardArray[0][2])
      || (boardArray[1][0] !== ''
      && boardArray[1][0] === boardArray[1][1] && boardArray[1][1] === boardArray[1][2])
      || (boardArray[2][0] !== '' && boardArray[2][0] === boardArray[2][1] && boardArray[2][1] === boardArray[2][2])
      || (boardArray[0][0] !== '' && boardArray[0][0] === boardArray[1][0] && boardArray[1][0] === boardArray[2][0])
      || (boardArray[0][1] !== '' && boardArray[0][1] === boardArray[1][1] && boardArray[1][1] === boardArray[2][1])
      || (boardArray[0][2] !== '' && boardArray[0][2] === boardArray[1][2] && boardArray[1][2] === boardArray[2][2])
      || (boardArray[0][0] !== '' && boardArray[0][0] === boardArray[1][1] && boardArray[1][1] === boardArray[2][2])
      || (boardArray[0][2] !== '' && boardArray[0][2] === boardArray[1][1] && boardArray[1][1] === boardArray[2][0])
    ) {
      return true;
    }
    return false;
  },

  restart: () => {
    document.getElementById('game-container').className = 'd-none';
    document.getElementById('game-players-form').className = 'm-auto w-50';
    errorsDiv.className = 'alert';
    board.reset();
  },

  playAgain: () => {
    board.reset();
  },

  switchPlayer: () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  },

};

module.exports = {
  player : player,
  board : board
}