// CameraController.tsx
import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/three';
import { PlanetData } from '../../types';

type CameraControllerProps = {
  selectedPlanet: PlanetData | null;
};

const CameraController: React.FC<CameraControllerProps> = ({ selectedPlanet }) => {


    // !!! TODO USE CORRECT TYPES FOR orbitControlsRef
    const orbitControlsRef = useRef<any>(null);


    const { camera } = useThree();
    const desiredDistance = 0.5;
  
    const { position, target } = useSpring({
      position: selectedPlanet
        ? new Vector3(...selectedPlanet.position).add(
            new Vector3(...selectedPlanet.position).sub(camera.position).normalize().multiplyScalar(-desiredDistance)
          )
        : camera.position.toArray(),
      target: selectedPlanet ? selectedPlanet.position.toArray() : [0, 0, 0],
      config: { mass: 1, tension: 170, friction: 26 },
    });
    
    useFrame(() => {
      if (orbitControlsRef.current) {
        const controls = orbitControlsRef.current;
        camera.position.lerp(new Vector3(...position.get()), 0.1);
        controls.target.lerp(new Vector3(...target.get()), 0.1);
        controls.update();
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
