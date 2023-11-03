import './App.css';
import { useEffect } from 'react';

import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader, EquirectangularReflectionMapping } from 'three';
import { OrbitControls, Torus } from '@react-three/drei';

import Sun from './components/celestial/Sun';

import Mercury from './components/celestial/Mercury';
import Earth from './components/celestial/Earth';

type SceneBackgroundProps = {
  texturePath: string;
};

const SceneBackground: React.FC<SceneBackgroundProps> = ({ texturePath }) => {
  const { scene, camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
  }, []);
  
  const texture = useLoader(TextureLoader, texturePath);

  useEffect(() => {
    const prevBackground = scene.background;
    texture.mapping = EquirectangularReflectionMapping;
    scene.background = texture;

    return () => {
      scene.background = prevBackground;
    };
  }, [texture, scene]);

  return null;
};

function App() {
  const texturePath = '/images/background/stars_8k.jpg';

  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Canvas>
          {/* Allow panning and zooming with mouse */}
          <OrbitControls enableZoom={true} rotateSpeed={0.5} zoomSpeed={0.5} />

          {/* Allow panning and zooming with mouse */}
          <SceneBackground texturePath={texturePath} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight intensity={1} position={[2, 2, 2]} target-position={[0, 0, 0]} />
          <pointLight position={[0, 0, 0]} intensity={1.5} decay={2} distance={10} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          {/* Planets */}
          <Sun position={[0, 0, 0]} radius={1} />

          <Mercury position={[1.2, 0, 0]} radius={0.0088} />
          <Torus args={[1.2, 0.0005, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial color="white" />
          </Torus>

          <Earth position={[2.5, 0, 0]} radius={0.0092} />
          <Torus args={[2.5, 0.0005, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial color="white" />
          </Torus>

      </Canvas>
    </div>
  );
}

export default App;
