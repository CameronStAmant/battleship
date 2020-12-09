const playerFactory = require('./player.js');
const gameboardFactory = require('./gameboard.js');
const shipFactory = require('./ship.js');

const game = () => {
  let gameboard1;
  let gameboard2;
  let board;
  const setup = () => {
    const player1 = playerFactory();
    gameboard1 = gameboardFactory();
    gameboard1.deploy(shipFactory('cruiser'), 'A5', 'horizontal');
    gameboard1.deploy(shipFactory('battleship'), 'B5', 'horizontal');
    gameboard1.deploy(shipFactory('cruiser'), 'C5', 'horizontal');
    gameboard1.deploy(shipFactory('submarine'), 'D5', 'horizontal');
    gameboard1.deploy(shipFactory('destroyer'), 'E5', 'horizontal');

    const player2 = playerFactory();
    gameboard2 = gameboardFactory();
    gameboard2.deploy(shipFactory('cruiser'), 'A4', 'vertical');
    gameboard2.deploy(shipFactory('battleship'), 'B4', 'vertical');
    gameboard2.deploy(shipFactory('cruiser'), 'C4', 'vertical');
    gameboard2.deploy(shipFactory('submarine'), 'D4', 'vertical');
    gameboard2.deploy(shipFactory('destroyer'), 'E4', 'vertical');

    boards = [gameboard1.board, gameboard2.board];
    return { boards };
  };

  const round = () => {
    return { boards };
  };

  return { setup, round };
};

module.exports = game;
