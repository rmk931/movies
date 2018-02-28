import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { NavBar } from './components/NavBar.js';
import { MoviePreview } from './components/MoviePreview.js';
import { App } from './components/App.js';
import { Login } from './components/Login.js';

const user = {
    name: 'Steve',
    city: 'Palo Alto'
};

const movie = {
    originalTitle: 'some movie',
    overview: 'some movie some movie some movie some movie some movie some movie',
    posterPath: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4'
}

function fetchUser() {
    return {
        name: 'Bill'
    };
}

function login({ username, password}) {
    console.log(`Form parameters: ${username}, ${password}`);
}

function MainComponent() {
    return (
        <div>
            <App fetchUser={fetchUser} />
            <Login login={login}/>
            <MoviePreview {...movie} />          
        </div>
    );
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById('root')
);

