import { useMemo, useEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Ring from './GuideRing';
import { PlanetData } from '../../../types';
import { usePlanetPositions } from '../../contexts/PlanetPositionsContext';
import { Mesh } from 'three';

type ExtendedPlanetData = PlanetData & { orbitProgress: number };

const Planet: React.FC<ExtendedPlanetData> = ({
  name, 
  texturePath,
  position,
  radius,
  orbitProgress,
  tilt,
  rotationSpeed,
}) => {
  const { setPlanetPosition } = usePlanetPositions();
  const texture = useLoader(TextureLoader, texturePath);
  const sphereArgs = useMemo(() => [radius, 32, 32] as [number, number, number], [radius]);
  const orbitRadius = position.x;
  const x = Math.cos(orbitProgress) * orbitRadius;
  const z = Math.sin(orbitProgress) * orbitRadius;
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed / 100;
      ref.current.rotation.x = tilt;
    }
  });

  useEffect(() => {
    setPlanetPosition(name, [x, 0, z]);
  }, [x, z, name, setPlanetPosition]);

  return (
    <>
      <mesh position={[x, 0, z]} rotation={[tilt, 0, 0]}>
        <Sphere args={sphereArgs}>
          <meshStandardMaterial map={texture} />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Planet;
