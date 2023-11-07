import React, { useEffect, useRef } from 'react';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { TextureLoader, EquirectangularReflectionMapping, Vector3 } from 'three';
import { useCameraContext } from '../contexts/CameraContext';

type SceneBackgroundProps = {
  texturePath: string;
};

const SceneBackground: React.FC<SceneBackgroundProps> = ({ texturePath }) => {
  const { scene, camera } = useThree();
  const { setCameraState } = useCameraContext();
  const introAnimationCompleted = useRef(false);

  useEffect(() => {
    camera.position.set(-200, 0, 200);
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

  useFrame(() => {
    if (!introAnimationCompleted.current) {
      const targetPosition = new Vector3(7, 6, 7);
      camera.position.lerp(targetPosition, 0.01);
      if (camera.position.distanceTo(targetPosition) < 0.1) {
        introAnimationCompleted.current = true;
        camera.position.copy(targetPosition);
        setCameraState('FREE');
      }
    }
  });

  return null;
};

export default SceneBackground;
