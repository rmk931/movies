import React from 'react';

import PropTypes from 'prop-types';

import { MoviePreview } from "./MoviePreview";

export class MovieList extends React.Component {
    render() {
        return (
            <div>
                {this.props.movies.length > 0 &&
                    
                        this.props.movies.map((movie) =>
                            <div key={movie.id}>
                                <MoviePreview {...movie} />
                            </div>
                        )

                    
                }
            </div>
        )
    }
}

MovieList.propTypes = {
    movies: PropTypes.array
}