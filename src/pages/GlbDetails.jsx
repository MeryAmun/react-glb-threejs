import React from "react";
import { useLocation } from "react-router-dom";
import './styles.css'

const GlbDetails = () => {
  const {state} = useLocation();
  const {
    glb_uri,
    model_id,
    name,
    native_rank,
    preview_small_uri,
    preview_large_uri,
    project_id,
    rank,
    usd_uri,
    web_viewer_uri,
  } = state;

  return (
    <div className="glbDetails">
      <div className="details__heading">
        <h2>GLB Details</h2>
      </div>
      <div className="glbDetails__container">
        <div className="glbDetails__images">
            <div className="item__image">
          <img src={preview_small_uri} alt="item" />
          <h5 className="glbDetails__title">
          Small Preview
          </h5>
        </div>
        <div className="item__image">
          <img src={preview_large_uri} alt="item" />
          <h5 className="glbDetails__title">
         large Preview
          </h5>
        </div>
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
