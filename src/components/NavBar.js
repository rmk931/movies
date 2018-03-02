import React from 'react';

import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {MoviePreview} from "./MoviePreview";

function NavBar(props) {
    return (
        <div>
            <h1>Some page</h1>
            <p>{props.user.name}</p>


            <div onClick={() => {
                props.history.push('/');

            }}>Logout</div>

            <Link to="/login">Login</Link>

        </div>
    );
};



NavBar.propTypes = {
    user: PropTypes.object
}
export default withRouter(NavBar);