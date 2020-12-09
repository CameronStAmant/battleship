const playerFactory = require('../player.js');
const shipFactory = require('../ship.js');
const gameboardFactory = require('../gameboard.js');

let player1;
let player2;
let gameboard1;
let gameboard2;
beforeEach(() => {
  player1 = playerFactory();
  gameboard1 = gameboardFactory();

  player2 = playerFactory();
  gameboard2 = gameboardFactory();
});

describe('players interactions', () => {
  test('players have turns and can hit the enemy', () => {
    gameboard2.deploy(shipFactory('cruiser'), 'A8', 'vertical');
    expect(player1.attackEnemy('A9', gameboard2)).toEqual('Hit!');
  });

  test('players have turns and can miss the enemy', () => {
    gameboard2.deploy(shipFactory('cruiser'), 'A8', 'vertical');
    expect(player1.attackEnemy('D5', gameboard2)).toEqual('Miss!');
  });
});
