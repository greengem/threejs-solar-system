import { useMemo, useEffect } from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';
import Ring from '../Ring';
import { PlanetData } from '../../../types';
import { usePlanetPositions } from '../../contexts/PlanetPositionsContext';

type ExtendedPlanetData = PlanetData & { orbitProgress: number };

const Planet: React.FC<ExtendedPlanetData> = ({
  name, 
  texturePath,
  position,
  radius,
  wobble,
  orbitProgress,
}) => {

  const texture = useLoader(TextureLoader, texturePath);
  
  const { setPlanetPosition } = usePlanetPositions();

  const sphereArgs = useMemo(() => [radius, 32, 32] as [number, number, number], [radius]);

  const orbitRadius = position.x;
  const x = Math.cos(orbitProgress) * orbitRadius;
  const z = Math.sin(orbitProgress) * orbitRadius;

  useEffect(() => {
    setPlanetPosition(name, [x, 0, z]);
  }, [x, z, name, setPlanetPosition]);

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
