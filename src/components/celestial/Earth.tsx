import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';

interface EarthProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Earth: React.FC<EarthProps> = ({ position, radius }) => {
  const earthTexture = useLoader(TextureLoader, '/images/bodies/earth_8k.jpg');

  return (
    <mesh position={position}>
      <Sphere args={[radius, 32, 32]}>
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
