import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF(`${process.env.PUBLIC_URL}/logo.glb`, true);
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.005;
    }
  });

  return <primitive object={gltf.scene} ref={mesh} />;
}

// Define the PointLight component that creates a point light source in the scene
function PointLight() {
  return <pointLight color={0xffffff} intensity={1} position={[10, 10, 10]} />;
}

// Define the main ThreeCube component that sets up the 3D scene with the cube and point light
function ThreeCube({ width, height }) {
  // Calculate the aspect ratio for the camera
  const aspectRatio = width / height;

  // Render the 3D scene using the Canvas component from react-three/fiber
  return (
    <Canvas
      camera={{ aspect: aspectRatio, position: [0, 2, 0] }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(300, 300);
      }}
    >
      <Model />
      <PointLight />
    </Canvas>
  );
}

export default ThreeCube;
