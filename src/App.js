import React, { useState, useEffect } from "react";
import "./App.css";
import {Loader} from "./components/index";
import { Routes, Route } from 'react-router-dom';
import GlbDetails from "./pages/GlbDetails";
import Home from "./pages/home/Home";
import Model from "./pages/Model";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function App() {
  const [loading, setLoading] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      name: "pomegranate",
      native_rank: 105,
      preview_small_uri:
        "https://cdn.byrst.com/content/models/01H25XBT5QDCSW2KYN1G4Q3F4W/previews/01H25XC7EACCJWTGP4CR67GDTQ_thumbnail.webp",
      mode_id: "01H25XBT5QDCSW2KYN1G4Q3F4W",
    },
  ];
  const [responseData, setResponseData] = useState(
     JSON.parse(localStorage.getItem(searchTerm.toString()))
  );
  const url = `https://01v31jo48l.execute-api.us-east-1.amazonaws.com/test/public/search/air-gallery?&limit=20&q=${searchTerm}`;
 


  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(url);
    const newRes = await response.json();
    setResponseData(newRes);
    localStorage.setItem(searchTerm.toString(), JSON.stringify(newRes));
    setLoading(false);

  };

 

  useEffect(() => {
    localStorage.clear()
    setResponseData(JSON.parse(localStorage.getItem(searchTerm.toString())));
   
  }, [searchTerm]);

  if (loading) {
    return <Loader />;
  }
console.log(responseData)
  return (
    <div className="App">
      <div className="search">
        <form onSubmit={handleSearch} className="input">
          <input
            type="text"
            className="search__input"
            margin="normal"
            placeholder=" Search e.g food, drink, animal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      
    <Routes>
    <Route path='' element={<Home responseData={responseData}/>}/>
    <Route path='/glb-details/:id' element={<GlbDetails/>}/>
    </Routes>
    <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} className="app__glbContainer">
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
    </div>
  );
}
export default App;

