import React from 'react';

import PropTypes from "prop-types";

import {MoviePreview} from "./MoviePreview";

export function NavBar(props) {
    return (
        <div>
            <h1>Some page</h1>
            <p>{props.user.name}</p>
            <button>Logout</button>
        </div>
    );
};

NavBar.propTypes = {
    user: PropTypes.object
}
