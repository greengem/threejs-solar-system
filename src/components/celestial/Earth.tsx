import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';

interface EarthProps {
  position: Vector3 | [number, number, number];
}

const Earth: React.FC<EarthProps> = ({ position }) => {
  const earthTexture = useLoader(TextureLoader, '/images/bodies/earth.jpg');

  return (
    <mesh position={position}>
      <Sphere args={[0.05, 32, 32]}>
        <MeshWobbleMaterial
          map={earthTexture}
          factor={0.1}
          speed={0.5}
        />
      </Sphere>
    </mesh>
  );
};

export default Earth;
