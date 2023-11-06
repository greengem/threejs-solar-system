import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext';
import { usePlanetPositions } from '../contexts/PlanetPositionsContext';

const CameraController: React.FC = () => {
  const orbitControlsRef = useRef<any>(null); //FIX ANY TYPE
  const { camera } = useThree();
  const [selectedPlanet] = useSelectedPlanet();
  const { planetPositions } = usePlanetPositions();

  useFrame(() => {
    const controls = orbitControlsRef.current;

    if (selectedPlanet) {
      const currentPlanetPosition = planetPositions[selectedPlanet.name];

      if (currentPlanetPosition) {
        const planetPosition = new Vector3(...currentPlanetPosition);

        if (controls) controls.enabled = false;

        camera.position.lerp(planetPosition.clone().add(new Vector3(1, 0, 0).multiplyScalar(selectedPlanet.radius * 3)), 0.1);
        camera.lookAt(planetPosition);
      }

    } else {
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
