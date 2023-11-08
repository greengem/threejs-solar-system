import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export const useCameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-200, 0, 200);
    camera.lookAt(0, 0, 0);
  }, [camera]);
};
