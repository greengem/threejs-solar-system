import React, { useEffect, useRef } from 'react';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { TextureLoader, EquirectangularReflectionMapping, Vector3 } from 'three';
import { useCameraContext } from '../contexts/CameraContext'; // make sure to import your camera context

type SceneBackgroundProps = {
  texturePath: string;
};

const SceneBackground: React.FC<SceneBackgroundProps> = ({ texturePath }) => {
  const { scene, camera } = useThree();
  const { setCameraState } = useCameraContext();
  const introAnimationCompleted = useRef(false);

  useEffect(() => {
    // Set initial camera position for the intro animation
    camera.position.set(-150, 0, 150);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  const texture = useLoader(TextureLoader, texturePath);

  useEffect(() => {
    // Set the background texture
    const prevBackground = scene.background;
    texture.mapping = EquirectangularReflectionMapping;
    scene.background = texture;

    return () => {
      scene.background = prevBackground;
    };
  }, [texture, scene]);

  useFrame(() => {
    if (!introAnimationCompleted.current) {
      // Define the target position
      const targetPosition = new Vector3(7, 6, 7);
      // Update the camera position to move towards the target position
      camera.position.lerp(targetPosition, 0.01);
      // When the camera is close enough to the target, end the intro animation
      if (camera.position.distanceTo(targetPosition) < 0.05) {
        introAnimationCompleted.current = true;
        camera.position.copy(targetPosition); // Snap to the exact position
        setCameraState('FREE'); // Update the camera state
      }
    }
  });

  return null;
};

export default SceneBackground;
