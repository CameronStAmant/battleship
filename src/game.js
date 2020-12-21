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
  const acceptedCoordinates = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'E1',
    'E2',
    'E3',
    'E4',
    'E5',
    'E6',
    'E7',
    'E8',
    'E9',
    'E10',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'G1',
    'G2',
    'G3',
    'G4',
    'G5',
    'G6',
    'G7',
    'G8',
    'G9',
    'G10',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
    'H10',
    'I1',
    'I2',
    'I3',
    'I4',
    'I5',
    'I6',
    'I7',
    'I8',
    'I9',
    'I10',
    'J1',
    'J2',
    'J3',
    'J4',
    'J5',
    'J6',
    'J7',
    'J8',
    'J9',
    'J10',
  ];
  let carrier;
  let carrierDirection;
  let battleship;
  let battleshipDirection;
  let cruiser;
  let cruiserDirection;
  let submarine;
  let submarineDirection;
  let destroyer;
  let destroyerDirection;

  gameboard2.deploy(shipFactory('carrier'), 'A1', 'horizontal');
  gameboard2.deploy(shipFactory('battleship'), 'A2', 'horizontal');
  gameboard2.deploy(shipFactory('cruiser'), 'A3', 'horizontal');
  gameboard2.deploy(shipFactory('submarine'), 'A4', 'horizontal');
  gameboard2.deploy(shipFactory('destroyer'), 'A5', 'horizontal');

  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  /*
   Beginning of new user input
   */

  const deploy = document.getElementById('deploy1');
  deploy.addEventListener('click', (event) => {
    event.preventDefault();
    alert('hello');
  });

  /*
   End of new user input
   */

  /*
  while (
    !acceptedCoordinates.includes(carrier) &&
    !['vertical', 'horizontal'].includes(carrierDirection)
  ) {
    // console.log('That option is invalid');
    carrier = prompt(
      'Where would you like your carrier? Enter coordinates between A-J and 1-10'
    );
    carrierDirection = prompt('Vertical or horizontal?');
  }
  gameboard1.deploy(shipFactory('carrier'), carrier, carrierDirection);
  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  while (
    !acceptedCoordinates.includes(battleship) &&
    !['vertical', 'horizontal'].includes(battleshipDirection)
  ) {
    // console.log('That option is invalid');
    battleship = prompt(
      'Where would you like your battleship? Enter coordinates between A-J and 1-10'
    );
    battleshipDirection = prompt('Vertical or horizontal?');
  }
  gameboard1.deploy(shipFactory('battleship'), battleship, battleshipDirection);
  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  while (
    !acceptedCoordinates.includes(cruiser) &&
    !['vertical', 'horizontal'].includes(cruiserDirection)
  ) {
    // console.log('That option is invalid');
    cruiser = prompt(
      'Where would you like your cruiser? Enter coordinates between A-J and 1-10'
    );
    cruiserDirection = prompt('Vertical or horizontal?');
  }
  gameboard1.deploy(shipFactory('cruiser'), cruiser, cruiserDirection);
  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  while (
    !acceptedCoordinates.includes(submarine) &&
    !['vertical', 'horizontal'].includes(submarineDirection)
  ) {
    // console.log('That option is invalid');
    submarine = prompt(
      'Where would you like your submarine? Enter coordinates between A-J and 1-10'
    );
    submarineDirection = prompt('Vertical or horizontal?');
  }
  gameboard1.deploy(shipFactory('submarine'), submarine, submarineDirection);
  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  while (
    !acceptedCoordinates.includes(destroyer) &&
    !['vertical', 'horizontal'].includes(destroyerDirection)
  ) {
    // console.log('That option is invalid');
    destroyer = prompt(
      'Where would you like your destroyer? Enter coordinates between A-J and 1-10'
    );
    destroyerDirection = prompt('Vertical or horizontal?');
  }
  gameboard1.deploy(shipFactory('destroyer'), destroyer, destroyerDirection);
  displayBoards(gameboard1, gameboard2, player1, player2, reset);
*/
  /*
  let fleetArray = [carrier, battleship, cruiser, submarine, destroyer];
  let fleetDirection = [
    carrierDirection,
    battleshipDirection,
    cruiserDirection,
    submarineDirection,
    destroyerDirection,
  ];
  let fleetArrayNames = [
    'carrier',
    'battleship',
    'cruiser',
    'submarine',
    'destroyer',
  ];

  for (let i = 0; i < fleetArray.length; i++) {
    while (
      ![
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'A7',
        'A8',
        'A9',
        'A10',
        'B1',
        'B2',
        'B3',
        'B4',
        'B5',
        'B6',
        'B7',
        'B8',
        'B9',
        'B10',
        'C1',
        'C2',
        'C3',
        'C4',
        'C5',
        'C6',
        'C7',
        'C8',
        'C9',
        'C10',
        'D1',
        'D2',
        'D3',
        'D4',
        'D5',
        'D6',
        'D7',
        'D8',
        'D9',
        'D10',
        'E1',
        'E2',
        'E3',
        'E4',
        'E5',
        'E6',
        'E7',
        'E8',
        'E9',
        'E10',
        'F1',
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'F10',
        'G1',
        'G2',
        'G3',
        'G4',
        'G5',
        'G6',
        'G7',
        'G8',
        'G9',
        'G10',
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'H7',
        'H8',
        'H9',
        'H10',
        'I1',
        'I2',
        'I3',
        'I4',
        'I5',
        'I6',
        'I7',
        'I8',
        'I9',
        'I10',
        'J1',
        'J2',
        'J3',
        'J4',
        'J5',
        'J6',
        'J7',
        'J8',
        'J9',
        'J10',
      ].includes(fleetArray[i]) &&
      !['vertical', 'horizontal'].includes(fleetDirection[i])
    ) {
      console.log('That option is invalid');

    }
    gameboard1.deploy(
      shipFactory(`${fleetArrayNames[i]}`),
      fleetArray[i],
      fleetDirection[i]
    );
  }
  */

  displayBoards(gameboard1, gameboard2, player1, player2, reset);

  return { boards, player1, player2, gameboard1, gameboard2 };
};

module.exports = gameFactory;
