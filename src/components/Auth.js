import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import * as actions from '../ducks/auth-duck/Actions';
import * as selectors from '../ducks/auth-duck/Selectors';

const styles = theme => ({
    card: {
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
});

class Auth extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>Authorization</Typography>
                        <TextField 
                            required
                            type="text"
                            value={this.props.username} 
                            name="username" 
                            onChange={this.props.handleChange}
                            label="Username"
                        />
                        <TextField 
                            required
                            type="password"
                            value={this.props.password} 
                            name="password" 
                            onChange={this.props.handleChange}
                            label="Password"
                        />
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="small" 
                            type="submit" 
                            value="Submit"
                            onClick={this.props.handleSubmit}>
                            Log in
                        </Button> 
                    </CardActions>
                </Card>
            </div>
        );
    }

};

Auth.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    classes: PropTypes.object
};

export default  withStyles(styles)(Auth);