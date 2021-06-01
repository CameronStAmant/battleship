const shipFactory = require('./ship');
import shipyardFactory from './shipyardHTML';
import carrierHorizontal from './images/carrierHorizontal.png';
import carrierVertical from './images/carrierVertical.png';
import battleshipHorizontal from './images/battleshipHorizontal.png';
import battleshipVertical from './images/battleshipVertical.png';
import submarineHorizontal from './images/submarineHorizontal.png';
import submarineVertical from './images/submarineVertical.png';
import cruiserHorizontal from './images/cruiserHorizontal.png';
import cruiserVertical from './images/cruiserVertical.png';
import destroyerHorizontal from './images/destroyerHorizontal.png';
import destroyerVertical from './images/destroyerVertical.png';

const displayBoards = (
  gameboard1,
  gameboard2,
  player1,
  player2,
  reset,
  rotation = null,
  remainingDeployments = null,
  chosenShip = null
) => {
  let content1 = document.getElementById('content');
  content1.innerHTML = '';
  let bodyArea = document.createElement('div');
  bodyArea.className = 'main';

  let ships = shipyardFactory();

  let awaitingDeployment = [];
  if (remainingDeployments === null) {
    awaitingDeployment = [
      ships.carrier,
      ships.battleship,
      ships.cruiser,
      ships.submarine,
      ships.destroyer,
    ];
  } else {
    awaitingDeployment = remainingDeployments;
  }

  let touchedShip;
  let touchedLocation;
  const shipOptions = [
    'carrier',
    'battleship',
    'cruiser',
    'submarine',
    'destroyer',
  ];

  const deploying = (location, data) => {
    let deploymentBlueprint;

    if (currentRotation === 'horizontal') {
      deploymentBlueprint = gameboard1.deploy(
        shipFactory(`${data}`),
        `${location.substr(2)}`,
        'horizontal'
      );
    } else if (currentRotation === 'vertical') {
      deploymentBlueprint = gameboard1.deploy(
        shipFactory(`${data}`),
        `${location.substr(2)}`,
        'vertical'
      );
    }
    if (
      deploymentBlueprint === 'Your deployment would go off the board' ||
      deploymentBlueprint === 'You cannot deploy on another ship.'
    ) {
      if (deploymentBlueprint === 'Your deployment would go off the board') {
        warningMessageOffBoard();
      } else if (deploymentBlueprint === 'You cannot deploy on another ship.') {
        warningMessageOnShip();
      }
      let newShipyard = awaitingDeployment;
      displayBoards(
        gameboard1,
        gameboard2,
        player1,
        player2,
        reset,
        currentRotation,
        newShipyard,
        touchedShip
      );
      return;
    } else {
      let newShipyard = [];
      for (let i = 0; i < awaitingDeployment.length; i++) {
        if (awaitingDeployment[i].id === data) {
        } else {
          newShipyard.push(awaitingDeployment[i]);
        }
      }
      displayBoards(
        gameboard1,
        gameboard2,
        player1,
        player2,
        reset,
        currentRotation,
        newShipyard
      );
    }
  };

  const warningMessageOffBoard = () => {
    alert('Your deployment would go off the board.');
  };

  const warningMessageOnShip = () => {
    alert('You cannot deploy on another ship.');
  };

  const startHandler = (e) => {
    if (chosenShip) {
      touchedShip = chosenShip;
    }
    if (!touchedShip && shipOptions.includes(e.target.id)) {
      touchedShip = e.target.id;
    } else if (
      touchedShip &&
      !touchedLocation &&
      e.target.id.match(/\d\-[A-Z]\d/)
    ) {
      touchedLocation = e.target.id;
      deploying(touchedLocation, touchedShip);
    } else {
      if (touchedShip && shipOptions.includes(e.target.id)) {
        touchedShip = e.target.id;
      }
    }
  };

  addEventListener('touchstart', startHandler);

  const dragstart_handler = (ev) => {
    ev.dataTransfer.setData('text/plain', ev.target.id);
    ev.dataTransfer.effectAllowed = 'move';

    if (currentRotation === 'vertical') {
      ev.dataTransfer.setDragImage(ev.path[0], 25, 25);
    } else if (currentRotation === 'horizontal') {
      ev.dataTransfer.setDragImage(ev.path[0], 25, 25);
    }
  };

  content1.append(bodyArea);
  let board1 = document.createElement('div');
  board1.innerHTML = 'Player';
  board1.className = 'playerOneBoard';

  bodyArea.append(board1);
  let list = document.createElement('div');
  list.addEventListener('drop', (ev) => {
    ev.preventDefault();
    deploying(ev.toElement.id, ev.dataTransfer.getData('text/plain'));
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

  let currentRotation;
  if (rotation === null || rotation === 'vertical') {
    currentRotation = 'vertical';
  } else {
    currentRotation = 'horizontal';
  }
  let rotate = document.createElement('button');
  rotate.id = 'rotate';
  shipyard.append(rotate);
  const shipsDiv = document.createElement('div');
  shipsDiv.id = 'shipsDiv';
  shipyard.append(shipsDiv);
  const instructions = document.createElement('p');
  instructions.id = 'instructions';
  instructions.innerHTML =
    'To play on mobile, touch the ship you want to deploy, then touch the location on the board.' +
    '<br />' +
    '<br />' +
    'For desktop, click and drag the ship you want to deploy to the location on the board.';
  shipyard.append(instructions);
  rotate.innerHTML = 'rotate';
  for (let i = 0; i < awaitingDeployment.length; i++) {
    if (currentRotation === 'horizontal') {
      const linebreak = document.createElement('br');
      shipsDiv.append(linebreak);
      shipsDiv.append(awaitingDeployment[i]);
    } else {
      shipsDiv.append(awaitingDeployment[i]);
    }
  }

  rotate.addEventListener('click', function rotateActivate() {
    let shipsInShipyard = document.getElementsByClassName('rotateMe');

    if (currentRotation === 'horizontal') {
      shipsDiv.innerHTML = '';
      for (let i = 0; i < awaitingDeployment.length; i++) {
        shipsDiv.append(awaitingDeployment[i]);
      }
      for (let i = 0; i < shipsInShipyard.length; i++) {
        switch (i) {
          case 0:
            shipsInShipyard[i].src = carrierVertical;
            break;
          case 1:
            shipsInShipyard[i].src = battleshipVertical;
            break;
          case 2:
            shipsInShipyard[i].src = submarineVertical;
            break;
          case 3:
            shipsInShipyard[i].src = cruiserVertical;
            break;
          case 4:
            shipsInShipyard[i].src = destroyerVertical;
            break;
        }
        shipsInShipyard[i].className = 'rotateMe horizontal';
      }
      currentRotation = 'vertical';
    } else if (currentRotation === 'vertical') {
      shipsDiv.innerHTML = '';
      for (let i = 0; i < awaitingDeployment.length; i++) {
        const linebreak = document.createElement('br');
        shipsDiv.append(awaitingDeployment[i]);
        shipsDiv.append(linebreak);
      }
      for (let i = 0; i < shipsInShipyard.length; i++) {
        switch (i) {
          case 0:
            shipsInShipyard[i].src = carrierHorizontal;
            break;
          case 1:
            shipsInShipyard[i].src = battleshipHorizontal;
            break;
          case 2:
            shipsInShipyard[i].src = submarineHorizontal;
            break;
          case 3:
            shipsInShipyard[i].src = cruiserHorizontal;
            break;
          case 4:
            shipsInShipyard[i].src = destroyerHorizontal;
            break;
        }
        shipsInShipyard[i].className = 'rotateMe vertical';
        shipsInShipyard[i].addEventListener('dragstart', dragstart_handler);
      }
      currentRotation = 'horizontal';
    }
  });

  for (const [key, value] of Object.entries(gameboard1.board)) {
    let listItem = document.createElement('div');
    listItem.id = `1-${key}`;
    listItem.className = 'grid-item';
    if (value === 'ship') {
      listItem.innerHTML = ' ';
      listItem.className = 'ship';
    } else {
      listItem.innerHTML = '';
    }
    list.append(listItem);
  }

  let board2 = document.createElement('div');
  board2.innerHTML = 'Computer';
  board2.className = 'playerTwoBoard';
  if (remainingDeployments !== null) {
    if (remainingDeployments.length === 0) {
      rotate.className = 'hide';
      instructions.className = 'hide';
      bodyArea.append(board2);
    }
  }
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
        listItem2.innerHTML = ' ';
        listItem2.className = 'hit';
        player1.attackEnemy(listItem2.id.substr(2), gameboard2);
        if (
          gameboard1.gameOver(gameboard2.board, 'Player 1') === 'Game over!' ||
          gameboard2.gameOver(gameboard1.board, 'Computer player') ===
            'Game over!'
        ) {
          location.reload();
        }
        let enemyMove = document.getElementById(
          `1-${player2.attackEnemy(null, gameboard1)}`
        );
        if (enemyMove.innerHTML === ' ') {
          enemyMove.className = 'hit';
          if (
            gameboard1.gameOver(gameboard2.board, 'Player 1') ===
              'Game over!' ||
            gameboard2.gameOver(gameboard1.board, 'Computer player') ===
              'Game over!'
          ) {
            location.reload();
          }
        } else {
          enemyMove.className = 'miss';
        }
      });
    } else {
      listItem2.addEventListener('click', function handler(a) {
        a.currentTarget.removeEventListener(a.type, handler);
        listItem2.innerHTML = '';
        listItem2.className = 'miss';
        player1.attackEnemy(listItem2.id.substr(2), gameboard2);
        let enemyMove = document.getElementById(
          `1-${player2.attackEnemy(null, gameboard1)}`
        );
        if (enemyMove.innerHTML === ' ') {
          enemyMove.className = 'hit';
          if (
            gameboard1.gameOver(gameboard2.board) === 'Game over!' ||
            gameboard2.gameOver(gameboard1.board) === 'Game over!'
          ) {
            location.reload();
          }
        } else {
          enemyMove.className = 'miss';
        }
      });
    }

    list2.append(listItem2);
  }
  const element1 = document.getElementById('carrier');
  if (element1 !== null) {
    element1.addEventListener('dragstart', dragstart_handler);
  }
  const element2 = document.getElementById('battleship');
  if (element2 !== null) {
    element2.addEventListener('dragstart', dragstart_handler);
  }
  const element3 = document.getElementById('cruiser');
  if (element3 !== null) {
    element3.addEventListener('dragstart', dragstart_handler);
  }
  const element4 = document.getElementById('submarine');
  if (element4 !== null) {
    element4.addEventListener('dragstart', dragstart_handler);
  }
  const element5 = document.getElementById('destroyer');
  if (element5 !== null) {
    element5.addEventListener('dragstart', dragstart_handler);
  }

  return { gameboard1 };
};

export default displayBoards;
