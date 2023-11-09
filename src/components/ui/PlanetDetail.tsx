import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { useCameraContext } from '../../contexts/CameraContext';

const PlanetDetail: React.FC = () => {
  const [selectedPlanet] = useSelectedPlanet();
  const { cameraState } = useCameraContext();
  const [displayedPlanet, setDisplayedPlanet] = useState(selectedPlanet);

  useEffect(() => {
    if (cameraState === 'DETAIL_VIEW') {
      setDisplayedPlanet(selectedPlanet);
    }
  }, [cameraState, selectedPlanet]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const shouldDisplayDetails = cameraState === 'DETAIL_VIEW';

  return (
    <AnimatePresence>
      {shouldDisplayDetails && (
        <motion.div
          key={displayedPlanet ? displayedPlanet.name : 'empty'}
          className='absolute left-5 right-5 top-20 mt-4 w-[400px]'
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className='text-white mb-5 tracking-tight font-semibold text-7xl lg:text-8xl xl:text-8xl opacity-90'>
            {displayedPlanet ? displayedPlanet.name : ''}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanetDetail;
