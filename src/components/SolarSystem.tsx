// SolarSystem.tsx
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CameraController from './CameraController';
import SceneBackground from './SceneBackground';
import Sun from './celestial/Sun';
import planetsData from '../Data/planetsData';
import Planet from './celestial/Planets';
import PlanetMenu from './PlanetMenu';
import PlanetsUpdater from './PlanetsUpdater';

function SolarSystem() {
  
  const [planetAngles, setPlanetAngles] = useState<{ [key: string]: number }>(
    planetsData.reduce((acc, planet) => {
      acc[planet.name] = 0;
      return acc;
    }, {})
  );

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
            texturePath={planet.texturePath}
            position={planet.position}
            radius={planet.radius}
            rotationSpeed={planet.rotationSpeed}
            tilt={planet.tilt}
            orbitSpeed={planet.orbitSpeed}
            moons={planet.moons}
            wobble={planet.wobble}
            rings={planet.rings}
            angle={planetAngles[planet.name]}
          />
        ))}
        <PlanetsUpdater setPlanetAngles={setPlanetAngles} />
      </Canvas>
      <PlanetMenu planets={planetsData} />
    </>
  );
}

export default SolarSystem;
