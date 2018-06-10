export const selectMovies = (state) => {
    return state.movies.movies;
};

export const selectMovie = (state) => {
    return state.movies.selectedMovie;
};

export const selectError = (state) => {
    return state.movies.error;
};

export const selectGenres = (state) => {
    return state.movies.genres;
};

export const selectSelectedGenres = (state) => {
    return state.movies.selectedGenres;
};

export const selectFiltredMoviesList = (state) => {
    if (!state.movies.selectedGenres.length) {
        return state.movies.movies;
    }
    return state.movies.movies.reduce((acc, cur) => {
        const genreIdIntersectionCount = cur.genre_ids.filter(el => {
            return state.movies.selectedGenres.includes(el);
        }).length;
        if (genreIdIntersectionCount) {
            return [...acc, cur];
        }
        return acc;
    }, []);
};