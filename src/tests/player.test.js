const playerFactory = require('../player.js');
const shipFactory = require('../ship.js');
const gameboardFactory = require('../gameboard.js');

let player1;
let player2;
let gameboard1;
let gameboard2;
beforeEach(() => {
  player1 = playerFactory();
  gameboard1 = gameboardFactory();

  player2 = playerFactory('computer');
  gameboard2 = gameboardFactory();
});

describe('players interactions', () => {
  test('players have turns and can hit the enemy', () => {
    gameboard2.deploy(shipFactory('cruiser'), 'A8', 'vertical');
    expect(player1.attackEnemy('A9', gameboard2)).toEqual('Hit!');
  });

  test('players have turns and can miss the enemy', () => {
    gameboard2.deploy(shipFactory('cruiser'), 'A8', 'vertical');
    expect(player1.attackEnemy('D5', gameboard2)).toEqual('Miss!');
  });
});

describe('computer players interactions', () => {
  test('computer takes turn and randomly attacks a location on the board (testing included all coordinates but the ship to be hit)', () => {
    gameboard1.deploy(shipFactory('cruiser'), 'A8', 'vertical');
    player2.attackEnemy('A1', gameboard1);
    player2.attackEnemy('A2', gameboard1);
    player2.attackEnemy('A3', gameboard1);
    player2.attackEnemy('A4', gameboard1);
    player2.attackEnemy('A5', gameboard1);
    player2.attackEnemy('A6', gameboard1);
    player2.attackEnemy('A7', gameboard1);
    // player2.attackEnemy('A8', gameboard1);
    // player2.attackEnemy('A9', gameboard1);
    // player2.attackEnemy('A10', gameboard1);
    player2.attackEnemy('B1', gameboard1);
    player2.attackEnemy('B2', gameboard1);
    player2.attackEnemy('B3', gameboard1);
    player2.attackEnemy('B4', gameboard1);
    player2.attackEnemy('B5', gameboard1);
    player2.attackEnemy('B6', gameboard1);
    player2.attackEnemy('B7', gameboard1);
    player2.attackEnemy('B8', gameboard1);
    player2.attackEnemy('B9', gameboard1);
    player2.attackEnemy('B10', gameboard1);
    player2.attackEnemy('C1', gameboard1);
    player2.attackEnemy('C2', gameboard1);
    player2.attackEnemy('C3', gameboard1);
    player2.attackEnemy('C4', gameboard1);
    player2.attackEnemy('C5', gameboard1);
    player2.attackEnemy('C6', gameboard1);
    player2.attackEnemy('C7', gameboard1);
    player2.attackEnemy('C8', gameboard1);
    player2.attackEnemy('C9', gameboard1);
    player2.attackEnemy('C10', gameboard1);
    player2.attackEnemy('D1', gameboard1);
    player2.attackEnemy('D2', gameboard1);
    player2.attackEnemy('D3', gameboard1);
    player2.attackEnemy('D4', gameboard1);
    player2.attackEnemy('D5', gameboard1);
    player2.attackEnemy('D6', gameboard1);
    player2.attackEnemy('D7', gameboard1);
    player2.attackEnemy('D8', gameboard1);
    player2.attackEnemy('D9', gameboard1);
    player2.attackEnemy('D10', gameboard1);
    player2.attackEnemy('E1', gameboard1);
    player2.attackEnemy('E2', gameboard1);
    player2.attackEnemy('E3', gameboard1);
    player2.attackEnemy('E4', gameboard1);
    player2.attackEnemy('E5', gameboard1);
    player2.attackEnemy('E6', gameboard1);
    player2.attackEnemy('E7', gameboard1);
    player2.attackEnemy('E8', gameboard1);
    player2.attackEnemy('E9', gameboard1);
    player2.attackEnemy('E10', gameboard1);
    player2.attackEnemy('F1', gameboard1);
    player2.attackEnemy('F2', gameboard1);
    player2.attackEnemy('F3', gameboard1);
    player2.attackEnemy('F4', gameboard1);
    player2.attackEnemy('F5', gameboard1);
    player2.attackEnemy('F6', gameboard1);
    player2.attackEnemy('F7', gameboard1);
    player2.attackEnemy('F8', gameboard1);
    player2.attackEnemy('F9', gameboard1);
    player2.attackEnemy('F10', gameboard1);
    player2.attackEnemy('G1', gameboard1);
    player2.attackEnemy('G2', gameboard1);
    player2.attackEnemy('G3', gameboard1);
    player2.attackEnemy('G4', gameboard1);
    player2.attackEnemy('G5', gameboard1);
    player2.attackEnemy('G6', gameboard1);
    player2.attackEnemy('G7', gameboard1);
    player2.attackEnemy('G8', gameboard1);
    player2.attackEnemy('G9', gameboard1);
    player2.attackEnemy('G10', gameboard1);
    player2.attackEnemy('H1', gameboard1);
    player2.attackEnemy('H2', gameboard1);
    player2.attackEnemy('H3', gameboard1);
    player2.attackEnemy('H4', gameboard1);
    player2.attackEnemy('H5', gameboard1);
    player2.attackEnemy('H6', gameboard1);
    player2.attackEnemy('H7', gameboard1);
    player2.attackEnemy('H8', gameboard1);
    player2.attackEnemy('H9', gameboard1);
    player2.attackEnemy('H10', gameboard1);
    player2.attackEnemy('I1', gameboard1);
    player2.attackEnemy('I2', gameboard1);
    player2.attackEnemy('I3', gameboard1);
    player2.attackEnemy('I4', gameboard1);
    player2.attackEnemy('I5', gameboard1);
    player2.attackEnemy('I6', gameboard1);
    player2.attackEnemy('I7', gameboard1);
    player2.attackEnemy('I8', gameboard1);
    player2.attackEnemy('I9', gameboard1);
    player2.attackEnemy('I10', gameboard1);
    player2.attackEnemy('J1', gameboard1);
    player2.attackEnemy('J2', gameboard1);
    player2.attackEnemy('J3', gameboard1);
    player2.attackEnemy('J4', gameboard1);
    player2.attackEnemy('J5', gameboard1);
    player2.attackEnemy('J6', gameboard1);
    player2.attackEnemy('J7', gameboard1);
    player2.attackEnemy('J8', gameboard1);
    player2.attackEnemy('J9', gameboard1);
    player2.attackEnemy('J10', gameboard1);
    expect(player2.attackEnemy(null, gameboard1)).toEqual('Hit!');
  });

  test('computer takes turn and randomly attacks a location on the board (testing included all coordinates but the ship to be hit)', () => {
    expect(player2.attackEnemy(null, gameboard1)).toEqual('Miss!');
  });
});
