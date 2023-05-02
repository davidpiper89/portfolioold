import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "./App.css";

const Cog = () => {
  const cogRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer to the DOM element
    cogRef.current.appendChild(renderer.domElement);

    // Create a cog shape
    const cogShape = new THREE.Shape();
    cogShape.absarc(0, 0, 40, 0, Math.PI * 2, false);
    for (let i = 0; i < 10; i++) {
      const angle = (Math.PI * 2 * i) / 10;
      cogShape.absarc(0, 0, 60, angle - 0.2, angle - 0.1, true);
      cogShape.absarc(0, 0, 60, angle + 0.1, angle + 0.2, false);
    }

    // Create the cog geometry and mesh
    const extrudeSettings = { depth: 20, bevelEnabled: false };
    const cogGeometry = new THREE.ExtrudeGeometry(cogShape, extrudeSettings);
    const cogMaterial = new THREE.MeshBasicMaterial({ color: 0xf8b133 });
    const cog = new THREE.Mesh(cogGeometry, cogMaterial);

    // Add the cog to the scene
    scene.add(cog);
    camera.position.z = 150;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cog
      cog.rotation.x += 0.01;
      cog.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up the renderer on unmount
    return () => {
      cogRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={cogRef}></div>;
};

const App = () => {
  return (
    <div className="App">
      <Cog />
    </div>
  );
};

export default App;