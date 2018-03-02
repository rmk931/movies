import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { NavBar } from './components/NavBar.js';
import { MoviePreview } from './components/MoviePreview.js';
import { App } from './components/App.js';
import { Login } from './components/Login.js';
import { MovieList } from './components/MovieList.js';
import { MoviesContainer } from './containers/MoviesContainer.js';

const user = {
    name: 'Steve',
    city: 'Palo Alto'
};

const movies = [{
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

];

function fetchUser() {
    return {
        name: 'Bill'
    };
}

function fetchMovies(cb) {
    return cb([
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
    ]);
}

function login({ username, password}) {
    console.log(`Form parameters: ${username}, ${password}`);
}

function MainComponent() {
    return (
        <div>
            <App fetchUser={fetchUser} />
            <Login login={login}/>
            <MoviesContainer fetchMovies={fetchMovies} />         
        </div>
    );
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById('root')
);

