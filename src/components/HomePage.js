import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3
    })
});

const HomePage = (props) => {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h2"> Home page </Typography>
            </Paper>
        </div>
    )
};

HomePage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(HomePage);