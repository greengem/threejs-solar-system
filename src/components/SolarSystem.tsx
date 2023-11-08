// SolarSystem.tsx
import { useState, useEffect } from 'react';
import { PlanetData } from '../../types';
import { Canvas } from '@react-three/fiber';
import { useCameraContext } from '../contexts/CameraContext';
import planetsData from '../lib/planetsData';
import SceneBackground from './SceneBackground';
import Sun from './celestial/Sun';
import Planet from './celestial/Planets';
import CameraController from './motion/CameraController';
import PlanetsUpdater from './motion/PlanetsUpdater';
import PlanetMenu from './ui/PlanetMenu';
import SpeedControl from './ui/SpeedControl';
import PlanetDetail from './ui/PlanetDetail';
import IntroText from './ui/IntroText';
import ControlMenu from './ui/ControlMenu/ControlMenu';
import SceneLighting from './SceneLighting';

function SolarSystem() {
  const { cameraState } = useCameraContext();
  const [showIntroText, setShowIntroText] = useState(true);
  const [showDetails, setShowDetails] = useState(true);
  const [planetOrbitProgress, setPlanetOrbitProgress] = useState<{ [key: string]: number }>(
    planetsData.reduce<{ [key: string]: number }>((acc, planet: PlanetData) => {
      acc[planet.name] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    if (cameraState !== 'INTRO_ANIMATION') {
      setShowIntroText(false);
    }
  }, [cameraState]);

  useEffect(() => {
    setShowDetails(cameraState === 'DETAIL_VIEW');
  }, [cameraState]);
  

  return (
    <>
      <Canvas>
        <CameraController />
        <SceneBackground texturePath="/images/background/stars_8k.jpg" />
        <SceneLighting />
        <Sun position={[0, 0, 0]} radius={1} />
        {planetsData.map((planet) => (
          <Planet
            key={planet.name}
            name={planet.name}
            description={planet.description}
            texturePath={planet.texturePath}
            position={planet.position}
            radius={planet.radius}
            rotationSpeed={planet.rotationSpeed}
            tilt={planet.tilt}
            orbitSpeed={planet.orbitSpeed}
            moons={planet.moons}
            wobble={planet.wobble}
            rings={planet.rings}
            orbitProgress={planetOrbitProgress[planet.name]}
          />
        ))}
      <PlanetsUpdater setPlanetOrbitProgress={setPlanetOrbitProgress} planets={planetsData} />
      </Canvas>
      {showIntroText && <IntroText visible={showIntroText} />}
      <PlanetMenu planets={planetsData} />
      <SpeedControl />
      {showDetails && <PlanetDetail visible={showDetails} />}
      <ControlMenu />
      <p className='absolute top-20 right-5 text-red-500'>CAMERA STATE: {JSON.stringify(cameraState, null, 2)}</p>
    </>
  );
}

export default SolarSystem;
