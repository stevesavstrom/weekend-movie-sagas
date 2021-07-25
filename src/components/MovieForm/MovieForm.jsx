import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

const MovieForm = () => {
	const dispatch = useDispatch();

	let [newMovie, setNewMovie] = useState([]);

	const handleTitleChange = (event) => {
        setNewMovie({...newMovie, title: event.target.value})
    }

	const handlePosterChange = (event) => {
        setNewMovie({...newMovie, poster: event.target.value})
    }

	const handleDescriptionChange = (event) => {
        setNewMovie({...newMovie, description: event.target.value})
    }

	const handleGenreChange = (event) => {
        setNewMovie({...newMovie, genre_id: event.target.value})
    }

	// const handleGenreChange = (event) => {
    //     setNewMovie({...newMovie, genre: event.target.value})
    // }

	const addNewMovie = event => {
		event.preventDefault();
        console.log(newMovie);
		dispatch({ type: 'POST_MOVIE', payload: newMovie});
		setNewMovie({title: '', poster: '', description: '', genre_id: ''})
	}

	return (

	<form onSubmit={addNewMovie}>
		<h2>Add a New Movie</h2>
		<input type='text' placeholder='Title' value={newMovie.title} onChange={handleTitleChange} />

		<input type='text' placeholder='Poster URL' value={newMovie.poster} onChange={handlePosterChange} />

		<input type='text' placeholder='Description' value={newMovie.description} onChange={handleDescriptionChange} />

		<input type='text' placeholder='Genre' value={newMovie.genre_id} onChange={handleGenreChange} />

		<button type='submit'>Save</button>
		<button>Cancel</button>

	</form>

	)
}

export default MovieForm;