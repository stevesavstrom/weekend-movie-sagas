import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";

function Details() {
  const details = useSelector((store) => store.details);
  const history = useHistory();
  const handleBack = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  return (
    <div className="mainDetails">
      <h3>{details && details[0].title}</h3>
      <div className="container">
        <img className="poster" src={details && details[0].poster}></img>

        <p className="description">{details && details[0].description}</p>
      </div>

      <p className="genres">
        {details &&
          details.map((detail) => {
            return (
              <p className="genres" key={detail.id}>
                {detail.name}
              </p>
            );
          })}{" "}
      </p>

      <button className="details" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default Details;
