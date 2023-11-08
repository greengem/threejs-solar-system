import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';
import { useCameraContext } from '../contexts/CameraContext';

export const useIntroAnimation = () => {
  const { camera } = useThree();
  const { setCameraState } = useCameraContext();
  const introAnimationCompleted = useRef(false);

  useFrame(() => {
    if (!introAnimationCompleted.current) {
      const targetPosition = new Vector3(7, 6, 7);
      camera.position.lerp(targetPosition, 0.03);
      if (camera.position.distanceTo(targetPosition) < 0.01) {
        introAnimationCompleted.current = true;
        camera.position.copy(targetPosition);
        setCameraState('FREE');
      }
    }
  });
};
