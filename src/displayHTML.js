const shipFactory = require('./ship');
const shipyardFactory = require('./shipyardHTML');

const displayBoards = (gameboard1, gameboard2, player1, player2, reset) => {
  let content1 = document.getElementById('content');
  content1.innerHTML = '';
  let header = document.createElement('div');
  header.innerHTML = 'Battleship';
  content1.append(header);
  let bodyArea = document.createElement('div');
  bodyArea.className = 'main';

  let ships = shipyardFactory();

  const dragstart_handler = (ev) => {
    ev.dataTransfer.setData('text/plain', ev.target.id);
    ev.dataTransfer.effectAllowed = 'move';

    let abd = document.createElement('img');
    abd.src = `/src/images/${ev.path[0].id}Horizontal.jpeg`;

    if (currentRotation === 'vertical') {
      ev.dataTransfer.setDragImage(ev.path[0], 25, 25);
    } else if (currentRotation === 'horizontal') {
      ev.dataTransfer.setDragImage(abd, 10, 10);
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('destroyer');
    element.addEventListener('dragstart', dragstart_handler);
  });

  content1.append(bodyArea);
  let board1 = document.createElement('div');
  board1.innerHTML = 'Player 1';
  board1.className = 'playerOneBoard';

  bodyArea.append(board1);
  let list = document.createElement('div');
  list.addEventListener('drop', (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text/plain');
    let deploymentBlueprint;
    if (currentRotation === 'horizontal') {
      deploymentBlueprint = gameboard1.deploy(
        shipFactory(`${data}`),
        `${ev.toElement.id.substr(2)}`,
        'horizontal'
      );
    } else if (currentRotation === 'vertical') {
      deploymentBlueprint = gameboard1.deploy(
        shipFactory(`${data}`),
        `${ev.toElement.id.substr(2)}`,
        'vertical'
      );
    }
    if (
      deploymentBlueprint === 'Your deployment would go off the board' ||
      deploymentBlueprint === 'You cannot deploy on another ship.'
    ) {
      console.log('not deployed');
      return;
    } else {
      console.log('deployed');
      displayBoards(gameboard1, gameboard2, player1, player2, reset);
      ev.target.appendChild(document.getElementById(data));
    }
  });
  list.addEventListener('dragover', (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
  });
  list.id = 'zone1';
  list.className = 'grid-container';

  board1.append(list);

  let shipyard = document.createElement('div');
  shipyard.id = 'shipyard';
  board1.append(shipyard);

  let currentRotation = 'vertical';
  let rotate = document.createElement('button');

  rotate.innerHTML = 'rotate';
  shipyard.append(rotate);
  shipyard.append(ships.carrier);
  shipyard.append(ships.battleship);
  shipyard.append(ships.cruiser);
  shipyard.append(ships.submarine);
  shipyard.append(ships.destroyer);

  rotate.addEventListener('click', function rotateActivate() {
    let shipsInShipyard = document.getElementsByClassName('rotateMe');

    if (currentRotation === 'horizontal') {
      for (let i = 0; i < shipsInShipyard.length; i++) {
        shipsInShipyard[
          i
        ].src = `/src/images/${shipsInShipyard[i].id}Vertical.jpeg`;
        shipsInShipyard[i].height = '100';
      }
      currentRotation = 'vertical';
    } else if (currentRotation === 'vertical') {
      for (let i = 0; i < shipsInShipyard.length; i++) {
        shipsInShipyard[
          i
        ].src = `/src/images/${shipsInShipyard[i].id}Horizontal.jpeg`;
        shipsInShipyard[i].height = '50';
      }
      currentRotation = 'horizontal';
    }
  });

  //

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
  board2.className = 'playerTwoBoard';
  bodyArea.append(board2);
  let list2 = document.createElement('ul');
  list2.className = 'grid-container';
  board2.appendChild(list2);

  for (const [key, value] of Object.entries(gameboard2.board)) {
    let listItem2 = document.createElement('div');
    listItem2.id = `2-${key}`;
    listItem2.className = 'grid-item';

    if (value === 'ship') {
      listItem2.addEventListener('click', function handler(a) {
        a.currentTarget.removeEventListener(a.type, handler);
        listItem2.innerHTML = 'X';
        listItem2.style.backgroundColor = 'red';
        player1.attackEnemy(listItem2.id.substr(2), gameboard2);
        if (
          gameboard1.gameOver(gameboard2.board) === 'Game over!' ||
          gameboard2.gameOver(gameboard1.board) === 'Game over!'
        ) {
          //alert('game over');
          location.reload();
        }
        let enemyMove = document.getElementById(
          `1-${player2.attackEnemy(null, gameboard1)}`
        );
        if (enemyMove.innerHTML === 'X') {
          enemyMove.style.backgroundColor = 'red';
          if (
            gameboard1.gameOver(gameboard2.board) === 'Game over!' ||
            gameboard2.gameOver(gameboard1.board) === 'Game over!'
          ) {
            //alert('game over');
            location.reload();
          }
        } else {
          enemyMove.style.backgroundColor = 'green';
        }
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
          if (
            gameboard1.gameOver(gameboard2.board) === 'Game over!' ||
            gameboard2.gameOver(gameboard1.board) === 'Game over!'
          ) {
            //alert('game over');
            location.reload();
          }
        } else {
          enemyMove.style.backgroundColor = 'green';
        }
      });
    }

    list2.append(listItem2);
  }
  return { gameboard1 };
};

module.exports = displayBoards;
