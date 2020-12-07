const gameboardFactory = require('../gameboard.js');
const shipFactory = require('../ship.js');
let gameboard;

let ship1;
beforeEach(() => {
  ship1 = shipFactory('cruiser');
  ship2 = shipFactory('battleship');
  gameboard = gameboardFactory();
});

describe('vertical tests', () => {
  test('correctly places on row 10', () => {
    expect(gameboard.deploy(shipFactory('cruiser'), 'A8', 'vertical')).toEqual({
      A1: '',
      A2: '',
      A3: '',
      A4: '',
      A5: '',
      A6: '',
      A7: '',
      A8: 'ship',
      A9: 'ship',
      A10: 'ship',
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
    });
  });

  test('errors on placements going past row 10 (the last row)', () => {
    expect(gameboard.deploy(shipFactory('cruiser'), 'A10', 'vertical')).toEqual(
      'Your deployment would go off the board'
    );
  });

  test('ships cannot be placed on top of each other vertically', () => {
    gameboard.deploy(shipFactory('battleship'), 'C7', 'horizontal');
    expect(gameboard.deploy(shipFactory('cruiser'), 'E6', 'vertical')).toEqual(
      'You cannot deploy on another ship.'
    );
  });

  test('when ships cannot be placed on another vertically, the board is unchanged', () => {
    gameboard.deploy(shipFactory('battleship'), 'C7', 'horizontal');
    gameboard.deploy(shipFactory('cruiser'), 'E6', 'vertical');
    expect(gameboard.board).toEqual({
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
      C7: 'ship',
      C8: '',
      C9: '',
      C10: '',
      D1: '',
      D2: '',
      D3: '',
      D4: '',
      D5: '',
      D6: '',
      D7: 'ship',
      D8: '',
      D9: '',
      D10: '',
      E1: '',
      E2: '',
      E3: '',
      E4: '',
      E5: '',
      E6: '',
      E7: 'ship',
      E8: '',
      E9: '',
      E10: '',
      F1: '',
      F2: '',
      F3: '',
      F4: '',
      F5: '',
      F6: '',
      F7: 'ship',
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
    });
  });
});

describe('horizontal tests', () => {
  test('correctly places on column J', () => {
    expect(
      gameboard.deploy(shipFactory('cruiser'), 'H5', 'horizontal')
    ).toEqual({
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
      H5: 'ship',
      H6: '',
      H7: '',
      H8: '',
      H9: '',
      H10: '',
      I1: '',
      I2: '',
      I3: '',
      I4: '',
      I5: 'ship',
      I6: '',
      I7: '',
      I8: '',
      I9: '',
      I10: '',
      J1: '',
      J2: '',
      J3: '',
      J4: '',
      J5: 'ship',
      J6: '',
      J7: '',
      J8: '',
      J9: '',
      J10: '',
    });
  });

  test('errors on placements going past column J (the last column)', () => {
    expect(
      gameboard.deploy(shipFactory('cruiser'), 'I5', 'horizontal')
    ).toEqual('Your deployment would go off the board');
  });

  test('ships cannot be placed on top of each other horizontally', () => {
    gameboard.deploy(shipFactory('cruiser'), 'E6', 'vertical');
    expect(
      gameboard.deploy(shipFactory('battleship'), 'C7', 'horizontal')
    ).toEqual('You cannot deploy on another ship.');
  });

  test('when ships cannot be placed on another horizontally, the board is unchanged', () => {
    gameboard.deploy(shipFactory('cruiser'), 'E6', 'vertical');
    gameboard.deploy(shipFactory('battleship'), 'C7', 'horizontal');
    expect(gameboard.board).toEqual({
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
      E6: 'ship',
      E7: 'ship',
      E8: 'ship',
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
    });
  });
});

describe('receiveAttack tests', () => {
  test('Attack is a hit', () => {
    gameboard.deploy(shipFactory('battleship'), 'F5', 'vertical');
    expect(gameboard.receiveAttack('F7')).toEqual('Hit!');
  });

  test('successful attack knows which ship was hit', () => {
    gameboard.deploy(shipFactory('battleship'), 'F5', 'vertical');
    expect(gameboard.receiveAttack('F7')).toEqual('Hit!');
  });

  test('Attack is a miss', () => {
    gameboard.deploy(shipFactory('battleship'), 'F5', 'vertical');
    expect(gameboard.receiveAttack('C7')).toEqual('Miss!');
  });
});

describe('Each ship registers correctly', () => {
  test('carrier ships', () => {
    gameboard.deploy(shipFactory('carrier'));
    expect(gameboard.fleet[0].name).toEqual('carrier');
  });
  test('battleship ships', () => {
    gameboard.deploy(shipFactory('battleship'));
    expect(gameboard.fleet[0].name).toEqual('battleship');
  });
  test('cruiser ships', () => {
    gameboard.deploy(shipFactory('cruiser'));
    expect(gameboard.fleet[0].name).toEqual('cruiser');
  });
  test('submarine ships', () => {
    gameboard.deploy(shipFactory('submarine'));
    expect(gameboard.fleet[0].name).toEqual('submarine');
  });
  test('destroyer ships', () => {
    gameboard.deploy(shipFactory('destroyer'));
    expect(gameboard.fleet[0].name).toEqual('destroyer');
  });
});

test('board reports when all ships are sunk (with only one on the board)', () => {
  gameboard.deploy(shipFactory('destroyer'), 'B3', 'vertical');
  gameboard.receiveAttack('B4');
  expect(gameboard.receiveAttack('B3')).toEqual('Game over!');
});

test('board reports when all ships are sunk (with two on the board)', () => {
  gameboard.deploy(shipFactory('destroyer'), 'B3', 'vertical');
  gameboard.deploy(shipFactory('cruiser'), 'F6', 'horizontal');
  gameboard.receiveAttack('B4');
  gameboard.receiveAttack('H6');
  gameboard.receiveAttack('B3');
  gameboard.receiveAttack('F6');
  expect(gameboard.receiveAttack('G6')).toEqual('Game over!');
});
