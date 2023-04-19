import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import logo from "../src/assets/logo.png";

function Box() {
  const mesh = useRef();

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(logo, (tex) => {
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
  });

  // const baseColour = 0x282c34;

  const materials = [
    new THREE.MeshPhongMaterial({ map: texture }),
    new THREE.MeshPhongMaterial({ map: texture }),
    new THREE.MeshPhongMaterial({ map: texture }),
    new THREE.MeshPhongMaterial({ map: texture }),
    new THREE.MeshPhongMaterial({ map: texture }),
    new THREE.MeshPhongMaterial({ map: texture }),
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
  return (
    <pointLight color={0xffffff} intensity={0.9} position={[10, 10, 10]} />
  );
}

function ThreeCube({ width, height }) {
  const aspectRatio = width / height;

  return (
    <Canvas
      camera={{ aspect: aspectRatio, position: [0, -1, 2] }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(width, height);
      }}
    >
      <Box />
      <PointLight />
    </Canvas>
  );
}
export default ThreeCube;
