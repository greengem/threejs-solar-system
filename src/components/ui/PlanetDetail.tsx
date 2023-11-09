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
          <h4 className='tracking-tight text-2xl mb-5 ml-1'>{displayedPlanet?.displayStats.classification}</h4>
          <div>
            <ul className='text-sm w-64 ml-1'>
              <li>
                <p>
                  <span className='text-secondary'>Orbital Periood: </span>
                  <span>{displayedPlanet?.displayStats.orbitalPeriod}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Mean Distance from Sun: </span>
                  <span>{displayedPlanet?.displayStats.meanDistanceFromSun}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Radius: </span>
                  <span>{displayedPlanet?.displayStats.accurateRadius}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Mass: </span>
                  <span>{displayedPlanet?.displayStats.mass}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Surface Gravity: </span>
                  <span>{displayedPlanet?.displayStats.surfaceGravity}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Rotation Period: </span>
                  <span>{displayedPlanet?.displayStats.rotationPeriod}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Axial Tilt: </span>
                  <span>{displayedPlanet?.displayStats.axialTilt}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Number of Moons: </span>
                  <span>{displayedPlanet?.displayStats.numberOfMoons}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Atmospheric Composition: </span>
                  <span>{displayedPlanet?.displayStats.atmosphericComposition}</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-secondary'>Surface Tempoerature: </span>
                  <span>{displayedPlanet?.displayStats.surfaceTemp}</span>
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanetDetail;
