import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies); // GET all movies from DB
    yield takeEvery('FETCH_GENRES', fetchAllGenres); // GET all genres from DB
    yield takeEvery('FETCH_DETAILS', fetchDetails); // GET details from DB (Join)
    yield takeEvery('POST_MOVIE', postMovie); // POST movie to DB
}

function* fetchAllMovies() {
    // GET all movies from DB (movie.router.js)
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all movies error');
    }       
}

function* fetchAllGenres (action) {
    // GET all genres from DB (genre.router.js)
    try {
        const genres = yield axios.get(`/api/genre/`);
        console.log('get all genres:', genres.data);
        yield put({type: 'SET_GENRES', payload: genres.data});
    } catch {
        console.log('get all genres error');
    }
}

function* fetchDetails(action) {
    // GET details from DB (SQL Join on movie.router.js)
    try {
        const details = yield axios.get(`/api/movie/${action.payload}`);
        console.log('details:', details.data);
        yield put({ type: 'SET_DETAILS', payload: details.data  });
    } catch {
        console.log('get details error');
    }       
}

function* postMovie(action) {
    // POST movie to DB (movie.router.js)
    try {
        yield call(axios.post, '/api/movie', action.payload);
        yield put({type: 'FETCH_MOVIES'});
    } catch (error) {
        console.log('Error trying to post a new movie', error);
    }
  }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie details
const details = (state = 0, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
