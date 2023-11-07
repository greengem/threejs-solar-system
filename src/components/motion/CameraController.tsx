import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import {  Vector3 } from 'three';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { usePlanetPositions } from '../../contexts/PlanetPositionsContext';
import { useCameraContext } from '../../contexts/CameraContext';

const CameraController: React.FC = () => {
  const orbitControlsRef = useRef<any>(null); // FIX ANY TYPE 
  const { camera } = useThree();
  const [selectedPlanet] = useSelectedPlanet();
  const { planetPositions } = usePlanetPositions();
  const { cameraState, setCameraState } = useCameraContext();
  const homePosition = new Vector3(7, 6, 7);
  const lerpFactor = 0.05;

  useFrame(() => {
    const controls = orbitControlsRef.current;

    switch (cameraState) {
      case 'FREE':
        if (controls) controls.enabled = true;
        break;

        case 'ZOOMED_IN':
          if (selectedPlanet) {
            const currentPlanetPosition = planetPositions[selectedPlanet.name];
            if (currentPlanetPosition && controls) {
              controls.enabled = false;
              const planetPosition = new Vector3(...currentPlanetPosition);

              const targetCameraPosition = planetPosition.clone().add(new Vector3(1, 0.5, 0).multiplyScalar(selectedPlanet.radius * 3));
              camera.position.lerp(targetCameraPosition, lerpFactor);
              camera.lookAt(planetPosition);
            }
          }
          break;
        

      case 'MOVING_TO_HOME':
        if (controls) controls.enabled = false;
        camera.position.lerp(homePosition, lerpFactor);
        camera.lookAt(new Vector3(0, 0, 0));
        if (camera.position.distanceTo(homePosition) < 0.1) {
          camera.position.copy(homePosition);
          setCameraState('FREE');
        }
        break;
      
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
