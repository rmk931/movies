export const selectMovies = (state) => {
    return state.movies.movies;
};

export const selectMovie = (state) => {
    return state.movies.selectedMovie;
};

export const selectError = (state) => {
    return state.movies.error;
};
