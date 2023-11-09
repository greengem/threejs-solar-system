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
          <h1 className='tracking-tight font-semibold text-7xl lg:text-8xl xl:text-8xl opacity-90'>
            {displayedPlanet ? displayedPlanet.name : ''}
          </h1>
          <h4 className='tracking-tight text-2xl mb-5 ml-1 text-secondary font-semibold'>{displayedPlanet?.displayStats.classification}</h4>
          <ul className='text-sm w-64 ml-2 hidden lg:block text-gray-200'>
            <li>
              <p>
                <span className='font-semibold'>Orbital Periood: </span>
                <span>{displayedPlanet?.displayStats.orbitalPeriod} Earth days</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Mean Distance from Sun: </span>
                <span>{displayedPlanet?.displayStats.meanDistanceFromSun} AU</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Radius: </span>
                <span>{displayedPlanet?.displayStats.accurateRadius} km</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Mass: </span>
                <span>{displayedPlanet?.displayStats.mass} Earth masses</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Surface Gravity: </span>
                <span>{displayedPlanet?.displayStats.surfaceGravity} g</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Rotation Period: </span>
                <span>{displayedPlanet?.displayStats.rotationPeriod} Earth days</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Axial Tilt: </span>
                <span>{displayedPlanet?.displayStats.axialTilt}°</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Number of Moons: </span>
                <span>{displayedPlanet?.displayStats.numberOfMoons}</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Atmospheric Composition: </span>
                <span>{displayedPlanet?.displayStats.atmosphericComposition}</span>
              </p>
            </li>
            <li>
              <p>
                <span className='font-semibold'>Surface Tempoerature: </span>
                <span>{displayedPlanet?.displayStats.surfaceTemp}</span>
              </p>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanetDetail;
