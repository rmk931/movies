import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { Button, AppBar, Typography, withStyles, Toolbar } from 'material-ui';

const root = {
        flexgrow: 1,
    }

const flex = {
        flex: 1,
    };


function NavBar(props) {
    return (
        <div style={root}>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" style={flex}>Some movies</Typography>
            <Typography color="inherit" >Username: {props.user.name}</Typography>
            <Button color="inherit" onClick={() => {
                props.history.push('/');
            }}>HOME</Button>
            <Button color="inherit" onClick={() => {
                props.history.push('/movies');
            }}>MOVIES</Button>
            <Button color="inherit" onClick={() => {
                props.history.push('/');
            }}>LOGOUT</Button>
            <Button color="inherit"onClick={() => {
                props.history.push('/login');
            }}>LOGIN</Button>
        </Toolbar>
        </AppBar>
        </div>
    );
};



NavBar.propTypes = {
    user: PropTypes.object
}
export default withRouter(NavBar);