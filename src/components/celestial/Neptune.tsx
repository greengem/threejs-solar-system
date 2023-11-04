import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Ring from '../../components/Ring';

interface NeptuneProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Neptune: React.FC<NeptuneProps> = ({ position, radius }) => {
  const neptuneTexture = useLoader(TextureLoader, '/images/bodies/neptune_2k.jpg');
  const orbitRadius = Array.isArray(position) ? position[0] : position.x;

  return (
    <>
    <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          <meshStandardMaterial map={neptuneTexture} />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Neptune;