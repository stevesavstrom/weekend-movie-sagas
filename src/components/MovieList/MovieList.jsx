import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

// Material-UI


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleDetails =  (details) => {
        dispatch({ type: 'FETCH_DETAILS', payload: details.id })
        history.push(`details/${details.id}`)
    }

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="movieItem" key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img className="image" src={movie.poster} alt={movie.title}/>
                            <button onClick={() => handleDetails(movie)}>Learn More</button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;