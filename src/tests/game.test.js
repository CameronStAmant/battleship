const gameFactory = require('../game.js');
// const displayBoards = require('../displayHTML');

describe('Gameplay', () => {
  /*
  test('Sets up the game with vertical placements', () => {
    global.prompt = jest.fn();
    global.prompt
      .mockReturnValueOnce('A1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('B1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('C1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('D1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('E1')
      .mockReturnValueOnce('vertical');
    document.body.innerHTML = '<div id=content>' + '</div>';
    const game = gameFactory();
    expect(game.boards).toEqual([
      {
        A1: 'ship',
        A10: '',
        A2: 'ship',
        A3: 'ship',
        A4: 'ship',
        A5: 'ship',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        B1: 'ship',
        B10: '',
        B2: 'ship',
        B3: 'ship',
        B4: 'ship',
        B5: '',
        B6: '',
        B7: '',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: '',
        C5: '',
        C6: '',
        C7: '',
        C8: '',
        C9: '',
        D1: 'ship',
        D10: '',
        D2: 'ship',
        D3: 'ship',
        D4: '',
        D5: '',
        D6: '',
        D7: '',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: '',
        E2: 'ship',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: '',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: '',
        J10: '',
        J2: '',
        J3: '',
        J4: '',
        J5: '',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
      {
        A1: 'ship',
        A10: '',
        A2: 'ship',
        A3: 'ship',
        A4: 'ship',
        A5: 'ship',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        B1: 'ship',
        B10: '',
        B2: 'ship',
        B3: 'ship',
        B4: 'ship',
        B5: 'ship',
        B6: '',
        B7: '',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: 'ship',
        C5: '',
        C6: '',
        C7: '',
        C8: '',
        C9: '',
        D1: 'ship',
        D10: '',
        D2: 'ship',
        D3: '',
        D4: '',
        D5: '',
        D6: '',
        D7: '',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: '',
        E2: '',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: '',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: '',
        J10: '',
        J2: '',
        J3: '',
        J4: '',
        J5: '',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
    ]);
  });
  test('Sets up the game with horizontal placements', () => {
    global.prompt = jest.fn();
    global.prompt
      .mockReturnValueOnce('A1')
      .mockReturnValueOnce('horizontal')
      .mockReturnValueOnce('A2')
      .mockReturnValueOnce('horizontal')
      .mockReturnValueOnce('A3')
      .mockReturnValueOnce('horizontal')
      .mockReturnValueOnce('A4')
      .mockReturnValueOnce('horizontal')
      .mockReturnValueOnce('A5')
      .mockReturnValueOnce('horizontal');
    document.body.innerHTML = '<div id=content>' + '</div>';
    const game = gameFactory();
    expect(game.boards).toEqual([
      {
        A1: 'ship',
        A10: '',
        A2: 'ship',
        A3: 'ship',
        A4: 'ship',
        A5: 'ship',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        B1: 'ship',
        B10: '',
        B2: 'ship',
        B3: 'ship',
        B4: 'ship',
        B5: 'ship',
        B6: '',
        B7: '',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: 'ship',
        C5: '',
        C6: '',
        C7: '',
        C8: '',
        C9: '',
        D1: 'ship',
        D10: '',
        D2: 'ship',
        D3: '',
        D4: '',
        D5: '',
        D6: '',
        D7: '',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: '',
        E2: '',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: '',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: '',
        J10: '',
        J2: '',
        J3: '',
        J4: '',
        J5: '',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
      {
        A1: 'ship',
        A10: '',
        A2: 'ship',
        A3: 'ship',
        A4: 'ship',
        A5: 'ship',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        B1: 'ship',
        B10: '',
        B2: 'ship',
        B3: 'ship',
        B4: 'ship',
        B5: 'ship',
        B6: '',
        B7: '',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: 'ship',
        C5: '',
        C6: '',
        C7: '',
        C8: '',
        C9: '',
        D1: 'ship',
        D10: '',
        D2: 'ship',
        D3: '',
        D4: '',
        D5: '',
        D6: '',
        D7: '',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: '',
        E2: '',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: '',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: '',
        J10: '',
        J2: '',
        J3: '',
        J4: '',
        J5: '',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
    ]);
  });
  test('Play two rounds', () => {
    global.prompt = jest.fn();
    global.prompt
      .mockReturnValueOnce('A1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('B1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('C1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('D1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('E1')
      .mockReturnValueOnce('vertical');
    document.body.innerHTML = '<div id=content>' + '</div>';
    const game1 = gameFactory();

    game1.player1.attackEnemy('A1', game1.gameboard2);
    game1.player2.attackEnemy('A10', game1.gameboard1);
    game1.player1.attackEnemy('A10', game1.gameboard2);
    game1.player2.attackEnemy('B3', game1.gameboard1);

    expect(game1.boards).toEqual([
      {
        A1: 'ship',
        A10: 'miss',
        A2: 'ship',
        A3: 'ship',
        A4: 'ship',
        A5: 'ship',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        B1: 'ship',
        B10: '',
        B2: 'ship',
        B3: 'hit',
        B4: 'ship',
        B5: '',
        B6: '',
        B7: '',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: '',
        C5: '',
        C6: '',
        C7: '',
        C8: '',
        C9: '',
        D1: 'ship',
        D10: '',
        D2: 'ship',
        D3: 'ship',
        D4: '',
        D5: '',
        D6: '',
        D7: '',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: '',
        E2: 'ship',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: '',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: '',
        J10: '',
        J2: '',
        J3: '',
        J4: '',
        J5: '',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
      {
        A1: 'hit',
        A10: 'miss',
        A2: 'ship',
        A3: 'ship',
        A4: 'ship',
        A5: 'ship',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        B1: 'ship',
        B10: '',
        B2: 'ship',
        B3: 'ship',
        B4: 'ship',
        B5: 'ship',
        B6: '',
        B7: '',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: 'ship',
        C5: '',
        C6: '',
        C7: '',
        C8: '',
        C9: '',
        D1: 'ship',
        D10: '',
        D2: 'ship',
        D3: '',
        D4: '',
        D5: '',
        D6: '',
        D7: '',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: '',
        E2: '',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: '',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: '',
        J10: '',
        J2: '',
        J3: '',
        J4: '',
        J5: '',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
    ]);
  });
  test('Places ships vertically and horizontally', () => {
    global.prompt = jest.fn();
    global.prompt
      .mockReturnValueOnce('J1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('A7')
      .mockReturnValueOnce('horizontal')
      .mockReturnValueOnce('C1')
      .mockReturnValueOnce('vertical')
      .mockReturnValueOnce('D10')
      .mockReturnValueOnce('horizontal')
      .mockReturnValueOnce('E1')
      .mockReturnValueOnce('vertical');
    document.body.innerHTML = '<div id=content>' + '</div>';
    const game2 = gameFactory();
    expect(game2.boards).toEqual([
      {
        A1: '',
        A10: '',
        A2: '',
        A3: '',
        A4: '',
        A5: '',
        A6: '',
        A7: 'ship',
        A8: '',
        A9: '',
        B1: '',
        B10: '',
        B2: '',
        B3: '',
        B4: '',
        B5: '',
        B6: '',
        B7: 'ship',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: '',
        C5: '',
        C6: '',
        C7: 'ship',
        C8: '',
        C9: '',
        D1: '',
        D10: 'ship',
        D2: '',
        D3: '',
        D4: '',
        D5: '',
        D6: '',
        D7: 'ship',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: 'ship',
        E2: 'ship',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: 'ship',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: 'ship',
        J10: '',
        J2: 'ship',
        J3: 'ship',
        J4: 'ship',
        J5: 'ship',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
      {
        A1: 'ship',
        A10: '',
        A2: 'ship',
        A3: 'ship',
        A4: 'ship',
        A5: 'ship',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        B1: 'ship',
        B10: '',
        B2: 'ship',
        B3: 'ship',
        B4: 'ship',
        B5: 'ship',
        B6: '',
        B7: '',
        B8: '',
        B9: '',
        C1: 'ship',
        C10: '',
        C2: 'ship',
        C3: 'ship',
        C4: 'ship',
        C5: '',
        C6: '',
        C7: '',
        C8: '',
        C9: '',
        D1: 'ship',
        D10: '',
        D2: 'ship',
        D3: '',
        D4: '',
        D5: '',
        D6: '',
        D7: '',
        D8: '',
        D9: '',
        E1: 'ship',
        E10: '',
        E2: '',
        E3: '',
        E4: '',
        E5: '',
        E6: '',
        E7: '',
        E8: '',
        E9: '',
        F1: '',
        F10: '',
        F2: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        F7: '',
        F8: '',
        F9: '',
        G1: '',
        G10: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
        H1: '',
        H10: '',
        H2: '',
        H3: '',
        H4: '',
        H5: '',
        H6: '',
        H7: '',
        H8: '',
        H9: '',
        I1: '',
        I10: '',
        I2: '',
        I3: '',
        I4: '',
        I5: '',
        I6: '',
        I7: '',
        I8: '',
        I9: '',
        J1: '',
        J10: '',
        J2: '',
        J3: '',
        J4: '',
        J5: '',
        J6: '',
        J7: '',
        J8: '',
        J9: '',
      },
    ]);
  });
  */
  //account for mistakes in placing ships and redo that section
  //show board in-between each deployment
  //show alert when deployment fails
});