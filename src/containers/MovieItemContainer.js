import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MovieItem } from '../components/MovieItem';

import * as actions from '../ducks/movies-duck/Actions';
import * as selectors from '../ducks/movies-duck/Selectors';

class MovieItemContainer extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        return (
            <MovieItem 
                title={this.props.selectedMovie.original_title}
                overview={this.props.selectedMovie.overview}
                poster={`https://image.tmdb.org/t/p/w500${this.props.selectedMovie.poster_path}`}
            />
        )
    }
}

const mapStateToProps = state => ({
    selectedMovie: selectors.selectMovie(state),
    error: selectors.selectError(state)
});

const mapDispatchToProps = {
    fetchMovie: actions.fetchMovieRequest    
};

MovieItemContainer.propTypes = {
    fetchMovie: PropTypes.func,
    selectedMovie: PropTypes.object,
    error: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieItemContainer);