import { useEffect } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, EquirectangularReflectionMapping } from "three";

export default function SceneBackground({
  texturePath,
}: {
  texturePath: string;
}) {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, texturePath);
  texture.mapping = EquirectangularReflectionMapping;

  useEffect(() => {
    const prevBackground = scene.background;
    scene.background = texture;
    return () => {
      scene.background = prevBackground;
    };
  }, [texture, scene]);

  return null;
}
