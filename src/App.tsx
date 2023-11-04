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
  
  const handlePlanetSelect = () => {
    console.log('handlePlanetSelect called');
  };
  
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Canvas>
          {/* Allow panning and zooming with mouse */}
          <OrbitControls
            enableZoom={true}
            rotateSpeed={0.5}
            zoomSpeed={0.5}
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
