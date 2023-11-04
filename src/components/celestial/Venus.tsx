import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Ring from '../../components/Ring';

interface VenusProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Venus: React.FC<VenusProps> = ({ position, radius }) => {
  const venusTexture = useLoader(TextureLoader, '/images/bodies/venus_surface_2k.jpg');
  const orbitRadius = Array.isArray(position) ? position[0] : position.x;

  return (
    <>
      <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          <meshStandardMaterial map={venusTexture} />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Venus;
