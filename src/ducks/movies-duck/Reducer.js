import * as types from './ActionTypes';

const initialState = {
    movies: [],
    selectedMovie: {},
    error: ''
}

export const movies = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.movies
            };
        case types.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                selectedMovie: action.selectedMovie
            };
        case types.FETCH_MOVIES_ERROR:
        case types.FETCH_MOVIE_ERROR:
            return {
                ...state,
                error: action.error
            };    
        default:
            return state;

    }
}