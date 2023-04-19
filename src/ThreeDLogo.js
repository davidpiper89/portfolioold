import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

function Box() {
  const mesh = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    `${process.env.PUBLIC_URL}/logo.png`
  );
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const materials = [
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
    new THREE.MeshStandardMaterial({ map: texture }),
  ];

  useFrame(() => {
    mesh.current.rotation.x += 0;
    mesh.current.rotation.y += -0.005;
  });

  return (
    <mesh ref={mesh} material={materials}>
      <boxGeometry />
    </mesh>
  );
}

function PointLight() {
  return <pointLight color={0xffffff} intensity={1} position={[10, 10, 10]} />;
}

function ThreeCube({ width, height }) {
  const aspectRatio = width / height;

  return (
    <Canvas
      camera={{ aspect: aspectRatio, position: [0, -1, 2] }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(300, 300); // Replace 800 and 600 with your desired width and height values
      }}
    >
      <Box />
      <PointLight />
    </Canvas>
  );
}

export default ThreeCube;
