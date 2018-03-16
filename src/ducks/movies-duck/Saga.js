import { put, takeLatest, takeEvery,all, call } from 'redux-saga/effects';
import XHRProvider from '../../utils/XHRProvider';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import * as types from './ActionTypes';
import * as actions from './Actions';

const xhr = new XHRProvider();

function* fetchRequestMoviesSaga(action) {
    try {
        const response = yield call(xhr.requestApi, 'discover/movie');

        if (response) {
            yield put(actions.fetchMoviesSuccess(response.results));
        } else {
            yield put(actions.fetchMoviesError('Error'));
        }
    } catch (error) {
        yield put(actions.fetchMoviesError(error.message));
    }
}

function* fetchRequestMovieSaga(action) {
    try {
        const response = yield call(xhr.requestApi, `movie/${action.id}`);

        if (response) {
            yield put(actions.fetchMovieSuccess(response));
        } else {
            yield put(actions.fetchMovieError('Error'));
        }
    } catch (error) {
        yield put(actions.fetchMovieError(error.message));
    }

}

export function* moviesRootSaga() {
    yield all([
        yield takeEvery(types.FETCH_MOVIES_REQUEST, fetchRequestMoviesSaga),
        yield takeLatest(types.FETCH_MOVIE_REQUEST, fetchRequestMovieSaga)
    ]);
}