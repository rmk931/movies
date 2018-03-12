import * as types from './ActionTypes';

export const fetchMoviesRequest = () => ({
    type: types.FETCH_MOVIES_REQUEST
});

export const fetchMoviesSuccess = (movies) => ({
    type: types.FETCH_MOVIES_SUCCESS,
    movies
});

export const fetchMoviesError = (error) => ({
    type: types.FETCH_MOVIES_ERROR,
    erorr
});

export const fetchMovieRequest = (id) => ({
    type: types.FETCH_MOVIE_REQUEST,
    id
});

export const fetchMovieSuccess = (selectedMovie) => ({
    type: types.FETCH_MOVIE_SUCCESS,
    selectedMovie
});

export const fetchMovieError = (error) => ({
    type: types.FETCH_MOVIE_ERROR,
    erorr
});