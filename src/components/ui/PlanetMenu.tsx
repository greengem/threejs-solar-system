// PlanetMenu.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSpeedControl } from '../../contexts/SpeedControlContext';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { useCameraContext } from '../../contexts/CameraContext';
import { PlanetData } from '../../../types';
import { Button } from '@nextui-org/react';

interface PlanetMenuProps {
  planets: PlanetData[];
}

const PlanetMenu: React.FC<PlanetMenuProps> = ({ planets }) => {
  const [selectedPlanet, setSelectedPlanet] = useSelectedPlanet();
  const { overrideSpeedFactor } = useSpeedControl();
  const { cameraState, setCameraState } = useCameraContext();
  const controls = useAnimation();

  useEffect(() => {
    if (cameraState === 'FREE') {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [cameraState, controls]);

  const handleSelect = (planetName: string) => {
    const selected = planets.find((planet) => planet.name === planetName);
    setSelectedPlanet(selected ?? null);
    overrideSpeedFactor();
    setCameraState('ZOOMING_IN');
  };

  const menuVariants = {
    hidden: { y: '170%', opacity: 1 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };


  return (
    <motion.div 
      className="fixed bottom-5 left-5 right-5"
      variants={menuVariants}
      initial="hidden"
      animate={controls}
    >
      <div className='flex flex-wrap gap-2 justify-center'>
        {planets.map((planet) => (
          <Button 
            key={planet.id} 
            variant='flat' 
            color='secondary' 
            size='sm' 
            onClick={() => handleSelect(planet.name)}
            isDisabled={selectedPlanet?.id === planet.id}
          >
            {planet.name}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default PlanetMenu;