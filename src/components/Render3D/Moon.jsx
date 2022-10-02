import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import moon from "./moon.jpg";

function Moon() {
  const moonTexture = useLoader(THREE.TextureLoader, moon);

  return (
    <>
      <mesh>
        <sphereGeometry attach="geometry" args={[2, 32, 32, -Math.PI / 2]} />
        <meshStandardMaterial map={moonTexture} wireframe={false} />
      </mesh>
    </>
  );
}

export default Moon;
