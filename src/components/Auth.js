import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        justifyContent: 'center'
    },
    card: {
        margin: 10,
        padding: 10
    },
    field: {
        margin: 10,
        
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
      color: theme.palette.text.secondary
    },
});

class Auth extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
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
                            className={classes.field}
                        />
                        <br/>
                        <TextField 
                            required
                            type="password"
                            value={this.props.password} 
                            name="password" 
                            onChange={this.props.handleChange}
                            label="Password"
                            className={classes.field}
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
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default  withStyles(styles)(Auth);