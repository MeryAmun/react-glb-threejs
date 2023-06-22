import React, { useState } from "react";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";


const ViewGlb = () => {
    const [point, setPoint] = useState(5.01);
  return (
    <div className='viewGlb'>
        <div className="rotation__inputContainer">
    <input
      type="number"
      className="rotation__input"
      margin="normal"
      placeholder="Enter scale"
      value={point}
      onChange={(e) => setPoint(e.target.value)}
    />
     <button className="rotation__btn">
         Enter scale
        </button>
  </div>
  <Canvas
    dpr={[1, 2]}
    shadows
    camera={{ fov: 45 }}
    className="app__glbContainer"
  >
    <color attach="background" args={["#101010"]} />
    <PresentationControls
      speed={1.5}
      global
      zoom={5.5}
      rotation={[25, 60, 80]}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment={"warehouse"}>
        <Model scale={point} />
      </Stage>
    </PresentationControls>
  </Canvas></div>
  )
}

export default ViewGlb