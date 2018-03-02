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

    fetchMovies(cb) {
    return cb([
                  {
                      index: 0,
                      originalTitle: 'some movie',
                      overview: 'some movie some movie some movie some movie some movie some movie',
                      posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
                  },
                  {
                      index: 1,
                      originalTitle: 'fun movie',
                      overview: 'some movie some movie some movie some movie some movie some movie',
                      posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
                  }
              ]);
    }

    componentDidMount() {
        this.fetchMovies(movies => {
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
