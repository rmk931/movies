import React from 'react';
import PropTypes from 'prop-types';

export function MovieItem(props) {
    return (
        <div>
            <img className="poster" src={props.poster}/>
            <h2>{props.title}</h2>
            <p>{props.overview}</p>
        </div>
    );
}

MovieItem.propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string,
    poster: PropTypes.string
};