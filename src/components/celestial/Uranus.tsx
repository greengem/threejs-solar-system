import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Ring from '../../components/Ring';

interface UranusProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Uranus: React.FC<UranusProps> = ({ position, radius }) => {
  const uranusTexture = useLoader(TextureLoader, '/images/bodies/uranus_2k.jpg');
  const orbitRadius = Array.isArray(position) ? position[0] : position.x;

  return (
    <>
      <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          <meshStandardMaterial map={uranusTexture} />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Uranus;