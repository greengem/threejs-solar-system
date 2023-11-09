import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RingGeometry, MeshBasicMaterial, DoubleSide, Float32BufferAttribute } from 'three';

interface SaturnRingsProps {
  innerRadius: number;
  outerRadius: number;
  texturePath: string;
  position: [number, number, number];
}

const SaturnRings: React.FC<SaturnRingsProps> = ({ innerRadius, outerRadius, texturePath, position }) => {
    const texture = useLoader(TextureLoader, texturePath);
    const meshRef = useRef<THREE.Mesh>(null);
  
    const ringGeometry = React.useMemo(() => {
      const geometry = new RingGeometry(innerRadius, outerRadius, 64);
  
      const vertices = geometry.attributes.position.count;
      const uvs = [];
      for (let i = 0; i < vertices; i++) {
        const theta = (i / (vertices - 1)) * Math.PI * 2;
        const u = theta / (Math.PI * 2);
        const v = i < vertices / 2 ? 0 : 1;
        uvs.push(u, v);
      }
  
      // Close the UV loop by setting the last UV to be the same as the first
      uvs[vertices * 2 - 2] = uvs[0];
      uvs[vertices * 2 - 1] = uvs[1];
  
      geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
      geometry.computeVertexNormals(); // To ensure the lighting is correct
  
      // If you have indices that need to close the geometry loop, include them here
      // geometry.setIndex(indices);
  
      return geometry;
    }, [innerRadius, outerRadius]);
  
    const ringMaterial = React.useMemo(() => new MeshBasicMaterial({
      map: texture,
      side: DoubleSide,
      transparent: true,
      alphaTest: 0.5,
    }), [texture]);
  
    return (
      <mesh
        ref={meshRef}
        position={position}
        rotation={[Math.PI / 2, 0, 0]}
        geometry={ringGeometry}
        material={ringMaterial}
      />
    );
  };
  
  export default SaturnRings;
  