const playerFactory = () => {
  const attackEnemy = (coordinate, enemyBoard) => {
    if (coordinate === null) {
      let remainingCoordinates = [];
      for (const [key, value] of Object.entries(enemyBoard.board)) {
        if (value === 'ship' || value === '') {
          remainingCoordinates.push(key);
        }
      }
      const randomCoordinate =
        remainingCoordinates[
          Math.floor(Math.random() * remainingCoordinates.length)
        ];
      return enemyBoard.receiveAttack(randomCoordinate);
    }
    return enemyBoard.receiveAttack(coordinate);
  };

  return { attackEnemy };
};

module.exports = playerFactory;
