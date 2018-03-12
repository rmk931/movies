import * as types from './ActionTypes';

moviesList = [
    {
        id: 0,
        originalTitle: 'some movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    },
    {
        id: 1,
        originalTitle: 'fun movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    },
    {
        id: 2,
        originalTitle: 'sad movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    }
];

const initialState = {
    movies: [...moviesList],
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
        case types.FETCH_MOVIE_REQUEST:
            return {
                ...state,
                selectedMovie: state.movies.find((movie) => movie.id === action.id)
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