import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Ring from '../../components/Ring';

interface SaturnProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Saturn: React.FC<SaturnProps> = ({ position, radius }) => {
  const saturnTexture = useLoader(TextureLoader, '/images/bodies/saturn_2k.jpg');
  const orbitRadius = Array.isArray(position) ? position[0] : position.x;

  return (
    <>
      <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          <meshStandardMaterial map={saturnTexture} />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Saturn;