import { Vector3 } from 'three';
import { Sphere } from '@react-three/drei';

interface PlanetProps {
  position: Vector3 | [number, number, number];
  color: string;
  size: number;
}

const Planet: React.FC<PlanetProps> = ({ position, color, size }) => {
  return (
    <mesh position={position}>
      <Sphere args={[size, 16, 16]}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </mesh>
  );
};

export default Planet;
