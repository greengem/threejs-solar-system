// PlanetMenu.tsx
import React from 'react';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext'; // Update the path as needed
import { PlanetData } from '../../types';

interface PlanetMenuProps {
  planets: PlanetData[];
}

const PlanetMenu: React.FC<PlanetMenuProps> = ({ planets }) => {
  const [, setSelectedPlanet] = useSelectedPlanet(); // We use only the setter function from the context

  const handleSelect = (planetName: string) => {
    // Find the planet data based on the planet name
    const selected = planets.find((planet) => planet.name === planetName);
    setSelectedPlanet(selected ?? null); // Set the selected planet using context
  };

  return (
    <div className="planet-menu-overlay bg-gray-900 absolute bottom-5 left-5 right-5 p-2 rounded-lg">
      <ul className="planet-list flex gap-2">
        {planets.map((planet) => (
          <li key={planet.name} onClick={() => handleSelect(planet.name)} className='bg-purple-800 px-4 py-1 rounded-lg text-white text-sm'>
            {planet.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetMenu;
