import React from 'react';
import { Button, AppBar, Typography, withStyles } from 'material-ui';

export function MaterialNavBar(props) {
    return (
        <AppBar className="navbar" position="static">
            <Typography variant="title" color="inherit">My App</Typography>
            {username ? (
                [<Typography key={'username'}>Username: {props.user.name}</Typography>,
            <Button key={'logout'}>Logout</Button>]):
            <Button>Login</Button>}
        </AppBar>
)
};
