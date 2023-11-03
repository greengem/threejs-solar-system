import { Vector3, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, Sphere } from '@react-three/drei';

interface SunProps {
  position: Vector3 | [number, number, number];
}

const Sun: React.FC<SunProps> = ({ position }) => {
  const sunTexture = useLoader(TextureLoader, '/images/bodies/sun.jpg');

  return (
    <mesh position={position}>
      <Sphere args={[1, 32, 32]}>
        <MeshWobbleMaterial
          map={sunTexture}
          emissive="#FFFF99"
          emissiveIntensity={0.012}
          factor={0.3}
          speed={0.15}
        />
      </Sphere>
    </mesh>
  );
};


export default Sun;
