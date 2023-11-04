import { useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { TextureLoader, EquirectangularReflectionMapping } from 'three';

type SceneBackgroundProps = {
  texturePath: string;
};

const SceneBackground: React.FC<SceneBackgroundProps> = ({ texturePath }) => {
  const { scene, camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
  }, [camera]);

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

export default SceneBackground;
