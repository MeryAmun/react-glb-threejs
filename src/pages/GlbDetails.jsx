import React from "react";
import { useLocation } from "react-router-dom";
import './styles.css'

const GlbDetails = () => {
  const {state} = useLocation();
  const {
    glb_uri,
    name,
    native_rank,
    preview_small_uri,
    preview_large_uri,
    rank,
  } = state;

  return (
    <div className="glb__details">
      <div className="details__heading">
        <h2>GLB Details</h2>
      </div>
        <div className="glbDetails__images">
            <div className="item__image">
          <img src={preview_small_uri} alt="item" />
          <h5 className="glbDetails__title">
          Small Preview
          </h5>
        </div>

        <div className="glb__fullInfo">
          <h5 className="glbDetails__title">
            <span className="glbDetails__text">Name: </span>
            {name}
          </h5>
          <h5 className="glbDetails__title">
            <span className="glbDetails__text">Native Rank: </span> {native_rank}{" "}
          </h5>
          <h5 className="glbDetails__title">
            <span className="glbDetails__text">Rank: </span> {rank}
          </h5>
          <h5 className="glbDetails__title">
            <span className="glbDetails__text ">Download GLB here: </span>
            <a
              href={glb_uri}
              download
              className="download__item"
              rel="noreferrer"
            >
              Download GLB
            </a>{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default GlbDetails;
