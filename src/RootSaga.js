import { all, call } from 'redux-saga/effects';
import { authRootSaga } from './ducks/auth-duck/Saga';

export default function* RootSaga() {
    yield all([
        call(authRootSaga)
    ]);
}