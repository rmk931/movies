import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const array = [
    {
        index: 0,
        originalTitle: 'some movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    },
    {
        index: 1,
        originalTitle: 'fun movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    }
]

export function MoviePreview(props) {
    const overview = `${props.overview.slice(0, 20)}...`;
    const route = `/movies/${props.id}`;

    return (
        <div>
            <Link to={route}><h2>{props.originalTitle}</h2></Link>
            <p>{overview}</p>
            <img src={props.posterPath}/>
        </div>
    );
}

MoviePreview.propTypes = {
    originalTitle : PropTypes.string,
    overview : PropTypes.string,
    posterPath : PropTypes.string
}
