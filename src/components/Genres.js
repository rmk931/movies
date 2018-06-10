import React from 'react';
import PropTypes from 'prop-types';
import { Chip, withStyles } from 'material-ui';

const styles = theme => ({
    root: {
      paddingTop: '4px',
      paddingBottom: '4px',
      textAlign: 'center'
    },
    element: {
        marginLeft: '4px'
    }
});

class Genres extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.props.genres.map(genre => (this.props.selectedGenres.includes(genre.id) ?
                    <Chip
                        className={classes.element}
                        key={genre.id}
                        label={genre.name}
                        onDelete={() => this.props.deleteGenreHandler(genre.id)}
                    /> :
                    <Chip
                        className={classes.element}
                        key={genre.id}
                        label={genre.name}
                        onClick={() => this.props.changeGenreHandler(genre.id)}
                    />
                ))}
            </div>
        );
    }
}

Genres.defaultProps = {
    genres: [],
    selectedGenres: []
};

Genres.propTypes = {
    genres: PropTypes.array,
    selectedGenres: PropTypes.array,
    deleteGenreHandler : PropTypes.func.isRequired,
    changeGenreHandler: PropTypes.func.isRequired,
    classes: PropTypes.object
};

export default withStyles(styles)(Genres);