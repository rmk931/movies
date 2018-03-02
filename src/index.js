import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { NavBar } from './components/NavBar.js';
import { MoviePreview } from './components/MoviePreview.js';
import { App } from './components/App.js';
import { Login } from './components/Login.js';
import { MovieList } from './components/MovieList.js';
import { MoviesContainer } from './containers/MoviesContainer.js';

import AppContainer  from './containers/AppContainer.js';



// function MainComponent() {
//     return (
//         <div>
//             <App fetchUser={fetchUser} />
//             <Login login={login}/>
//             <MoviesContainer fetchMovies={fetchMovies} />
//         </div>
//     );
// }

ReactDOM.render((
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    ),
    document.getElementById('root')
);

