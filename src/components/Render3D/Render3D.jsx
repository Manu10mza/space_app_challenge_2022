//import { useState } from "react";
//import { Canvas, useFrame } from "@react-three/fiber";
//import { OrbitControls } from "@react-three/drei";
//import { useLoader } from "@react-three/fiber";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//import Model from "./Model.jsx";
import Moon from "./Moon.jsx";
import Locations from "./Locations.jsx";
import data from "../../Data/Data.json";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
//import Background from "./Background.jsx";

import { Html, useProgress } from "@react-three/drei";
import s from "./Render3D.module.css";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function Render3D() {
  //console.log(data);

  return (
    <div className={s.principal}>
      <Canvas
        className={s.canvas}
        camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000 }}
      >
        <OrbitControls autoRotate={true} autoRotateSpeed={1} />
        <Stars />
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={40 / 100} />
          <Moon />
          <Locations data={data} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// function Box() {
//   const gltf = useLoader(GLTFLoader, "/LUNA.gltf");
//   return (
//     <mesh>
//       <Suspense fallback={null}>
//         <primitive object={gltf.scene} />
//       </Suspense>
//     </mesh>
//   );
// }

// export default function Render3D() {
//   return (
//     <Canvas>
//       <OrbitControls />
//       <ambientLight intensity={0.5} />
//       <Box />
//     </Canvas>
//   );
// }

// export default function Render3D() {
//   const gltf = useLoader(GLTFLoader, "/LUNA.gltf");
//   return (
//     <Suspense fallback={null}>
//       <primitive object={gltf.scene} />
//     </Suspense>
//   );
// }

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta));
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

// export default function Render3D() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//     </Canvas>
//   );
// }
