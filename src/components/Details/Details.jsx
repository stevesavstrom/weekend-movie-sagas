import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionChannel } from "redux-saga/effects";

function Details() {
  const dispatch = useDispatch();
  const history = useHistory();

  const details = useSelector(store => store.details);

  return (
    <div>
      <h3>{details && details[0].title}</h3>
	  <img src= {details && details[0].poster}></img>
	  <p>{details && details[0].description}</p>

	<ul>
	  {details && details.map((detail) => {
		  return <li key={detail.id}>{detail.name}</li>
	  })}
	  </ul>
    </div>
  );
}

export default Details;
