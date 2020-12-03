const shipFactory = require('../ship.js');

let ship;
beforeEach(() => {
  ship = shipFactory(5);
});

describe('registers hits', () => {
  test('registers a hit', () => {
    expect(ship.hit(1)).toEqual(['', 'hit', '', '', '']);
  });

  test('registers multiple hits', () => {
    ship.hit(2);
    expect(ship.hit(3)).toEqual(['', '', 'hit', 'hit', '']);
  });
});

test('Ships sink when all positions are hit', () => {
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.hit(4)).toEqual('sunk');
});
