const shipFactory = (size, type = null) => {
  const shipSize = new Array(size);
  const name = type;

  shipSize.fill('');

  const hit = (position) => {
    shipSize[position] = 'hit';
    if (shipSize.every((e) => e === 'hit')) {
      return isSunk();
    }
    return shipSize;
  };

  const isSunk = () => {
    return 'sunk';
  };

  return { hit, shipSize, name };
};

module.exports = shipFactory;
