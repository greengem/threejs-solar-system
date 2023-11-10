import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import { OrbitControls } from 'three-stdlib';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { usePlanetPositions } from '../../contexts/PlanetPositionsContext';
import { useCameraContext } from '../../contexts/CameraContext';
import { useCameraSetup } from '../../hooks/useCameraSetup';

const CameraController: React.FC = () => {
  useCameraSetup();
  
  // Refs
  const orbitControlsRef = useRef<OrbitControls>(null);
  const invisibleTargetRef = useRef(new Vector3()).current;
  
  // State and constants
  const { camera } = useThree();
  const [selectedPlanet] = useSelectedPlanet();
  const { planetPositions } = usePlanetPositions();
  const { cameraState, setCameraState } = useCameraContext();
  const homePosition = useRef(new Vector3(11, 1, 1)).current;
  const lerpFactor = 0.015;
  const cameraPositionEpsilon = 0.1;
  const detailViewMinDistance = useRef(2).current;
  const detailViewMaxDistance = useRef(5).current;
  const introAnimationCompleted = useRef(false);

  // Initialize orbit controls target
  useEffect(() => {
    const controls = orbitControlsRef.current;
    if (controls) {
      controls.target.copy(invisibleTargetRef);
      controls.update();
    }
  }, []);

  // Animation and camera control logic
  useFrame(() => {
    const controls = orbitControlsRef.current;
    if (controls) {
      switch (cameraState) {
        // Static Cases:
        case 'FREE':
          controls.enabled = true;
          controls.maxDistance = Infinity;
          controls.update();
          break;
        
        case 'DETAIL_VIEW':
          if (selectedPlanet) {
            controls.enabled = true;
            const currentPlanetPosition = planetPositions[selectedPlanet.name];
            if (currentPlanetPosition) {
              controls.target.set(...currentPlanetPosition);
              controls.minDistance = selectedPlanet.radius * detailViewMinDistance;
              controls.maxDistance = selectedPlanet.radius * detailViewMaxDistance;
              controls.update();
            }
          }
          break;

        // Motion Cases:
        case 'INTRO_ANIMATION':
          if (!introAnimationCompleted.current) {
            controls.enabled = false;
            camera.position.lerp(homePosition, 0.015);
            camera.lookAt(invisibleTargetRef);
            if (camera.position.distanceTo(homePosition) < 0.01) {
              introAnimationCompleted.current = true;
              camera.position.copy(homePosition);
              setCameraState('FREE');
            }
          }
          break;

        case 'MOVING_TO_HOME':
          controls.enabled = false;
          camera.position.lerp(homePosition, lerpFactor);
          invisibleTargetRef.lerp(new Vector3(0, 0, 0), lerpFactor);
          camera.lookAt(invisibleTargetRef);
          
          if (
            camera.position.distanceTo(homePosition) < cameraPositionEpsilon &&
            invisibleTargetRef.distanceTo(new Vector3(0, 0, 0)) < cameraPositionEpsilon
          ) {
            camera.position.copy(homePosition);
            invisibleTargetRef.set(0, 0, 0);
            controls.target.copy(invisibleTargetRef);
            controls.maxDistance = Infinity;
            controls.update();
            setCameraState('FREE');
          }
          break;

        case 'ZOOMING_IN':
          if (selectedPlanet) {
            const currentPlanetPosition = planetPositions[selectedPlanet.name];
            if (currentPlanetPosition) {
              controls.enabled = false;
              const planetPosition = new Vector3(...currentPlanetPosition);
              const targetCameraPosition = planetPosition.clone().add(new Vector3(1, 0, 0).multiplyScalar(selectedPlanet.radius * 3));
              camera.position.lerp(targetCameraPosition, lerpFactor);
              const fastLerpFactor = 0.04;
              invisibleTargetRef.lerp(planetPosition, fastLerpFactor);
              camera.lookAt(invisibleTargetRef);
              const reachedTargetPosition = camera.position.distanceTo(targetCameraPosition) < selectedPlanet.radius * cameraPositionEpsilon;
              const reachedTargetLookAt = invisibleTargetRef.distanceTo(planetPosition) < selectedPlanet.radius * cameraPositionEpsilon;
            
              if (reachedTargetPosition && reachedTargetLookAt) {
                controls.target.copy(invisibleTargetRef);
                controls.update();
                setCameraState('DETAIL_VIEW');
              }
            }
          }
          break;
      }
    }
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
