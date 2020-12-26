const playerFactory = require('./player.js');
const gameboardFactory = require('./gameboard.js');
const shipFactory = require('./ship.js');
const displayBoards = require('./displayHTML');

const gameFactory = () => {
  let gameboard1 = gameboardFactory();
  let gameboard2 = gameboardFactory();
  let boards = [gameboard1.board, gameboard2.board];
  let player1 = playerFactory();
  let player2 = playerFactory();
  let reset = false;

  // gameboard1.deploy(shipFactory('carrier'), 'A1', 'vertical');
  // gameboard1.deploy(shipFactory('battleship'), 'B1', 'vertical');
  // gameboard1.deploy(shipFactory('cruiser'), 'C1', 'vertical');
  // gameboard1.deploy(shipFactory('submarine'), 'D1', 'vertical');
  // gameboard1.deploy(shipFactory('destroyer'), 'E1', 'vertical');

  gameboard2.deploy(shipFactory('carrier'), 'A1', 'horizontal');
  gameboard2.deploy(shipFactory('battleship'), 'A2', 'horizontal');
  gameboard2.deploy(shipFactory('cruiser'), 'A3', 'horizontal');
  gameboard2.deploy(shipFactory('submarine'), 'A4', 'horizontal');
  gameboard2.deploy(shipFactory('destroyer'), 'A5', 'horizontal');

  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  return { boards, player1, player2, gameboard1, gameboard2 };
};

module.exports = gameFactory;
