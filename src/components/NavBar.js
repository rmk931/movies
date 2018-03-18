import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button, AppBar, Typography, withStyles, Toolbar } from 'material-ui';

const styles = {
    flex: {
        flex: 1,
    },
    root: {
        flexgrow: 1,
    }
};

class NavBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>Some movies</Typography>
                    <Typography>Hello, {this.props.username}!</Typography>
                    <Button color="inherit" onClick={() => {
                        this.props.history.push('/');
                    }}>HOME</Button>

                    <Button color="inherit" onClick={() => {
                        this.props.history.push('/movies');
                    }}>MOVIES</Button>

                    {!this.props.isAuth ?
                        <Button color="inherit"onClick={() => {
                            this.props.history.push('/login');
                        }}>LOGIN</Button> :
                        <Button color="inherit" onClick={() => {
                            this.props.logout();
                            this.props.history.push('/');
                        }}>LOGOUT</Button>
                    }
                </Toolbar>
            </AppBar>
            </div>
    );}
};



NavBar.propTypes = {
    username: PropTypes.string,
    isAuth: PropTypes.bool,
    logout: PropTypes.func,
    classes: PropTypes.object
};

export default withRouter(withStyles(styles)(NavBar));