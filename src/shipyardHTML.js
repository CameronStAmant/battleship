import carrierVertical from './images/carrierVertical.png';
import battleshipVertical from './images/battleshipVertical.png';
import submarineVertical from './images/submarineVertical.png';
import cruiserVertical from './images/cruiserVertical.png';
import destroyerVertical from './images/destroyerVertical.png';

const shipyardFactory = () => {
  const carrier = document.createElement('img');
  carrier.src = carrierVertical;
  carrier.id = 'carrier';
  carrier.className = 'rotateMe horizontal';
  carrier.setAttribute('draggable', 'true');

  const battleship = document.createElement('img');
  battleship.src = battleshipVertical;
  battleship.id = 'battleship';
  battleship.className = 'rotateMe horizontal';
  battleship.setAttribute('draggable', 'true');

  const cruiser = document.createElement('img');
  cruiser.src = submarineVertical;
  cruiser.id = 'cruiser';
  cruiser.className = 'rotateMe horizontal';
  cruiser.setAttribute('draggable', 'true');

  const submarine = document.createElement('img');
  submarine.src = cruiserVertical;
  submarine.id = 'submarine';
  submarine.className = 'rotateMe horizontal';
  submarine.setAttribute('draggable', 'true');

  const destroyer = document.createElement('img');
  destroyer.src = destroyerVertical;
  destroyer.id = 'destroyer';
  destroyer.className = 'rotateMe horizontal';
  destroyer.setAttribute('draggable', 'true');

  return { carrier, battleship, cruiser, submarine, destroyer };
};

export default shipyardFactory;
