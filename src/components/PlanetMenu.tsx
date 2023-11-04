import { PlanetData } from '../../types';

interface PlanetMenuProps {
  planets: PlanetData[];
  onSelect: (planetName: string) => void;
}

const PlanetMenu: React.FC<PlanetMenuProps> = ({ planets, onSelect }) => {
  return (
    <div className="planet-menu-overlay bg-gray-900 absolute bottom-5 left-5 right-5 p-2 rounded-lg">
      <ul className="planet-list flex gap-2">
        {planets.map((planet) => (
          <li key={planet.name} onClick={() => onSelect(planet.name)} className='bg-purple-800 px-4 py-1 rounded-lg text-white text-sm'>
            {planet.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetMenu;
