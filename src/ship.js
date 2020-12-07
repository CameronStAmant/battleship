const shipFactory = (type) => {
  let size;
  switch (type) {
    case 'carrier':
      size = 5;
      break;
    case 'battleship':
      size = 4;
      break;
    case 'cruiser':
      size = 3;
      break;
    case 'submarine':
      size = 3;
      break;
    case 'destroyer':
      size = 2;
      break;
  }

  const shipSize = new Array(size);
  const name = type;

  shipSize.fill('');

  const hit = (position) => {
    shipSize[position] = `${shipSize[position]}hit`;
    if (shipSize.every((e) => e.includes('hit'))) {
      return isSunk();
    }
    return shipSize;
  };

  const isSunk = () => {
    for (let i = 0; i < shipSize.length; i++) {
      shipSize[i] += `-sunk`;
    }
    return 'sunk';
  };

  return { hit, shipSize, name };
};

module.exports = shipFactory;
