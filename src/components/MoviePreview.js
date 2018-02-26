import React from 'react';

import PropTypes from 'prop-types';

export function MoviePreview(props) {
    const overview = props.overview.slice(0, 20);
    
    return (
        <div>
            <h2>{props.originalTitle}</h2>
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
