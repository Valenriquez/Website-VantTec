import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Drones = () => {
  const drone = useGLTF("./drone/vtec_s4.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 5, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[3,0,0.5]}/>
      <primitive  object={drone.scene}
        scale={4}
        position={[0, 0, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const DronesCanvas = () => {
  return (
    <Canvas frameloop="demand"
    shadows
    dpr={[1, 2]}
    camera={{position: [20, 10, 5], fov: 20}}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Drones />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DronesCanvas;