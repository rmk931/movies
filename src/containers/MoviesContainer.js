import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieList from "../components/MovieList";

import * as actions from '../ducks/movies-duck/Actions';
import * as selectors from '../ducks/movies-duck/Selectors';
import Genres from '../components/Genres';

class MoviesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
        !this.props.genres.length && this.props.fetchGenres();  
    }

    changeGenreHandler = (id) => {
        this.props.selectGenre(id);
    };

    deleteGenreHandler = (id) => {
        this.props.unselectGenre(id);
    };


    render() {
        return ( 
            <div>
                <Genres 
                    genres={this.props.genres}
                    selectedGenres={this.props.selectedGenres}
                    changeGenreHandler={this.changeGenreHandler}
                    deleteGenreHandler={this.deleteGenreHandler}
                />
                <MovieList movies={this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: selectors.selectFiltredMoviesList(state),
    genres: selectors.selectGenres(state),
    selectedGenres: selectors.selectSelectedGenres(state)
});

const mapDispatchToProps = {
    fetchMovies: actions.fetchMoviesRequest,    
    fetchGenres: actions.fetchGenresRequest,
    selectGenre: actions.selectGenre,
    unselectGenre: actions.unselectGenre   
};

MoviesContainer.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    fetchGenres: PropTypes.func.isRequired,
    selectGenre: PropTypes.func.isRequired,
    unselectGenre: PropTypes.func.isRequired,
    genres: PropTypes.array.isRequired,
    selectedGenres: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

