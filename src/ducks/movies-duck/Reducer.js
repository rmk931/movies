import * as types from './ActionTypes';

const initialState = {
    movies: [],
    genres: [],
    selectedGenres: [],
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
        case types.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                genres: [...action.genres]
            };
        case types.SELECT_GENRE:
            return {
                ...state,
                selectedGenres: state.selectedGenres.concat(action.id)
            };
        case types.UNSELECT_GENRE:
            return {
                ...state,
                selectedGenres: state.selectedGenres.filter(el => el !== action.id)
            };
        case types.FETCH_MOVIES_ERROR:
        case types.FETCH_GENRES_ERROR:
        case types.FETCH_MOVIE_ERROR:
            return {
                ...state,
                error: action.error
            };    
        default:
            return state;

    }
}