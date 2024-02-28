// SolarSystem.tsx
import { useState } from 'react';
import { PlanetData } from '../../types';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
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
import IntroText from './ui/IntroText';

function SolarSystem() {
  const [planetOrbitProgress, setPlanetOrbitProgress] = useState<{ [key: string]: number }>(
    planetsData.reduce<{ [key: string]: number }>((acc, planet: PlanetData) => {
      acc[planet.name] = 0;
      return acc;
    }, {})
  );

  return (
    <>
      <Canvas camera={{ position: [-100, 0, 100] }}>
        <CameraController />
        <SceneBackground texturePath="/images/background/stars_8k.webp" />
        <SceneLighting />
        <Sun position={[0, 0, 0]} radius={1} />
        {planetsData.map((planet) => (
          <Planet
            key={planet.id}
            id={planet.id}
            name={planet.name}
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
            displayStats={planet.displayStats}
          />
        ))}
      <PlanetsUpdater setPlanetOrbitProgress={setPlanetOrbitProgress} planets={planetsData} />
      </Canvas>
      <PlanetMenu planets={planetsData} />
      <SpeedControl />
      <AnimatePresence>
        <PlanetDetail />
      </AnimatePresence>
      <ControlMenu />
      <IntroText />
    </>
  );
}

export default SolarSystem;
