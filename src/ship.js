const shipFactory = (size, type = null) => {
  const shipSize = new Array(size);
  let name;
  if (size === 4) {
    name = 'battleship';
  }
  /** based on ship name */
  if (type === 'battleship') {
  }
  //   shipSize.fill('battleship');
  /** */
  // } else {
  shipSize.fill('');
  // }

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
