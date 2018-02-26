import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { NavBar } from './components/NavBar.js';
import { MoviePreview } from './components/MoviePreview.js';

const user = {
    name: 'Steve',
    city: 'Palo Alto'
};

const movie = {
    originalTitle: 'some movie',
    overview: 'some movie some movie some movie some movie some movie some movie',
    posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
}



function MainComponent() {
    return (
        <div>
            <NavBar {...user} />
            <MoviePreview {...movie} />          
        </div>
    );
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById('root')
);