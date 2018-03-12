import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => isAuth === true
                ? <Component {...props}/>
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
        />         
    )
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool
}