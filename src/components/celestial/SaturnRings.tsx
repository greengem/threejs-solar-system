import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, DoubleSide } from 'three';
import { Ring } from '@react-three/drei';

type SaturnRingsProps = {
  texturePath: string;
  innerRadius: number;
  outerRadius: number;
};

const SaturnRings: React.FC<SaturnRingsProps> = ({ texturePath, innerRadius, outerRadius }) => {
  const texture = useLoader(TextureLoader, texturePath);

  return (
    <Ring args={[innerRadius, outerRadius, 128]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial map={texture} side={DoubleSide} transparent={true} />
    </Ring>
  );
};

export default SaturnRings;
