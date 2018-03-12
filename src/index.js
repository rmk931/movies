import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import RootSaga from './RootSaga'
import { rootReducer } from "./RootReducer";
import AppContainer  from './containers/AppContainer';

import './style.css';

const history = createHistory()

const middleware = routerMiddleware(history)

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, middleware))
);

sagaMiddleware.run(RootSaga);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>
    ),
    document.getElementById('root')
);

