export default function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.2} color={0xffffff} />
      <directionalLight
        castShadow
        intensity={1.0}
        position={[5, 0, 0]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[0, 0, 0]}
        intensity={1.5}
        decay={2}
        distance={50}
      />
    </>
  );
}
