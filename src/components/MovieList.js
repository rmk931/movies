import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import MoviePreview from "./MoviePreview";

const styles = {
    movieList: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        justifyContent: 'center',
    }
}

class MovieList extends React.Component {
    render() {
        return (
            <div className={this.props.classes.movieList}>
                {this.props.movies.length > 0 &&
                    this.props.movies.map((movie) =>
                        <div key={movie.id}>
                            <MoviePreview 
                                poster={movie.poster_path} 
                                overview={movie.overview} 
                                id={movie.id}
                                originalTitle={movie.original_title}
                            />
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

export default withStyles(styles)(MovieList);