import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import rock from "./roca.jpg";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import s from "./Dot.module.css";

export default function Dot({ location }) {
  const { lat, lon, type } = location;
  const group = useRef();
  const ref1 = useRef();
  const [hovered, setHover] = useState(false);
  const [clicked, click] = useState(false);

  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  //   useFrame(() => {
  //     group.current.lookAt(0, 0, 0);
  //   });

  const r = 2;
  //console.log(location);
  const rockTexture = useLoader(THREE.TextureLoader, rock);
  return (
    <group
      ref={group}
      {...location}
      dispose={null}
      position={[
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.sin(degToRad(lon)),
        r * Math.cos(Math.PI / 2 - degToRad(lat)),
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.cos(degToRad(lon)),
      ]}
    >
      <mesh
        {...location}
        ref={ref1}
        scale={hovered ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <Html>
          {clicked ? (
            <div className={s.popup}>
              <h3>Type: {type}</h3>
              <h3>Latitude: {lat}</h3>
              <h3>Longitude: {lon}</h3>
            </div>
          ) : (
            <p></p>
          )}
        </Html>
        <sphereGeometry attach="geometry" args={[0.05, 32, 32, -Math.PI / 2]} />
        <meshStandardMaterial
          color={type === "deep" ? "red" : "#ffea03"}
          map={rockTexture}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}
