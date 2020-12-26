const gameboardFactory = () => {
  let fleet = [];
  let board = {
    A1: '',
    B1: '',
    C1: '',
    D1: '',
    E1: '',
    F1: '',
    G1: '',
    H1: '',
    I1: '',
    J1: '',
    A2: '',
    B2: '',
    C2: '',
    D2: '',
    E2: '',
    F2: '',
    G2: '',
    H2: '',
    I2: '',
    J2: '',
    A3: '',
    B3: '',
    C3: '',
    D3: '',
    E3: '',
    F3: '',
    G3: '',
    H3: '',
    I3: '',
    J3: '',
    A4: '',
    B4: '',
    C4: '',
    D4: '',
    E4: '',
    F4: '',
    G4: '',
    H4: '',
    I4: '',
    J4: '',
    A5: '',
    B5: '',
    C5: '',
    D5: '',
    E5: '',
    F5: '',
    G5: '',
    H5: '',
    I5: '',
    J5: '',
    A6: '',
    B6: '',
    C6: '',
    D6: '',
    E6: '',
    F6: '',
    G6: '',
    H6: '',
    I6: '',
    J6: '',
    A7: '',
    B7: '',
    C7: '',
    D7: '',
    E7: '',
    F7: '',
    G7: '',
    H7: '',
    I7: '',
    J7: '',
    A8: '',
    B8: '',
    C8: '',
    D8: '',
    E8: '',
    F8: '',
    G8: '',
    H8: '',
    I8: '',
    J8: '',
    A9: '',
    B9: '',
    C9: '',
    D9: '',
    E9: '',
    F9: '',
    G9: '',
    H9: '',
    I9: '',
    J9: '',
    A10: '',
    B10: '',
    C10: '',
    D10: '',
    E10: '',
    F10: '',
    G10: '',
    H10: '',
    I10: '',
    J10: '',
  };
  let directionOptions = ['vertical', 'horizontal'];
  const denyDeployment = (denialReason) => {
    switch (denialReason) {
      case 'offBoard':
        return 'Your deployment would go off the board';
      case 'onShip':
        return 'You cannot deploy on another ship.';
    }
  };

  const deploy = (ship, coordinate, direction) => {
    let deployLocations = [];
    const offBoardDenial = denyDeployment('offBoard');
    const offShipDenial = denyDeployment('onShip');

    if (coordinate === 'computer' && direction === 'computer') {
      let randomCoordinate = (obj) => {
        let keys = Object.keys(obj);
        return keys[Math.floor(Math.random() * keys.length)];
      };

      let isDeployed = false;
      while (isDeployed === false) {
        let randomDirection =
          directionOptions[Math.floor(Math.random() * directionOptions.length)];
        let randomCoordinateChoice = randomCoordinate(board);
        let outcome = deploy(ship, randomCoordinateChoice, randomDirection);
        if (
          outcome !== 'Your deployment would go off the board' &&
          outcome !== 'You cannot deploy on another ship.'
        ) {
          isDeployed = true;
        }
      }
    } else {
      if (direction === 'horizontal') {
        const endOfBoard = 'J';
        if (
          ship.shipSize.length - 1 + coordinate.charCodeAt(0) >
          endOfBoard.charCodeAt(0)
        ) {
          return offBoardDenial;
        } else {
          for (
            let shipSection = 0;
            shipSection < ship.shipSize.length;
            shipSection++
          ) {
            if (shipSection === 0) {
              if (board[coordinate] === 'ship') {
                return offShipDenial;
              } else {
                deployLocations.push(coordinate);
                ship.shipSize[shipSection] = coordinate;
              }
            } else {
              const grabCharCode = coordinate.charCodeAt(0) + shipSection;
              let currentSpot =
                String.fromCharCode(grabCharCode) + coordinate.substr(1);
              if (board[currentSpot] === 'ship') {
                return offShipDenial;
              } else {
                deployLocations.push(currentSpot);
                ship.shipSize[shipSection] = currentSpot;
              }
            }
          }
        }
      } else if (direction === 'vertical') {
        if (ship.shipSize.length - 1 + parseInt(coordinate.substring(1)) > 10) {
          return offBoardDenial;
        } else {
          for (let i = 0; i < ship.shipSize.length; i++) {
            let currentSpot =
              coordinate.charAt(0) + (parseInt(coordinate.charAt(1)) + i);
            if (i === 0) {
              if (board[coordinate] === 'ship') {
                return offShipDenial;
              } else {
                deployLocations.push(coordinate);
                ship.shipSize[i] = coordinate;
              }
            } else {
              if (board[currentSpot] === 'ship') {
                return offShipDenial;
              } else {
                deployLocations.push(currentSpot);
                ship.shipSize[i] = currentSpot;
              }
            }
          }
        }
      }
      for (let j = 0; j < deployLocations.length; j++) {
        board[deployLocations[j]] = 'ship';
      }
      fleet.push(ship);
      return board;
    }
  };

  const receiveAttack = (coordinate, computer = false) => {
    if (board[coordinate] === 'ship') {
      for (let specificBoat = 0; specificBoat < fleet.length; specificBoat++) {
        for (
          let shipSection = 0;
          shipSection < fleet[specificBoat].shipSize.length;
          shipSection++
        ) {
          if (fleet[specificBoat].shipSize[shipSection] === coordinate) {
            if (fleet[specificBoat].hit(shipSection) === 'sunk') {
              for (let e = 0; e < fleet[specificBoat].shipSize.length; e++) {
                board[fleet[specificBoat].shipSize[e].split('hit-sunk')[0]] =
                  'sunk';
              }
              let arr = [];
              for (const [key, value] of Object.entries(board)) {
                arr.push(value);
              }
              if (arr.every((item) => item !== 'ship')) {
                return coordinate;
              } else {
                if (computer === true) {
                  return coordinate;
                } else {
                  return 'sunk';
                }
              }
            } else {
              board[coordinate] = 'hit';
              if (computer === true) {
                return coordinate;
              } else {
                return 'Hit!';
              }
            }
          }
        }
      }
    } else {
      board[coordinate] = 'miss';
      if (computer === true) {
        return coordinate;
      } else {
        return 'Miss!';
      }
    }
  };

  const gameOver = (enemyBoard, player) => {
    let arr = [];
    for (const [key, value] of Object.entries(enemyBoard)) {
      arr.push(value);
    }
    if (arr.every((item) => item !== 'ship')) {
      alert(`${player} wins!`);
      return 'Game over!';
    }
  };

  return { board, deploy, receiveAttack, fleet, gameOver };
};

module.exports = gameboardFactory;
