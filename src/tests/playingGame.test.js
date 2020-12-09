const gameboardFactory = require('../gameboard.js');
const shipFactory = require('../ship.js');
const player = require('../player.js');

const users = player();
gameboard1 = gameboardFactory();
gameboard2 = gameboardFactory();

describe('playing through the game', () => {
  test('playing through one round', () => {
    gameboard1.deploy(shipFactory('cruiser'), 'E6', 'vertical');
    gameboard2.deploy(shipFactory('battleship'), 'B6', 'horizontal');
  });
});
