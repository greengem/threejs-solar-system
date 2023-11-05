import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext';

const CameraController: React.FC = () => {
  const orbitControlsRef = useRef<DreiOrbitControls>(null);
  const { camera } = useThree();
  const [selectedPlanet] = useSelectedPlanet();

  useFrame(() => {
    const controls = orbitControlsRef.current;

    if (selectedPlanet) {
      const planetPosition = new Vector3(...selectedPlanet.position);

      // Lock the controls when tracking a planet
      if (controls) controls.enabled = false;

      // Smoothly move the camera to orbit around the selected planet
      camera.position.lerp(planetPosition.clone().add(new Vector3(1, 0, 0).multiplyScalar(selectedPlanet.radius * 10)), 0.1);
      camera.lookAt(planetPosition);

    } else {
      // Re-enable controls when no planet is selected
      if (controls) controls.enabled = true;
    }

    camera.updateProjectionMatrix();
  });

  return (
    <DreiOrbitControls
      ref={orbitControlsRef}
      enableZoom={true}
      rotateSpeed={0.7}
      zoomSpeed={0.7}
    />
  );
};

export default CameraController;
