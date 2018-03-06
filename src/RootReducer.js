import { combineReducers } from 'redux';
import { auth } from './ducks/auth-duck/Reducer';

export const rootReducer = combineReducers({
    auth
});
