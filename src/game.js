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

  gameboard2.deploy(shipFactory('carrier'), 'computer', 'computer');
  gameboard2.deploy(shipFactory('battleship'), 'computer', 'computer');
  gameboard2.deploy(shipFactory('cruiser'), 'computer', 'computer');
  gameboard2.deploy(shipFactory('submarine'), 'computer', 'computer');
  gameboard2.deploy(shipFactory('destroyer'), 'computer', 'computer');

  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  return { boards, player1, player2, gameboard1, gameboard2 };
};

module.exports = gameFactory;
