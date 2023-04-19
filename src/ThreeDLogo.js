import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

// Define the Box component that creates a textured 3D cube
function Box() {
  // Create a ref to the mesh object
  const mesh = useRef();

  // Load the texture using TextureLoader
  const texture = useLoader(
    THREE.TextureLoader,
    `${process.env.PUBLIC_URL}/logo.png`
  );
  // Set texture filtering options
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  // Create an array of materials using the same texture for each face of the cube
  const materials = [
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
  ];

  // Update the cube's rotation on each frame
  useFrame(() => {
    mesh.current.rotation.x += 0;
    mesh.current.rotation.y += -0.005;
  });

  // Render the mesh with box geometry and the defined materials
  return (
    <mesh ref={mesh} material={materials}>
      <boxGeometry />
    </mesh>
  );
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
      camera={{ aspect: aspectRatio, position: [0, -1, 2] }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(300, 300);
      }}
    >
      <Box />
      <PointLight />
    </Canvas>
  );
}

export default ThreeCube;
