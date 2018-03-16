import { all, call } from 'redux-saga/effects';
import { authRootSaga } from './ducks/auth-duck/Saga';
import { moviesRootSaga } from './ducks/movies-duck/Saga';

const initialState = {};

export default function* RootSaga() {
    yield all([
        call(authRootSaga),
        call(moviesRootSaga)
    ]);
}