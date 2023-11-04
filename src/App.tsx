import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import SceneBackground from './components/SceneBackground';
import Sun from './components/celestial/Sun';

import Mercury from './components/celestial/Mercury';
import Venus from './components/celestial/Venus';
import Earth from './components/celestial/Earth';
import Mars from './components/celestial/Mars';
import Jupiter from './components/celestial/Jupiter';
import Saturn from './components/celestial/Saturn';
import Uranus from './components/celestial/Uranus';
import Neptune from './components/celestial/Neptune';

function App() {
  const texturePath = '/images/background/stars_8k.jpg';
  
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Canvas>
          {/* Allow panning and zooming with mouse */}
          <OrbitControls enableZoom={true} rotateSpeed={0.5} zoomSpeed={0.5} />

          {/* Background Image of solar system */}
          <SceneBackground texturePath={texturePath} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight intensity={1} position={[2, 2, 2]} target-position={[0, 0, 0]} />
          <pointLight position={[0, 0, 0]} intensity={1.5} decay={2} distance={10} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Sun position={[0, 0, 0]} radius={1} />
          
          {/* Planets */}
          <Mercury position={[1.2, 0, 0]} radius={0.15} />
          <Venus position={[1.6, 0, 0]} radius={0.15} />
          <Earth position={[2, 0, 0]} radius={0.15} />
          <Mars position={[2.4, 0, 0]} radius={0.15} />
          <Jupiter position={[2.8, 0, 0]} radius={0.15} />
          <Saturn position={[3.2, 0, 0]} radius={0.15} />
          <Uranus position={[3.6, 0, 0]} radius={0.15} />
          <Neptune position={[4, 0, 0]} radius={0.15} />
      </Canvas>
    </div>
  );
}

export default App;
