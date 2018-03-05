import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const array = [
    {
        id: 0,
        originalTitle: 'some movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    },
    {
        id: 1,
        originalTitle: 'fun movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    },
    {
        id: 2,
        originalTitle: 'sad movie',
        overview: 'some movie some movie some movie some movie some movie some movie',
        posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
    }
]

export function MovieItem(props) {
    return (
        <div>
            <h2>{array[props.match.params.id].originalTitle}</h2>
            <p>{array[props.match.params.id].overview}</p>
            <img src={array[props.match.params.id].posterPath}/>
        </div>
    );
}
