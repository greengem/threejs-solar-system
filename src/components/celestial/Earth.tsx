import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';
import Ring from '../../components/Ring';

interface EarthProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Earth: React.FC<EarthProps> = ({ position, radius }) => {
  const earthTexture = useLoader(TextureLoader, '/images/bodies/earth_8k.jpg');
  const orbitRadius = Array.isArray(position) ? position[0] : position.x;
  return (
    <>
      <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          <MeshWobbleMaterial
            map={earthTexture}
            factor={0.1}
            speed={0.5}
          />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Earth;
