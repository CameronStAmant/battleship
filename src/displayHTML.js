const displayBoards = (gameboard1, gameboard2, player1, player2, reset) => {
  let content1 = document.getElementById('content');
  content1.innerHTML = '';
  let header = document.createElement('div');
  header.innerHTML = 'Battleship';
  content1.append(header);
  let body = document.createElement('div');
  body.className = 'main';

  //

  //

  //
  /*
  let inputModal = document.createElement('form');

  let inputShip1Coordinate = document.createElement('input');
  inputShip1Coordinate.setAttribute('type', 'text');
  inputShip1Coordinate.setAttribute('name', 'Carrier');
  inputShip1Coordinate.setAttribute('placeholder', 'Carrier');

  let inputShip1Direction = document.createElement('input');
  inputShip1Direction.setAttribute('type', 'radio');
  inputShip1Direction.setAttribute('value', 'vertical');
  inputShip1Direction.setAttribute('name', 'vertical');

  let inputShip1DirectionLabel = document.createElement('label');
  inputShip1DirectionLabel.innerHTML = 'Vertical';

  let ship1Deploy = document.createElement('button');
  ship1Deploy.id = 'deploy1';
  ship1Deploy.innerHTML = 'Deploy';

  inputShip1DirectionLabel.append(ship1Deploy);

  inputModal.append(inputShip1Coordinate);
  inputModal.append(inputShip1Direction);
  inputModal.append(inputShip1DirectionLabel);
  content1.append(inputModal);
*/
  //

  // START drag and drop

  const carrier_drag = document.createElement('div');
  carrier_drag.innerHTML = ['X', 'X', 'X', 'X', 'X'];
  carrier_drag.id = 'carrier_dragger';
  carrier_drag.setAttribute('draggable', 'true');
  body.append(carrier_drag);

  const dragstart_handler = (ev) => {
    ev.dataTransfer.setData('text/plain', ev.target.id);
    ev.dataTransfer.effectAllowed = 'move';
    console.log('picked up');
  };

  window.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('carrier_dragger');
    element.addEventListener('dragstart', dragstart_handler);
    console.log('DOMCOntentLoaded');
  });

  // END drag and drop

  // START drop zone

  const dragover_handler = (ev) => {
    ev.preventDefault();
    console.log('dragging');
    ev.dataTransfer.dropEffect = 'move';
  };

  const drop_handler = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text/plain');
    ev.target.appendChild(document.getElementById(data));
    console.log('dropped');
  };

  // END drop zone

  content1.append(body);
  let board1 = document.createElement('div');
  board1.innerHTML = 'Player 1';
  board1.className = 'playerOneBoard';

  body.append(board1);
  let list = document.createElement('div');
  list.setAttribute('ondrop', 'drop_handler(event)');
  list.setAttribute('ondragover', 'dragover_handler(event)');
  list.id = 'zone1';
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
  board2.className = 'playerTwoBoard';
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
  return {};
};

module.exports = displayBoards;
