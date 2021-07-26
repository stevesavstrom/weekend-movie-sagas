import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";

function Details() {
  // Bringing in details reducer to access details in map.
  const details = useSelector((store) => store.details);

  // Back button pushes back to home page
  const history = useHistory();
  const handleBack = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  return (
    <>
      <div className="section"></div>
      <div className="mainDetails">
        {/* Conditional rendering to fix page load issue */}
        {/* details returns an array of objects - one object for each genre. details[0] is the first object and provides title, poster, and description */}
        <h3>{details && details[0].title}</h3>
        <div className="container">
          <img className="poster" src={details && details[0].poster}></img>

          <p className="description">{details && details[0].description}</p>
        </div>

        <p className="genres">
          {/* map through details reducer to return and display each genre */}
          {details &&
            details.map((detail) => {
              return (
                <p className="genres" key={detail.id}>
                  {detail.name}
                </p>
              );
            })}{" "}
        </p>

        {/* Back button uses useHistory to push back to home */}
        <button className="details" onClick={handleBack}>
          Back
        </button>
      </div>
      <div className="section"></div>
    </>
  );
}

export default Details;
