import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Boats = () => {
    const boat = useGLTF("./drone/x500v2.gltf");
    const boatRef = useRef();

    useFrame(() => {
        if (boatRef.current) {
            boatRef.current.updateMatrixWorld();
        }
    });

    return (
        <group ref={boatRef} position={[0, 1.3, 0]}>
            <ambientLight intensity={0.15} />
            <directionalLight position={[0, 1, -1]}
                angle={0}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1.5} position={[0,0.2,0]}/>
            <pointLight intensity={2} position={[2.5,-1,0]}/>
            <primitive  object={boat.scene}
                scale={18}
            />
        </group>
    );
};

const BoatsCanvas = () => {
    return (
        <Canvas frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{position: [20, 15, 20], fov: 15, near: 0.1, 
            far: 200,}}
        gl={{ preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2.5}
                    minPolarAngle={Math.PI / 2.5}
                    target={[0, 0, 0]}
                />
                <Boats />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default BoatsCanvas;