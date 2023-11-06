// PlanetMenu.tsx
import React from 'react';
import { useSpeedControl } from '../contexts/SpeedControlContext';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext';
import { PlanetData } from '../../types';
import { Button } from '@nextui-org/react';

interface PlanetMenuProps {
  planets: PlanetData[];
}

const PlanetMenu: React.FC<PlanetMenuProps> = ({ planets }) => {
  const [, setSelectedPlanet] = useSelectedPlanet();
  const { setSpeedFactor } = useSpeedControl();

  const handleSelect = (planetName: string) => {
    const selected = planets.find((planet) => planet.name === planetName);
    setSelectedPlanet(selected ?? null);
    setSpeedFactor(0);
  };

  return (
    <div className="absolute bottom-5 left-5 p-2 rounded-lg">
      <div className='flex gap-2 flex-wrap'>
        {planets.map((planet) => (
          <Button 
            key={planet.name} 
            variant='ghost' 
            color='secondary' 
            size='sm' 
            onClick={() => handleSelect(planet.name)}
          >
            {planet.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PlanetMenu;
