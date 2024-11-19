import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Drones = () => {
  const drone = useGLTF("./drone/vtec_s4.gltf");
  const droneRef = useRef();

  useFrame(() => {
    if (droneRef.current) {
      droneRef.current.updateMatrixWorld();
    }
  });

  return (
    <mesh ref={droneRef}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 5, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} position={[1,1,0]}/>
      <pointLight intensity={1} position={[3.5,1,0]}/>
      <primitive  object={drone.scene}
        scale={6}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const DronesCanvas = () => {
  return (
    <Canvas frameloop="demand"
    shadows
    dpr={[1, 2]}
    camera={{position: [25, 15, 10], fov: 25, near: 0.1, 
      far: 200,}}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
          target={[2, 0, 0]}
        />
        <Drones />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DronesCanvas;