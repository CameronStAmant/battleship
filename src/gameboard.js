const gameboardFactory = () => {
  let fleet = [];
  let board = {
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    A6: '',
    A7: '',
    A8: '',
    A9: '',
    A10: '',
    B1: '',
    B2: '',
    B3: '',
    B4: '',
    B5: '',
    B6: '',
    B7: '',
    B8: '',
    B9: '',
    B10: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    D1: '',
    D2: '',
    D3: '',
    D4: '',
    D5: '',
    D6: '',
    D7: '',
    D8: '',
    D9: '',
    D10: '',
    E1: '',
    E2: '',
    E3: '',
    E4: '',
    E5: '',
    E6: '',
    E7: '',
    E8: '',
    E9: '',
    E10: '',
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    G1: '',
    G2: '',
    G3: '',
    G4: '',
    G5: '',
    G6: '',
    G7: '',
    G8: '',
    G9: '',
    G10: '',
    H1: '',
    H2: '',
    H3: '',
    H4: '',
    H5: '',
    H6: '',
    H7: '',
    H8: '',
    H9: '',
    H10: '',
    I1: '',
    I2: '',
    I3: '',
    I4: '',
    I5: '',
    I6: '',
    I7: '',
    I8: '',
    I9: '',
    I10: '',
    J1: '',
    J2: '',
    J3: '',
    J4: '',
    J5: '',
    J6: '',
    J7: '',
    J8: '',
    J9: '',
    J10: '',
  };

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

    if (direction === 'vertical') {
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
    } else if (direction === 'horizontal') {
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
              String.fromCharCode(grabCharCode) + coordinate.charAt(1);
            if (board[currentSpot] === 'ship') {
              return offShipDenial;
            } else {
              deployLocations.push(currentSpot);
              ship.shipSize[shipSection] = currentSpot;
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
              if (arr.every((item) => item === '' || item === 'sunk')) {
                return 'Game over!';
              } else {
                return 'sunk';
              }
            } else {
              board[coordinate] = 'hit';
              if ((computer = true)) {
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
      if ((computer = true)) {
        return coordinate;
      } else {
        return 'Miss!';
      }
    }
  };

  return { board, deploy, receiveAttack, fleet };
};

module.exports = gameboardFactory;
