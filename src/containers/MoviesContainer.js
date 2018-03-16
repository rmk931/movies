import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MovieList } from "../components/MovieList";

import * as actions from '../ducks/movies-duck/Actions';
import * as selectors from '../ducks/movies-duck/Selectors';


class MoviesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();    
    }

    render() {
        return ( 
            <MovieList movies={this.props.movies}/>
        )
    }
}

const mapStateToProps = state => ({
    movies: selectors.selectMovies(state),
    error: selectors.selectError(state)
});

const mapDispatchToProps = {
    fetchMovies: actions.fetchMoviesRequest,       
};

MoviesContainer.propTypes = {
    fetchMovies: PropTypes.func,
    movies: PropTypes.array,
    error: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

