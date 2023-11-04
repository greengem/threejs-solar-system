import { useState } from 'react';
import { Canvas } from '@react-three/fiber';

import CameraController from './components/CameraController';
import SceneBackground from './components/SceneBackground';
import Sun from './components/celestial/Sun';
import Planet from './components/celestial/Planets';
import planetsData from './Data/planetsData';
import PlanetMenu from './components/PlanetMenu';
import { PlanetData } from '../types';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  const handlePlanetSelect = (planetName: string) => {
    const selected = planetsData.find((planet) => planet.name === planetName);
    if (selected) {
      setSelectedPlanet(selected);
    } else {
      setSelectedPlanet(null);
    }
  };

  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Canvas>
        <CameraController selectedPlanet={selectedPlanet} />
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
        />
        
        ))}
      </Canvas>
      <PlanetMenu planets={planetsData} onSelect={handlePlanetSelect} />
    </div>
  );
}

export default App;
