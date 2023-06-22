import React, { useState, useEffect } from "react";
import "./App.css";
import { Loader } from "./components/index";
import { Routes, Route, Link} from "react-router-dom";
import GlbDetails from "./pages/GlbDetails";
import Home from "./pages/home/Home";
import ViewGlb from "./pages/ViewGlb";


function App() {
  const [loading, setLoading] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
    localStorage.clear();
    setResponseData(JSON.parse(localStorage.getItem(searchTerm.toString())));
  }, [searchTerm]);




  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <div className="search__container">
      <Link to='/view-glb' className="viewGlb__btn">
     Load GLB
    </Link>
      <Link to='/' className="home__btn">
    Home
    </Link>
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
      </div>

      <Routes>
        <Route path="" element={<Home responseData={responseData} />} />
        <Route path="/glb-details/:id" element={<GlbDetails />} />
        <Route path="/view-glb" element={<ViewGlb />} />
      </Routes>
      
    </div>
  );
}
export default App;
