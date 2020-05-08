const mod = require('../custom');

const firstPlayer = mod.player('mohamed', 'X', 0);
const secondPlayer = mod.player('Salvador', 'Y', 0);

test('validate correct players name ', () => {
  expect(firstPlayer.name).toBe('mohamed');
  expect(secondPlayer.name).toBe('Salvador');
});

test('Validate Wrong players name ', () => {
  expect(firstPlayer.name).not.toBe('mohamedssa');
  expect(secondPlayer.name).not.toBe('Salvadorsas');
});

test('check validate players marks', () => {
  expect(firstPlayer.mark).toBe('X');
  expect(firstPlayer.mark).not.toBe('Y');
  expect(secondPlayer.mark).toBe('Y');
  expect(firstPlayer.mark).not.toBe(secondPlayer.mark);
});

test('Check Wrong Players Marks', () => {
  expect(firstPlayer.mark).not.toBe('Y');
  expect(secondPlayer.mark).not.toBe('X');
});