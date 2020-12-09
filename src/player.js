// const gameboardFactory = require('./gameboard.js');
// const shipFactory = require('./ship.js');

const playerFactory = (name) => {
  const username = name;
  // const player2 = 'player2';

  // const gameboard1 = gameboardFactory();
  // const gameboard2 = gameboardFactory();
  // const deployShips = (deployCoordinate) => {
  // gameboard1.deploy(shipFactory('battleship'), deployCoordinate, 'vertical');
  // return gameboard1.board;
  const attackEnemy = (coordinate, enemyBoard) => {
    return enemyBoard.receiveAttack(coordinate);
  };

  // let currentTurn = player1;
  // const turn = () => {
  //   switch (currentTurn) {
  //     case player1:
  //       currentTurn = player2;
  //       return "player 2's turn";
  //     case player2:
  //       currentTurn = player1;
  //       return "player 1's turn";
  //   }
  //   return 'hi';
  // };

  return { attackEnemy };
};

module.exports = playerFactory;
