import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from '../components/NavBar';
import MovieItemContainer from '../containers/MovieItemContainer';
import { HomePage } from '../components/HomePage';

import MoviesContainer from '../containers/MoviesContainer.js';

import { BrowseRouter, Route, Switch } from 'react-router-dom';
import AuthContainer from './AuthContainer';
import { PrivateRoute } from '../components/PrivateRoute';

const isAuthTrue = true;
const isAuthFalse = true;

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <NavBar user={user} isAuth={isAuthFalse}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={AuthContainer}/>
                    <Route path="/movies" component={Movies}/>
                </Switch>
            </div>
        );
    }
}

const Movies = () => (
    <Switch>
        <PrivateRoute 
            exact 
            path="/movies"
            component={MoviesContainer}
            isAuth={isAuthFalse}    
        />
        <PrivateRoute
            path="/movies/:id"
            component={MovieItemContainer}
            isAuth={isAuthFalse}
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

//function login({ username, password}) {
//    console.log(`Form parameters: ${username}, ${password}`);
//}


function fetchUser() {
    return {
        name: 'Bill'
    };
}

export default AppContainer;