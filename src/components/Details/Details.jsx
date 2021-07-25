import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

  // Material-UI
  import { makeStyles } from "@material-ui/core/styles";
  import Button from "@material-ui/core/Button";
  import Box from "@material-ui/core/Box";

  // Material-UI Styles
const useStyles = makeStyles({
  box: {
    margin: "30px",
  },
});


function Details() {
  // const dispatch = useDispatch();
  // const history = useHistory();

  const details = useSelector((store) => store.details);

  const classes = useStyles();

  const history = useHistory();


  const handleBack = (event) => {
    event.preventDefault();
    history.push(`/`);
  };


  return (
    <div>
      <h3>{details && details[0].title}</h3>
      <img src={details && details[0].poster}></img>
      <p>{details && details[0].description}</p>

      {details &&
        details.map((detail) => {
          return <p key={detail.id}>{detail.name}</p>;
        })}

      <Box className={classes.box}>
        <Button
          onClick={handleBack}
          className={classes.button}
          variant="outlined"
          color="primary"
          type="submit"
        >
          Movie List
        </Button>
      </Box>
    </div>
  );
}

export default Details;
