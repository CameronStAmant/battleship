const playerFactory = require('./player.js');
const gameboardFactory = require('./gameboard.js');
const shipFactory = require('./ship.js');

const game = () => {
  let gameboard1;
  let gameboard2;
  let board;
  let player1;
  let player2;
  const setup = () => {
    player1 = playerFactory();
    gameboard1 = gameboardFactory();
    gameboard1.deploy(shipFactory('carrier'), 'A1', 'horizontal');
    gameboard1.deploy(shipFactory('battleship'), 'A2', 'horizontal');
    gameboard1.deploy(shipFactory('cruiser'), 'A3', 'horizontal');
    gameboard1.deploy(shipFactory('submarine'), 'A4', 'horizontal');
    gameboard1.deploy(shipFactory('destroyer'), 'A5', 'horizontal');

    player2 = playerFactory();
    gameboard2 = gameboardFactory();
    gameboard2.deploy(shipFactory('carrier'), 'A1', 'vertical');
    gameboard2.deploy(shipFactory('battleship'), 'B1', 'vertical');
    gameboard2.deploy(shipFactory('cruiser'), 'C1', 'vertical');
    gameboard2.deploy(shipFactory('submarine'), 'D1', 'vertical');
    gameboard2.deploy(shipFactory('destroyer'), 'E1', 'vertical');

    boards = [gameboard1.board, gameboard2.board];

    displayBoards();

    return { boards };
  };

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
        listItem.addEventListener('click', function (a) {
          listItem.innerHTML = 'X';
        });
      } else {
        listItem.addEventListener('click', function (a) {
          listItem.innerHTML = '-';
        });
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
      let listItem = document.createElement('div');
      listItem.id = `2-${key}`;
      listItem.className = 'grid-item';
      //
      if (value === 'ship') {
        listItem.addEventListener('click', function (a) {
          listItem.innerHTML = 'X';
        });
      } else {
        listItem.addEventListener('click', function (a) {
          listItem.innerHTML = '-';
        });
      }
      list2.append(listItem);
    }
  };

  const round = () => {
    gameboard2.receiveAttack('A10');
    gameboard1.receiveAttack('A1');
    return { boards };
  };

  return { setup, round };
};

module.exports = game;
