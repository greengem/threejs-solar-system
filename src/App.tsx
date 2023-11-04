import { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls } from '@react-three/drei';

import SceneBackground from './components/SceneBackground';
import Sun from './components/celestial/Sun';
import Planet from './components/celestial/Planets';
import planetsData from './Data/planetsData';
import PlanetMenu from './components/PlanetMenu';

function App() {
  const texturePath = '/images/background/stars_8k.jpg';
  const orbitControlsRef = useRef<any>(null);
  const [selectedPlanetPosition, setSelectedPlanetPosition] = useState<Vector3 | null>(null);

  useEffect(() => {
    if (selectedPlanetPosition && orbitControlsRef.current) {
      const controls = orbitControlsRef.current;
      controls.target.set(
        selectedPlanetPosition.x,
        selectedPlanetPosition.y,
        selectedPlanetPosition.z
      );
      
      const camera = controls.object;
      const distance = 0.4;
      const direction = new Vector3().subVectors(camera.position, controls.target).normalize().multiplyScalar(distance);
      const newPosition = new Vector3().subVectors(controls.target, direction);
      camera.position.set(newPosition.x, newPosition.y, newPosition.z);
      controls.update();
    }
  }, [selectedPlanetPosition]);
  
  

  const handlePlanetSelect = (planetName: string) => {
    console.log('handlePlanetSelect called with:', planetName);
    const selectedPlanet = planetsData.find((planet) => planet.name === planetName);
    
    if (selectedPlanet) {
      setSelectedPlanetPosition(new Vector3(...selectedPlanet.position));
      console.log('Selected planet position:', selectedPlanet.position);
    } else {
      console.error('Selected planet not found in the data.');
    }
  };
  
  
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Canvas>
          {/* Allow panning and zooming with mouse */}
          <OrbitControls
            ref={orbitControlsRef as any}
            enableZoom={true}
            rotateSpeed={0.7}
            zoomSpeed={0.7}
          />

          {/* Background Image of solar system */}
          <SceneBackground texturePath={texturePath} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight intensity={1} position={[2, 2, 2]} target-position={[0, 0, 0]} />
          <pointLight position={[0, 0, 0]} intensity={1.5} decay={2} distance={10} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Planets */}
          <Sun position={[0, 0, 0]} radius={1} />

          {planetsData.map((planet) => (
            <Planet
              key={planet.name}
              texturePath={planet.texturePath}
              position={new Vector3(...planet.position)}
              radius={planet.radius}
              wobble={planet.wobble}
            />
          ))}
      </Canvas>
      <PlanetMenu planets={planetsData} onSelect={handlePlanetSelect} />
    </div>
  );
}

export default App;
