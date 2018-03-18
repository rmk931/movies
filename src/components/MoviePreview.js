import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        width: 345,
        papping: 10,
        margin: 10
    },
    media: {
        height: 450,
    },
};
  

function MoviePreview(props) {
    const poster = `https://image.tmdb.org/t/p/w500${props.poster}`;
    const overview = `${props.overview.slice(0, 20)}...`;
    const route = `/movies/${props.id}`;
    const { classes } = props;

    return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={poster}
                    title={props.originalTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.originalTitle}
                    </Typography>
                    <Typography component="p">
                        {overview}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small" 
                        color="primary" 
                        onClick={() => {
                            props.history.push(route);
                        }}>
                        Learn more
                    </Button>   
                </CardActions>
            </Card>
    );
}

MoviePreview.propTypes = {
    originalTitle : PropTypes.string,
    overview : PropTypes.string,
    poster : PropTypes.string,
    classes: PropTypes.object
}

export default withRouter(withStyles(styles)(MoviePreview));
