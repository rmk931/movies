import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieItem from '../components/MovieItem';

import * as actions from '../ducks/movies-duck/Actions';
import * as selectors from '../ducks/movies-duck/Selectors';

class MovieItemContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.selectedMovie.id) this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        return (
            <MovieItem movie={this.props.selectedMovie}/>
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