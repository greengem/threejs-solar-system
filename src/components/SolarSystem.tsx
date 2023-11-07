// SolarSystem.tsx
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import CameraController from './CameraController';
import SceneBackground from './SceneBackground';
import Sun from './celestial/Sun';
import planetsData from '../lib/planetsData';
import Planet from './celestial/Planets';
import PlanetMenu from './PlanetMenu';
import PlanetsUpdater from './PlanetsUpdater';
import SpeedControl from './SpeedControl';
import PlanetDetail from './PlanetDetail';
import { PlanetData } from '../../types';
import { useCameraContext } from '../contexts/CameraContext';
import IntroText from './IntroText';
import CameraHomeButton from './CameraHomeButton';

function SolarSystem() {
  const { cameraState } = useCameraContext();
  const [showIntroText, setShowIntroText] = useState(true);
  const [planetOrbitProgress, setPlanetOrbitProgress] = useState<{ [key: string]: number }>(
    planetsData.reduce<{ [key: string]: number }>((acc, planet: PlanetData) => {
      acc[planet.name] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    if (cameraState === 'FREE') {
      setShowIntroText(false);
    }
  }, [cameraState]);

  return (
    <>
      <Canvas>
        <CameraController />
        <SceneBackground texturePath="/images/background/stars_8k.jpg" />
        <ambientLight intensity={0.2} />
        <directionalLight intensity={1} position={[2, 2, 2]} target-position={[0, 0, 0]} />
        <pointLight position={[0, 0, 0]} intensity={1.5} decay={2} distance={10} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
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
      <PlanetDetail />
      <CameraHomeButton />
      <div className='absolute top-5 left-5 text-white'><pre>Camera {JSON.stringify({ cameraState }, null, 2)}</pre></div>
    </>
  );
}

export default SolarSystem;
