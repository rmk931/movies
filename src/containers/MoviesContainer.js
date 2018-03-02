import React from 'react';

import PropTypes from "prop-types";

import {MovieList} from "../components/MovieList";

export class MoviesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.props.fetchMovies(movies => {
            this.setState({
                movies: movies
            })
        })
    }

    render() {
        return (
            <MovieList movies={this.state.movies}/>
        )
    }
}

MoviesContainer.propTypes = {
    fetchMovies: PropTypes.func
}
