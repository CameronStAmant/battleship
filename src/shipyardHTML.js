const shipyardFactory = () => {
  const carrier = document.createElement('img');
  carrier.src = 'images/carrierVertical.jpeg';
  carrier.id = 'carrier';
  carrier.className = 'rotateMe horizontal';
  carrier.setAttribute('draggable', 'true');

  const battleship = document.createElement('img');
  battleship.src = 'images/battleshipVertical.jpeg';
  battleship.id = 'battleship';
  battleship.className = 'rotateMe horizontal';
  battleship.setAttribute('draggable', 'true');

  const cruiser = document.createElement('img');
  cruiser.src = 'images/cruiserVertical.jpeg';
  cruiser.id = 'cruiser';
  cruiser.className = 'rotateMe horizontal';
  cruiser.setAttribute('draggable', 'true');

  const submarine = document.createElement('img');
  submarine.src = 'images/submarineVertical.jpeg';
  submarine.id = 'submarine';
  submarine.className = 'rotateMe horizontal';
  submarine.setAttribute('draggable', 'true');

  const destroyer = document.createElement('img');
  destroyer.src = 'images/destroyerVertical.jpeg';
  destroyer.id = 'destroyer';
  destroyer.className = 'rotateMe horizontal';
  destroyer.setAttribute('draggable', 'true');

  return { carrier, battleship, cruiser, submarine, destroyer };
};

module.exports = shipyardFactory;
