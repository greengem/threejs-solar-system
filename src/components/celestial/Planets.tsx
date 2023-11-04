import { useMemo } from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';
import Ring from '../Ring';
import { PlanetData } from '../../../types';

const Planet: React.FC<PlanetData> = ({ texturePath, position, radius, wobble }) => {
  const texture = useLoader(TextureLoader, texturePath);
  const sphereArgs = useMemo(() => {
    return [radius, 32, 32] as [number, number, number];
  }, [radius]);
  const orbitRadius = position.x;

  return (
    <>
      <mesh position={position}>
        <Sphere args={sphereArgs}>
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
