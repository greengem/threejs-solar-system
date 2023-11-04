import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Ring from '../../components/Ring';

interface JupiterProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Jupiter: React.FC<JupiterProps> = ({ position, radius }) => {
  const jupiterTexture = useLoader(TextureLoader, '/images/bodies/jupiter_2k.jpg');
  const orbitRadius = Array.isArray(position) ? position[0] : position.x;

  return (
    <>
      <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          <meshStandardMaterial map={jupiterTexture} />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Jupiter;