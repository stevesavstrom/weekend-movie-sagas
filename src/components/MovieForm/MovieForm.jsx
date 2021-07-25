import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

const MovieForm = () => {
	const dispatch = useDispatch();
	let [newMovie, setNewMovie] = useState([]);

	const handleTitleChange = (event) => {
        setNewMovie({...newMovie, name: event.target.value})
    }

	const handlePosterChange = (event) => {
        setNewMovie({...newMovie, name: event.target.value})
    }

	const handleDescriptionChange = (event) => {
        setNewMovie({...newMovie, name: event.target.value})
    }

	const handleGenreChange = (event) => {
        setNewMovie({...newMovie, name: event.target.value})
    }

	const addNewMovie = event => {
		event.preventDefault();
        console.log(newMovie);
		dispatch({ type: 'POST_MOVIE', payload: newMovie});
		setNewMovie({title: '', poster: '', description: '', genre: ''})
	}

	return (

	<form onSubmit={addNewMovie}>
		<h2>Add a New Movie</h2>
		<input type='text' placeholder='Title' value={newMovie.title} onChange={handleTitleChange} />

		<input type='text' placeholder='Poster URL' value={newMovie.poster} onChange={handlePosterChange} />

		<input type='text' placeholder='Description' value={newMovie.description} onChange={handleDescriptionChange} />

		<input type='text' placeholder='Poster URL' value={newMovie.genre} onChange={handleGenreChange} />

		<button>Save</button>
		<button>Cancel</button>

	</form>

	)
}

export default MovieForm;