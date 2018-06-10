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
    error
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
    error
});

export const fetchGenresRequest = () => ({
    type: types.FETCH_GENRES_REQUEST
});

export const fetchGenresSuccess = (genres) => ({
    type: types.FETCH_GENRES_SUCCESS,
    genres
});

export const fetchGenresError = (error) => ({
    type: types.FETCH_GENRES_ERROR,
    error
});

export const selectGenre = (id) => ({
    type: types.SELECT_GENRE,
    id
});

export const unselectGenre = (id) => ({
    type: types.UNSELECT_GENRE,
    id
});