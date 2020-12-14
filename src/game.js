const playerFactory = require('./player.js');
const gameboardFactory = require('./gameboard.js');
const shipFactory = require('./ship.js');

const gameFactory = () => {
  let gameboard1 = gameboardFactory();
  let gameboard2 = gameboardFactory();
  let boards = [gameboard1.board, gameboard2.board];
  let player1 = playerFactory();
  let player2 = playerFactory();
  gameboard1.deploy(shipFactory('carrier'), 'A1', 'horizontal');
  gameboard1.deploy(shipFactory('battleship'), 'A2', 'horizontal');
  gameboard1.deploy(shipFactory('cruiser'), 'A3', 'horizontal');
  gameboard1.deploy(shipFactory('submarine'), 'A4', 'horizontal');
  gameboard1.deploy(shipFactory('destroyer'), 'A5', 'horizontal');

  gameboard2.deploy(shipFactory('carrier'), 'A1', 'vertical');
  gameboard2.deploy(shipFactory('battleship'), 'B1', 'vertical');
  gameboard2.deploy(shipFactory('cruiser'), 'C1', 'vertical');
  gameboard2.deploy(shipFactory('submarine'), 'D1', 'vertical');
  gameboard2.deploy(shipFactory('destroyer'), 'E1', 'vertical');

  const displayBoards = () => {
    let content1 = document.getElementById('content');
    let header = document.createElement('div');
    header.innerHTML = 'Battleship';
    content1.append(header);
    let body = document.createElement('div');
    body.className = 'main';
    content1.append(body);
    let board1 = document.createElement('div');
    board1.innerHTML = 'Player 1';
    board1.class = 'playerOneBoard';
    body.append(board1);
    let list = document.createElement('ul');
    list.className = 'grid-container';
    board1.append(list);

    for (const [key, value] of Object.entries(gameboard1.board)) {
      let listItem = document.createElement('div');
      listItem.id = `1-${key}`;
      listItem.className = 'grid-item';
      if (value === 'ship') {
        listItem.innerHTML = 'X';
      } else {
        listItem.innerHTML = '-';
      }
      list.append(listItem);
    }

    let board2 = document.createElement('div');
    board2.innerHTML = 'Player 2';
    board2.class = 'playerTwoBoard';
    body.append(board2);
    let list2 = document.createElement('ul');
    list2.className = 'grid-container';
    board2.appendChild(list2);

    for (const [key, value] of Object.entries(gameboard2.board)) {
      let listItem2 = document.createElement('div');
      listItem2.id = `2-${key}`;
      listItem2.className = 'grid-item';
      //
      if (value === 'ship') {
        listItem2.addEventListener('click', function handler(a) {
          a.currentTarget.removeEventListener(a.type, handler);
          listItem2.innerHTML = 'X';
          listItem2.style.backgroundColor = 'red';
          player1.attackEnemy(listItem2.id.substr(2), gameboard2);
          let enemyMove = document.getElementById(
            `1-${player2.attackEnemy(null, gameboard1)}`
          );
          if (enemyMove.innerHTML === 'X') {
            enemyMove.style.backgroundColor = 'red';
          } else {
            enemyMove.style.backgroundColor = 'green';
          }
          gameboard1.gameOver(gameboard2.board);
          gameboard2.gameOver(gameboard1.board);
        });
      } else {
        listItem2.addEventListener('click', function handler(a) {
          a.currentTarget.removeEventListener(a.type, handler);
          listItem2.innerHTML = '-';
          listItem2.style.backgroundColor = 'green';
          player1.attackEnemy(listItem2.id.substr(2), gameboard2);
          let enemyMove = document.getElementById(
            `1-${player2.attackEnemy(null, gameboard1)}`
          );
          if (enemyMove.innerHTML === 'X') {
            enemyMove.style.backgroundColor = 'red';
          } else {
            enemyMove.style.backgroundColor = 'green';
          }
          gameboard1.gameOver(gameboard2.board);
          gameboard2.gameOver(gameboard1.board);
        });
      }

      list2.append(listItem2);
    }
  };

  // let gameOver = false;
  // while (gameOver !== true) {
  // player1.attackEnemy();
  // }
  // const round = (playerOneCoordinate, playerTwoCoordinate = null) => {
  //   player1.attackEnemy(playerOneCoordinate, gameboard2);
  //   player2.attackEnemy(playerTwoCoordinate, gameboard1);
  //   return { boards };
  // };

  displayBoards();

  return { boards, player1, player2, gameboard1, gameboard2 };
};

module.exports = gameFactory;
