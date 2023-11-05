import { useMemo } from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';
import Ring from '../Ring';
import { PlanetData } from '../../../types';

type ExtendedPlanetData = PlanetData & { angle: number };

const Planet: React.FC<ExtendedPlanetData> = ({
  texturePath,
  position,
  radius,
  wobble,
  angle, // This is the new prop
}) => {

  const texture = useLoader(TextureLoader, texturePath);
  const sphereArgs = useMemo(() => {
    return [radius, 32, 32] as [number, number, number];
  }, [radius]);

  const orbitRadius = position.x;
  const x = Math.cos(angle) * orbitRadius;
  const z = Math.sin(angle) * orbitRadius;

  return (
    <>
      <mesh position={[x, 0, z]}>
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
