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
import ControlMenu from './ui/ControlMenu/ControlMenu';
import SceneLighting from './SceneLighting';

function SolarSystem() {
  const { cameraState } = useCameraContext();
  const [showDetails, setShowDetails] = useState(true);
  const [planetOrbitProgress, setPlanetOrbitProgress] = useState<{ [key: string]: number }>(
    planetsData.reduce<{ [key: string]: number }>((acc, planet: PlanetData) => {
      acc[planet.name] = 0;
      return acc;
    }, {})
  );

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
      <PlanetMenu planets={planetsData} />
      <SpeedControl />
      {showDetails && <PlanetDetail visible={showDetails} />}
      <ControlMenu />
      <p className='absolute top-20 right-5 bg-gray-900 py-1 px-3 text-xs rounded-xl'>
        CAMERA STATE DEBUG: <span className='text-danger'>{JSON.stringify(cameraState, null, 2)}</span>
      </p>
    </>
  );
}

export default SolarSystem;
