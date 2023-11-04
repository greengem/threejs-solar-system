import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';
import Ring from '../Ring';

interface PlanetProps {
  texturePath: string;
  position: Vector3;
  radius: number;
  wobble?: boolean;
}

const Planet: React.FC<PlanetProps> = ({ texturePath, position, radius, wobble }) => {
  const texture = useLoader(TextureLoader, texturePath);
  const orbitRadius = position.x;

  return (
    <>
      <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          {wobble ? (
            <MeshWobbleMaterial map={texture} factor={0.1} speed={0.5} />
          ) : (
            <meshStandardMaterial map={texture} />
          )}
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Planet;
