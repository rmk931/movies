import { combineReducers } from 'redux';
import { auth } from './ducks/auth-duck/Reducer';
import { movies } from './ducks/movies-duck/Reducer';
import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers({
    auth,
    movies,
    router: routerReducer
});
