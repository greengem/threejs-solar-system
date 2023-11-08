import { Torus } from '@react-three/drei';

interface RingProps {
  radius: number;
}

const Ring: React.FC<RingProps> = ({ radius }) => {

  return (
    <Torus args={[radius, 0.002, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#444" />
    </Torus>
  );
};

export default Ring;
