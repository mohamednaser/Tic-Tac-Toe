
const mod = require('../custom');

let boardArray;
mod.board.initialize();


test('validate empty board ', () => {
  expect(boardArray).toBe([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
});