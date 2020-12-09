const playerFactory = () => {
  const attackEnemy = (coordinate, enemyBoard) => {
    return enemyBoard.receiveAttack(coordinate);
  };

  return { attackEnemy };
};

module.exports = playerFactory;
