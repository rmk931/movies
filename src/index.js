import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from "./RootReducer";
import AppContainer  from './containers/AppContainer.js';

import './style.css';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState
);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root')
);

