import './App.css';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader, EquirectangularReflectionMapping } from 'three';
import { useEffect } from 'react';
import Sun from './components/celestial/Sun';

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
  const texturePath = '/images/background/stars.jpg';

  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Canvas>
        <SceneBackground texturePath={texturePath} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <Sun position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
