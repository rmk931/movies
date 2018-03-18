import * as types from './ActionTypes';

export const fetchTokenRequest = () => ({
    type: types.FETCH_TOKEN_REQUEST
});

export const fetchTokenSuccess = (token) => ({
    type: types.FETCH_TOKEN_SUCCESS,
    token
});

export const fetchTokenError = (error) => ({
    type: types.FETCH_TOKEN_ERROR,
    error
});

export const loginRequest = (username, password, request_token) => ({
    type: types.LOGIN_REQUEST,
    username,
    password,
    request_token
});

export const loginSuccess = (username) => ({
    type: types.LOGIN_SUCCESS,
    username
});

export const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    error
});

export const logout = () => ({
    type: types.LOGOUT
});