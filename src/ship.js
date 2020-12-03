const shipFactory = (size) => {
  const shipSize = new Array(size);
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

  return { hit };
};

module.exports = shipFactory;
