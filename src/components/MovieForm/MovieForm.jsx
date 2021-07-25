import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

// Material-UI Styles
const useStyles = makeStyles({
  button: {
    width: "100px",
    padding: "10px",
    margin: "3px",
  },
  text: {
    width: "20%",
    margin: "3px",
  },
  box: {
    margin: "30px",
  },
});

const MovieForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  let [newMovie, setNewMovie] = useState([]);

  const handleTitleChange = (event) => {
    setNewMovie({ ...newMovie, title: event.target.value });
  };

  const handlePosterChange = (event) => {
    setNewMovie({ ...newMovie, poster: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setNewMovie({ ...newMovie, description: event.target.value });
  };

  const handleGenreChange = (event) => {
    setNewMovie({ ...newMovie, genre_id: event.target.value });
  };

  const addNewMovie = (event) => {
    event.preventDefault();
    console.log(newMovie);
    dispatch({ type: "POST_MOVIE", payload: newMovie });
    setNewMovie({ title: "", poster: "", description: "", genre_id: "" });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  return (
    <form onSubmit={addNewMovie}>
      <h2>Add a New Movie</h2>

      <TextField
        className={classes.text}
        type="text"
        variant="outlined"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleTitleChange}
      />

      <TextField
        className={classes.text}
        type="text"
        variant="outlined"
        placeholder="Poster URL"
        value={newMovie.poster}
        onChange={handlePosterChange}
      />

      <TextField
        className={classes.text}
        type="text"
        variant="outlined"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleDescriptionChange}
      />

      <TextField
        className={classes.text}
        type="text"
        variant="outlined"
        placeholder="Genre"
        value={newMovie.genre_id}
        onChange={handleGenreChange}
      />

      {/* <button type="submit">Save</button> */}
      {/* <button onClick={handleCancel}>Cancel</button> */}

      <Box className={classes.box}>
        <Button
          type="submit"
          className={classes.button}
          variant="outlined"
          color="primary"
          type="submit"
        >
          Save
        </Button>

        <Button
		onClick={handleCancel}
          className={classes.button}
          variant="outlined"
          color="primary"
          type="submit"
        >
          Cancel
        </Button>
      </Box>
    </form>
  );
};

export default MovieForm;
