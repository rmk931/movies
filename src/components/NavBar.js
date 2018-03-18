import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, AppBar, Typography, withStyles, Toolbar } from 'material-ui';

const root = {
        flexgrow: 1,
    }

const flex = {
        flex: 1,
    };


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {return (
        <div style={root}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" style={flex}>Some movies</Typography>
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
    user: PropTypes.object
}

export default withRouter(NavBar);