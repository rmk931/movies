import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export function MoviePreview(props) {
    const overview = `${props.overview.slice(0, 20)}...`;
    const route = `/movies/${props.id}`;

    return (
        <div>
            <img src={props.posterPath}/>
            <h2>{props.originalTitle}</h2>
            <p>{overview}</p>
            <Link to={route}><button>Learn more</button></Link>
        </div>
    );
}

MoviePreview.propTypes = {
    originalTitle : PropTypes.string,
    overview : PropTypes.string,
    posterPath : PropTypes.string
}
