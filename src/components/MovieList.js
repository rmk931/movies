import React from 'react';

import PropTypes from 'prop-types';

import { MoviePreview } from "./MoviePreview";

export class MovieList extends React.Component {
    render() {
        return (
            <div>
                {this.props.movies.length > 0 &&
                    <ul>
                        {this.props.movies.map((movie) =>
                            <li key={movie.index}>
                                <MoviePreview {...movie} />
                            </li>
                        )}

                    </ul>
                }
            </div>
        )
    }
}

MovieList.propTypes = {
    movies: PropTypes.array
}