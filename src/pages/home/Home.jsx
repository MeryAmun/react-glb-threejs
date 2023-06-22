import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Home = ({responseData}) => {
  return (
    <div className="app__searchItems">
    {responseData?.data.map((item) => (
      <Link to={`/glb-details/:${item.model_id}`}  className="app__searchItemLink" key={item.model_id} state={item}>
        <div className="app__searchItem">
        <div className="item__image">
          <img src={item.preview_small_uri} alt="item" />
        </div>
        <span className="item__name">{item.name}</span>
      </div>
      </Link>
    ))}
  </div>
  )
}

export default Home