import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function MovieItem(props) {
    return (
        <div>
            <h2>{props.movie.originalTitle}</h2>
            <p>{props.movie.overview}</p>
            <img src={props.movie.posterPath}/>
        </div>
    );
}
