import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./MovieForm.css";

// Material-UI
import { makeStyles, withTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// Material-UI Styles
const useStyles = makeStyles({
  button: {
    width: "100px",
    padding: "10px",
    margin: "3px",
  },
  text: {
    width: "90%",
    margin: "3px",
  },
  box: {
    margin: "30px",
  },
  select: {
    width: "90%",
  },
});

const MovieForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const genres = useSelector((store) => store.genres);

  const classes = useStyles();

  let [newMovie, setNewMovie] = useState([]);

  useEffect(() => {
    getGenres();
    console.log("in use effect");
  }, []);

  // GET request on page load to see categories table from database
  const getGenres = () => {
    console.log("getGenres");
    dispatch({ type: "FETCH_GENRES" });
  };

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
    history.push(`/`);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  return (
    <form className={classes.form} onSubmit={addNewMovie}>
      <div className="section"></div>
      <div className="card">
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

      <Select
        className={classes.select}
        value={newMovie.genre}
        onChange={handleGenreChange}
        variant="outlined"
      >
        {genres.map((genre) => {
          return (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          );
        })}
      </Select>

      <Box className={classes.box}>
        <button type="submit">Save</button>
        <button type="submit" onClick={handleCancel}>
          Cancel
        </button>
      </Box>
      </div>
      <div className="section"></div>
    </form>
  );
};

export default MovieForm;
