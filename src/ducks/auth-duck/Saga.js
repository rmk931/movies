import { put, takeLatest, all, call } from 'redux-saga/effects';
import XHRProvider from '../../utils/XHRProvider';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import * as types from './ActionTypes';
import * as actions from './Actions';

const xhr = new XHRProvider();

function* fetchRequestTokenSaga(action) {
    try {
        const response = yield call(xhr.requestApi, '/authentication/token/new');

        if (response) {
            yield put(actions.fetchTokenSuccess(response.request_token));
        } else {
            yield put(actions.fetchTokenError('No token response'));
        }
    } catch (error) {
        yield put(actions.fetchTokenError(error.message));
    }
}

function* loginSaga(action) {
    try {
        const response = yield call(xhr.requestApi, 'authentication/token/validate_with_login', {
            username: action.username,
            password: action.password,
            request_token: action.request_token,
        });

        if (response && response.success) {
            yield put(actions.loginSuccess());
            yield call(action.historyPush, '/movies');
        } else {
            yield put(actions.loginError(response.status_message));
        }
    } catch (error) {
        yield put(actions.loginError(error.message));
    }

}

export function* authRootSaga() {
    yield all([
        yield takeLatest(types.FETCH_TOKEN_REQUEST, fetchRequestTokenSaga),
        yield takeLatest(types.LOGIN_REQUEST, loginSaga)
    ]);
}