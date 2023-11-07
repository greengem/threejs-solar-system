// PlanetMenu.tsx
import React from 'react';
import { useSpeedControl } from '../../contexts/SpeedControlContext';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { useCameraContext } from '../../contexts/CameraContext';
import { PlanetData } from '../../../types';
import { Button } from '@nextui-org/react';

interface PlanetMenuProps {
  planets: PlanetData[];
}

const PlanetMenu: React.FC<PlanetMenuProps> = ({ planets }) => {
  const [, setSelectedPlanet] = useSelectedPlanet();
  const { overrideSpeedFactor } = useSpeedControl();
  const { cameraState, setCameraState } = useCameraContext();

  const handleSelect = (planetName: string) => {
    const selected = planets.find((planet) => planet.name === planetName);
    setSelectedPlanet(selected ?? null);
    overrideSpeedFactor();
    setCameraState('ZOOMED_IN');
  };

  const isDisabled = cameraState === 'INTRO_ANIMATION';

  return (
    <div className="absolute bottom-5 left-5 right-5">
      <div className='flex flex-wrap gap-2 justify-center'>
        {planets.map((planet) => (
          <Button 
            isDisabled={isDisabled}
            key={planet.name} 
            variant='flat' 
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
