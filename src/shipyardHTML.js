const shipyardFactory = () => {
  const carrier = document.createElement('img');
  carrier.src = '/src/images/carrierVertical.jpeg';
  carrier.height = '250';
  carrier.id = 'carrier';
  carrier.className = 'rotateMe';
  carrier.setAttribute('draggable', 'true');

  const battleship = document.createElement('img');
  battleship.src = '/src/images/battleshipVertical.jpeg';
  battleship.height = '200';
  battleship.id = 'battleship';
  battleship.className = 'rotateMe';
  battleship.setAttribute('draggable', 'true');

  const cruiser = document.createElement('img');
  cruiser.src = '/src/images/cruiserVertical.jpeg';
  cruiser.height = '150';
  cruiser.id = 'cruiser';
  cruiser.className = 'rotateMe';
  cruiser.setAttribute('draggable', 'true');

  const submarine = document.createElement('img');
  submarine.src = '/src/images/submarineVertical.jpeg';
  submarine.height = '150';
  submarine.id = 'submarine';
  submarine.className = 'rotateMe';
  submarine.setAttribute('draggable', 'true');

  const destroyer = document.createElement('img');
  destroyer.src = '/src/images/destroyerVertical.jpeg';
  destroyer.height = '100';
  destroyer.id = 'destroyer';
  destroyer.className = 'rotateMe';
  destroyer.setAttribute('draggable', 'true');

  return { carrier, battleship, cruiser, submarine, destroyer };
};

module.exports = shipyardFactory;
