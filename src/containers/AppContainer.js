import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from '../components/NavBar.js';
import Login from '../components/Login.js';
import { MovieItem } from '../components/MovieItem';

import { MoviesContainer } from '../containers/MoviesContainer.js';

import { BrowseRouter, Route, Switch } from 'react-router-dom';

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <NavBar user={user}/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/movies" component={Movies}/>
                </Switch>
            </div>
        );
    }
}

const Movies = () => (
    <Switch>
        <Route
            exact
            path="/movies"
            component={MoviesContainer}
        />
        <Route
            path="/movies/:id"
            component={MovieItem}
        />
    </Switch>
);


function fetchMovies(cb) {
    return cb([
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
    ]);
}

const user = {
    name: 'Steve',
    city: 'Palo Alto'
};

function login({ username, password}) {
    console.log(`Form parameters: ${username}, ${password}`);
}


function fetchUser() {
    return {
        name: 'Bill'
    };
}

export default AppContainer;